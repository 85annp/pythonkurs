import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  const modules = await prisma.module.findMany({
    orderBy: { order: 'asc' }
  });

  const progress = await prisma.progress.findMany({
    where: { userId: session.user.id }
  });

  const progressMap = progress.reduce((acc, p) => {
    acc[p.moduleId] = p.status;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Hej {session.user.name}! 👋</h1>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Här är dina kursmoduler. Klicka på en modul för att fortsätta lära dig.</p>
      
      <div className="grid">
        {modules.map((m) => {
          const status = progressMap[m.id] || "NOT_STARTED";
          const isCompleted = status === "COMPLETED";
          const isInProgress = status === "IN_PROGRESS";

          return (
            <Link href={`/module/${m.slug}`} key={m.id} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="card-icon">🐍</div>
                {isCompleted && <span className="badge completed">Klar ✓</span>}
                {isInProgress && <span className="badge">Påbörjad</span>}
              </div>
              <h3>{m.order}. {m.title}</h3>
              <p>{m.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
