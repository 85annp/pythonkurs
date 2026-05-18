"use server";

import { auth } from "../../auth";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

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

export async function createStudent(username: string, passwordPlain: string) {
  const session = await auth();
  if (!session?.user || session.user.role !== "TEACHER") {
    throw new Error("Unauthorized");
  }

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    throw new Error("Användarnamnet är redan upptaget.");
  }

  const hashedPassword = await bcrypt.hash(passwordPlain, 10);

  await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: "STUDENT"
      }
  });

  revalidatePath("/teacher");
}

export async function batchCreateStudents(count: number, prefix: string = "Elev") {
  const session = await auth();
  if (!session?.user || session.user.role !== "TEACHER") {
    throw new Error("Unauthorized");
  }

  if (count <= 0 || count > 50) {
    throw new Error("Ange ett antal mellan 1 och 50.");
  }

  const generatedAccounts = [];

  for (let i = 1; i <= count; i++) {
    const formattedNumber = i.toString().padStart(2, "0");
    const baseUsername = `${prefix}${formattedNumber}`;
    let username = baseUsername;
    
    // Ensure uniqueness by appending random strings if necessary
    let exists = await prisma.user.findUnique({ where: { username } });
    let attempts = 0;
    while (exists && attempts < 10) {
      username = `${baseUsername}_${Math.random().toString(36).substring(2, 6)}`;
      exists = await prisma.user.findUnique({ where: { username } });
      attempts++;
    }

    const passwordPlain = Math.random().toString(36).substring(2, 8); // 6 character random
    const hashedPassword = await bcrypt.hash(passwordPlain, 10);

    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: "STUDENT"
      }
    });

    generatedAccounts.push({ username, password: passwordPlain });
  }

  revalidatePath("/teacher");
  return generatedAccounts;
}

export async function deleteStudent(studentId: string) {
  const session = await auth();
  if (!session?.user || session.user.role !== "TEACHER") {
    throw new Error("Unauthorized");
  }

  await prisma.user.delete({
    where: { id: studentId }
  });

  revalidatePath("/teacher");
}
