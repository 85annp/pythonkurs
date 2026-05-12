import { prisma } from "../../../lib/prisma";
import { notFound, redirect } from "next/navigation";
import { auth } from "../../../../auth";
import PythonIDE from "../../../components/PythonIDE";
import Link from "next/link";

import { ModuleContent } from "../../../content";

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  const moduleInfo = await prisma.module.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!moduleInfo) {
    notFound();
  }

  // Hämta elevens tidigare kod för modulen
  const progress = await prisma.progress.findUnique({
    where: {
      userId_moduleId: {
        userId: session.user.id,
        moduleId: moduleInfo.id
      }
    }
  });

  const ContentComponent = ModuleContent[moduleInfo.slug] || (() => <p>Innehåll saknas för denna modul.</p>);

  return (
    <div>
      <Link href="/dashboard" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--primary)', fontWeight: '600' }}>
        &larr; Tillbaka till Dashboard
      </Link>
      
      <div className="module-layout">
        <div className="module-theory">
          <div className="module-header">
            <h1 style={{ color: 'var(--primary)', fontSize: '2rem' }}>{moduleInfo.order}. {moduleInfo.title}</h1>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '0.5rem' }}>{moduleInfo.description}</p>
          </div>
          
          <ContentComponent />
        </div>

        <div className="module-ide">
          <PythonIDE 
            moduleId={moduleInfo.id} 
            title={moduleInfo.title} 
            initialCode={progress?.savedCode || undefined} 
          />
        </div>
      </div>
    </div>
  );
}
