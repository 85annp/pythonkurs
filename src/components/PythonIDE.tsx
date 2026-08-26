"use client";

import { useState, useRef, useEffect } from "react";
import { markModuleCompleted, saveModuleCode } from "../app/actions";

declare global {
  interface Window {
    loadPyodide: (config: any) => Promise<any>;
    appendOutput: (text: string) => void;
  }
}

interface PythonIDEProps {
  moduleId?: string;
  title?: string;
  initialCode?: string;
  initialIsCompleted?: boolean;
  hideCompletion?: boolean;
}

export default function PythonIDE({ moduleId, title, initialCode = '# Uppgift 1\nprint("Hej världen!")', initialIsCompleted = false, hideCompletion = false }: PythonIDEProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("Laddar Python-miljö...");
  const [pyodide, setPyodide] = useState<any>(null);
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);
  const [isLoading, setIsLoading] = useState(true);
  const [showTutor, setShowTutor] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [hasEdited, setHasEdited] = useState(false);

  useEffect(() => {
    if (!moduleId || !hasEdited) return;

    setSaveStatus("Sparar...");
    const timeout = setTimeout(async () => {
      try {
        await saveModuleCode(moduleId, code);
        setSaveStatus("Sparad ✅");
      } catch (err) {
        setSaveStatus("❌ Fel vid sparning");
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [code, moduleId, hasEdited]);

  useEffect(() => {
    if (!window.loadPyodide && !document.querySelector("#pyodide-script")) {
      const script = document.createElement("script");
      script.id = "pyodide-script";
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
      script.async = true;
      document.body.appendChild(script);
    }
    let interval = setInterval(async () => {
      if (window.loadPyodide) {
        clearInterval(interval);
        try {
          let py = (window as any).pyodideInstance;
          if (!py) {
            py = await window.loadPyodide({
              indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
            });
            
            await py.runPythonAsync(`
import builtins
import js
import sys

class CustomStdout:
    def write(self, text):
        if hasattr(js.window, 'appendOutput'):
            js.window.appendOutput(text)
    def flush(self):
        pass

sys.stdout = CustomStdout()

def custom_input(prompt_text=""):
    res = js.prompt(prompt_text)
    if res is None:
        res = ""
    print(str(prompt_text) + str(res))
    return res

builtins.input = custom_input
            `);
            (window as any).pyodideInstance = py;
          }
          
          setPyodide(py);
          setOutput("✅ Python-miljön är redo!\\n");
          setIsLoading(false);
        } catch (err) {
          setOutput("❌ Kunde inte ladda Python-miljön.\\n");
          setIsLoading(false);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const runCode = async () => {
    if (!pyodide) return;
    
    // Bind global output to this specific IDE instance
    window.appendOutput = (text: string) => {
      setOutput((prev) => prev + text);
    };
    
    setOutput("Kör koden...\\n---\\n");
    try {
      await pyodide.runPythonAsync(code);
    } catch (err: any) {
      setOutput((prev) => prev + err.toString() + "\\n");
    }
    setOutput((prev) => prev + "\\n---\\nKörning klar.\\n");
  };

  const toggleCompletion = async () => {
    if (moduleId) {
      const newStatus = !isCompleted;
      await markModuleCompleted(moduleId, newStatus);
      setIsCompleted(newStatus);
    }
  };

  const openPythonTutor = () => {
    const encodedCode = encodeURIComponent(code);
    const tutorUrl = \`https://pythontutor.com/visualize.html#code=\${encodedCode}&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false\`;
    window.open(tutorUrl, '_blank');
  };

  return (
    <div style={{ marginBottom: hideCompletion ? '2rem' : '0' }}>
      <div className="editor-container" style={{ height: hideCompletion ? '350px' : '600px' }}>
        <div className="editor-pane">
          <div className="editor-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>💻 editor.py</span>
              {saveStatus && <span style={{ fontSize: '0.8rem', color: '#888' }}>{saveStatus}</span>}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="button" className="btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', backgroundColor: '#475569', color: '#fff', border: 'none' }} onClick={openPythonTutor}>
                <span role="img" aria-label="visualize">🔍</span> Visualisera (Ny flik)
              </button>
              <button type="button" className="btn btn-primary" style={{ padding: '0.25rem 1rem', fontSize: '0.8rem' }} onClick={runCode} disabled={isLoading}>
                <span role="img" aria-label="run">▶</span> Kör
              </button>
            </div>
          </div>
          <textarea 
            className="editor-body"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setHasEdited(true);
            }}
            style={{ 
              width: '100%', 
              height: '100%', 
              padding: '1rem', 
              color: '#d4d4d4', 
              fontFamily: 'monospace', 
              border: 'none', 
              resize: 'none',
              outline: 'none',
              fontSize: '1rem'
            }}
            spellCheck={false}
          />
        </div>
        
        <div className="editor-pane">
          <div className="editor-header">
            <span>Terminal</span>
            <button type="button" onClick={() => setOutput("")} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Rensa</button>
          </div>
          <div className="terminal">
            {output}
          </div>
        </div>
      </div>

      {!hideCompletion && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          {isCompleted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <p style={{ color: 'var(--success)', fontWeight: 'bold', margin: 0 }}>✅ Du har markerat denna modul som klar!</p>
              <button 
                onClick={toggleCompletion}
                style={{ background: 'none', border: 'none', color: '#888', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Ångra klarmarkering
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={toggleCompletion}>
              Markera "{title}" som klar
            </button>
          )}
        </div>
      )}
    </div>
  );
}
