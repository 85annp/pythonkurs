import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import TeacherApprovalToggle from "../../components/TeacherApprovalToggle";

export default async function TeacherDashboard() {
  const session = await auth();
  
  if (!session?.user || session.user.role !== "TEACHER") {
    redirect("/"); // Endast för lärare
  }

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    include: { progress: { include: { module: true } } }
  });

  const modules = await prisma.module.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Lärarvy - Elevers framsteg 📊</h1>
      
      <div style={{ overflowX: 'auto', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--secondary)' }}>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Elev</th>
              {modules.map(m => (
                <th key={m.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>{m.order}. {m.title}</th>
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
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {student.image && <img src={student.image} alt="" style={{ width: '30px', borderRadius: '50%' }} />}
                      {student.name || student.email}
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
