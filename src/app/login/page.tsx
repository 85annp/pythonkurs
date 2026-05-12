import { signIn } from "../../../auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const errorMessage = searchParams.error === "CredentialsSignin" 
    ? "Ogiltigt användarnamn eller lösenord." 
    : searchParams.error 
      ? "Ett fel inträffade vid inloggning." 
      : "";

  return (
    <div className="flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="card-icon">🐍</div>
          <h2>Logga in</h2>
          <p>Ange dina inloggningsuppgifter från läraren.</p>
        </div>

        {errorMessage && (
          <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {errorMessage}
          </div>
        )}

        <form
          action={async (formData) => {
            "use server";
            try {
              await signIn("credentials", formData);
            } catch (error) {
              if (error instanceof AuthError) {
                switch (error.type) {
                  case 'CredentialsSignin':
                    return redirect('/login?error=CredentialsSignin');
                  default:
                    return redirect('/login?error=UnknownError');
                }
              }
              throw error; // Rethrow next/navigation redirect errors
            }
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Användarnamn</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Lösenord</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
}
