"use client";

import { useState } from "react";
import { deleteStudent } from "../app/actions";

export default function DeleteStudentButton({ studentId, studentName }: { studentId: string, studentName: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Är du helt säker på att du vill radera ${studentName}? All inlämnad kod kommer att försvinna permanent.`);
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await deleteStudent(studentId);
    } catch (error) {
      alert("Kunde inte radera eleven.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={loading}
      style={{ 
        background: "none", 
        border: "none", 
        color: "var(--danger)", 
        cursor: "pointer", 
        fontSize: "0.8rem",
        padding: "0",
        textDecoration: "underline"
      }}
      title="Radera elev"
    >
      {loading ? "Raderar..." : "Ta bort"}
    </button>
  );
}
