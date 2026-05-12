import Link from "next/link";
import { auth, signIn, signOut } from "../../auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        🐍 Pythonprogrammering
      </Link>
      
      <div className="navbar-menu">
        {session?.user ? (
          <>
            <Link href="/dashboard" className="btn btn-outline">
              Min Dashboard
            </Link>
            {session.user.role === "TEACHER" && (
              <Link href="/teacher" className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                Lärarvy
              </Link>
            )}
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="btn btn-outline">Logga ut</button>
            </form>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary">Logga in</Link>
        )}
      </div>
    </nav>
  );
}
