"use client";

import { useState } from "react";
import { createStudent, batchCreateStudents } from "../app/actions";

type GeneratedAccount = { username: string; passwordPlain?: string; password?: string };

export default function StudentManager() {
  const [mode, setMode] = useState<"SINGLE" | "BATCH">("BATCH");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [generatedAccounts, setGeneratedAccounts] = useState<GeneratedAccount[]>([]);

  const handleSingleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setGeneratedAccounts([]);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      await createStudent(username, password);
      setSuccess(`Eleven ${username} skapades!`);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Ett fel inträffade.");
    } finally {
      setLoading(false);
    }
  };

  const handleBatchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setGeneratedAccounts([]);

    const formData = new FormData(e.currentTarget);
    const count = parseInt(formData.get("count") as string, 10);
    const prefix = formData.get("prefix") as string;

    try {
      const accounts = await batchCreateStudents(count, prefix);
      setGeneratedAccounts(accounts);
      setSuccess(`${accounts.length} elever skapades.`);
    } catch (err: any) {
      setError(err.message || "Ett fel inträffade.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>Elevhantering</h3>
      
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <button 
          className={`btn ${mode === "BATCH" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setMode("BATCH")}
        >
          Masskapa Elever
        </button>
        <button 
          className={`btn ${mode === "SINGLE" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setMode("SINGLE")}
        >
          Skapa Enskild Elev
        </button>
      </div>

      {error && <div style={{ color: "var(--danger)", marginBottom: "1rem" }}>{error}</div>}
      {success && <div style={{ color: "var(--success)", marginBottom: "1rem" }}>{success}</div>}

      {mode === "SINGLE" ? (
        <form onSubmit={handleSingleSubmit} style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Användarnamn</label>
            <input name="username" required style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Lösenord</label>
            <input name="password" required style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)" }} />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Skapar..." : "Skapa"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleBatchSubmit} style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Antal elever (max 50)</label>
            <input name="count" type="number" min="1" max="50" defaultValue="20" required style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)", width: "100px" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prefix</label>
            <input name="prefix" defaultValue="Elev" required style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)", width: "100px" }} />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Genererar..." : "Generera Elever"}
          </button>
        </form>
      )}

      {generatedAccounts.length > 0 && (
        <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "8px" }}>
          <h4 style={{ color: "var(--warning)", marginBottom: "0.5rem" }}>⚠️ VIKTIGT: Spara dessa uppgifter!</h4>
          <p style={{ fontSize: "0.9rem", marginBottom: "1rem", color: "#ccc" }}>Lösenorden är krypterade och kan inte ses igen. Kopiera denna lista och spara den säkert.</p>
          <pre style={{ 
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem", 
            borderRadius: "4px", 
            overflowY: "auto", 
            maxHeight: "300px",
            fontSize: "0.9rem"
          }}>
            {generatedAccounts.map(acc => `${acc.username}: ${acc.password}`).join('\n')}
          </pre>
        </div>
      )}
    </div>
  );
}
