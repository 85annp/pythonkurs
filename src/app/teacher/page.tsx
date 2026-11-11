import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import TeacherApprovalToggle from "../../components/TeacherApprovalToggle";
import StudentManager from "../../components/StudentManager";
import DeleteStudentButton from "../../components/DeleteStudentButton";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function TeacherDashboard() {
  const session = await auth();
  
  if (!session?.user || session.user.role !== "TEACHER") {
    redirect("/"); // Endast för lärare
  }

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    include: { progress: { include: { module: true } } },
    orderBy: { username: "asc", },
  });

  const modules = await prisma.module.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Lärarvy - Administrera Kurs 📊</h1>
      
      <StudentManager />

      <div className="card" style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "0.75rem" }}>Kursens Moduler ({modules.length} st)</h3>
        <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "1rem" }}>
          Klicka på en modul för att förhandsgranska dess innehåll och uppgifter:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {modules.map(m => (
            <Link 
              key={m.id} 
              href={`/module/${m.slug}`}
              className="btn btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.4rem 0.8rem", textDecoration: "none" }}
            >
              🐍 {m.order}. {m.title}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Elevers Framsteg</h3>
        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
          Tips: Tabellen kan scrollas i sidled för att se alla moduler &rarr;
        </span>
      </div>

      <div style={{ overflowX: 'auto', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--secondary)' }}>
              <th style={{ 
                padding: '1rem', 
                borderBottom: '1px solid var(--border-color)', 
                position: 'sticky', 
                left: 0, 
                backgroundColor: 'var(--secondary)', 
                zIndex: 2,
                minWidth: '150px'
              }}>
                Elev
              </th>
              {modules.map(m => (
                <th key={m.id} style={{ 
                  padding: '1rem', 
                  borderBottom: '1px solid var(--border-color)', 
                  minWidth: '160px',
                  whiteSpace: 'nowrap'
                }}>
                  <Link 
                    href={`/module/${m.slug}`} 
                    style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}
                    title={`Öppna modul ${m.order}: ${m.title}`}
                  >
                    {m.order}. {m.title}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => {
              const progressMap = student.progress.reduce((acc, p) => {
                acc[p.moduleId] = p;
                return acc;
              }, {} as Record<string, any>);

              return (
                <tr key={student.id}>
                  <td style={{ 
                    padding: '1rem', 
                    borderBottom: '1px solid var(--border-color)', 
                    verticalAlign: 'top',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: 'var(--card-bg)',
                    zIndex: 1,
                    boxShadow: '2px 0 5px -2px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 'bold' }}>{student.username}</span>
                      <DeleteStudentButton studentId={student.id} studentName={student.username} />
                    </div>
                  </td>
                  {modules.map(m => {
                    const p = progressMap[m.id];
                    const status = p?.status || "NOT_STARTED";
                    const savedCode = p?.savedCode;
                    const isApproved = p?.teacherApproved || false;

                    return (
                      <td key={m.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', verticalAlign: 'top' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <div>
                            {status === "COMPLETED" && <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>Klar ✓</span>}
                            {status === "IN_PROGRESS" && <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Påbörjad</span>}
                            {status === "NOT_STARTED" && <span style={{ color: '#94a3b8' }}>-</span>}
                          </div>
                          
                          {status !== "NOT_STARTED" && (
                            <TeacherApprovalToggle studentId={student.id} moduleId={m.id} initialApproved={isApproved} />
                          )}
                        </div>
                        
                        {savedCode && (
                          <details style={{ marginTop: '0.5rem' }}>
                            <summary style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                              Visa kod
                            </summary>
                            <pre style={{ 
                              marginTop: '0.5rem',
                              fontSize: '0.75rem', 
                              backgroundColor: '#1e1e1e', 
                              color: '#d4d4d4', 
                              padding: '0.5rem', 
                              borderRadius: '4px', 
                              overflowX: 'auto', 
                              maxWidth: '250px',
                              maxHeight: '150px',
                              overflowY: 'auto'
                            }}>
                              {savedCode}
                            </pre>
                          </details>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {students.length === 0 && (
          <p style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Inga elever registrerade ännu.</p>
        )}
      </div>
    </div>
  );
}
