"use client";

import { useState } from "react";
import { toggleTeacherApproval } from "../app/actions";

interface Props {
  studentId: string;
  moduleId: string;
  initialApproved: boolean;
}

export default function TeacherApprovalToggle({ studentId, moduleId, initialApproved }: Props) {
  const [isApproved, setIsApproved] = useState(initialApproved);
  const [isLoading, setIsLoading] = useState(false);

  const toggleApproval = async () => {
    setIsLoading(true);
    const newValue = !isApproved;
    // Optimistic UI update
    setIsApproved(newValue);
    
    try {
      await toggleTeacherApproval(studentId, moduleId, newValue);
    } catch (err) {
      console.error(err);
      // Revert if failed
      setIsApproved(!newValue);
      alert("Kunde inte spara godkännandet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={toggleApproval}
      disabled={isLoading}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.25rem', 
        cursor: isLoading ? 'wait' : 'pointer', 
        fontSize: '0.85rem',
        background: 'none',
        border: 'none',
        padding: 0,
        color: isApproved ? 'var(--success)' : 'inherit',
        fontWeight: isApproved ? 'bold' : 'normal',
      }}
    >
      {isApproved ? '✅ Godkänd' : '⬜ Godkänn'}
    </button>
  );
}
