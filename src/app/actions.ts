"use server";

import { auth } from "../../auth";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function markModuleCompleted(moduleId: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.progress.upsert({
    where: {
      userId_moduleId: {
        userId: session.user.id,
        moduleId: moduleId,
      }
    },
    update: {
      status: "COMPLETED"
    },
    create: {
      userId: session.user.id,
      moduleId: moduleId,
      status: "COMPLETED"
    }
  });

  revalidatePath("/dashboard");
  revalidatePath("/teacher");
  revalidatePath(`/module/[slug]`);
}

export async function saveModuleCode(moduleId: string, code: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.progress.upsert({
    where: {
      userId_moduleId: {
        userId: session.user.id,
        moduleId: moduleId,
      }
    },
    update: {
      savedCode: code
    },
    create: {
      userId: session.user.id,
      moduleId: moduleId,
      savedCode: code
    }
  });
  
  // We don't revalidate heavily here to avoid interrupting the user's flow
  // but we might want to revalidate the teacher page.
  revalidatePath("/teacher");
}

export async function toggleTeacherApproval(studentId: string, moduleId: string, approved: boolean) {
  const session = await auth();
  if (!session?.user || session.user.role !== "TEACHER") {
    throw new Error("Unauthorized: Only teachers can approve code.");
  }

  await prisma.progress.upsert({
    where: {
      userId_moduleId: {
        userId: studentId,
        moduleId: moduleId,
      }
    },
    update: {
      teacherApproved: approved
    },
    create: {
      userId: studentId,
      moduleId: moduleId,
      teacherApproved: approved,
      status: "COMPLETED" // If they approve, it must have been completed
    }
  });

  revalidatePath("/teacher");
}
