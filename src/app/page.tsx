import { auth } from "../../auth";
import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function Home() {
  const session = await auth();
  const modules = await prisma.module.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div>
      <div className="hero">
        <h1>Välkommen till Python-kursen! 🚀</h1>
        <p>Lär dig programmera från grunden. Logga in med det användarnamn och lösenord du fått av din lärare för att spara dina framsteg.</p>
        {!session && (
          <p style={{ marginTop: '2rem', fontWeight: '600' }}>Klicka på logga in ovan för att komma igång.</p>
        )}
        {session && (
          <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Gå till min Dashboard
          </Link>
        )}
      </div>

      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Kursinnehåll</h2>
      <div className="grid">
        {modules.map((m) => (
          <div key={m.id} className="card">
            <div className="card-icon">🐍</div>
            <h3>{m.order}. {m.title}</h3>
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
