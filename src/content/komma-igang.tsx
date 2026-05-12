import PythonIDE from "../components/PythonIDE";

export default function KommaIgang() {
  return (
    <div className="module-content">
      <h2>Välkommen till Python!</h2>
      <p>
        Python är ett av världens populäraste programmeringsspråk eftersom det är både kraftfullt och lätt att läsa. 
        Många säger att Python-kod nästan ser ut som vanlig engelska. Det gör det till ett perfekt språk att börja sin programmeringsresa med!
      </p>

      <p>
        Den här kursen bygger på att testkör de exempel som finns och gör övningar här i webbläsaren.
        Ibland kan det vara svårt att förstå vad som händer i koden och då finns det möjlighet att köra programmet rad för rad genom att välja Visualisera (Ny flik). 
      </p>
      <p>
        När exemplen blir mer omfattande och även innehåller inmatning kan det vara lämpligt att provköra i en riktig Python-miljö på datorn. 
        Då kan du ladda ner Thonny (<a href="https://thonny.org/" target="_blank">https://thonny.org/</a>) som är enkel att använda och lämplig för nybörjare.
      </p>

      <h2>Skriva ut text</h2>
      <p>
        Det absolut första och vanligaste kommandot vi ska lära oss är <code>print()</code>. Det används för att berätta för datorn att den ska visa en text på skärmen (i terminalen).
        Observera att text i Python alltid måste omges av citattecken (<code>" "</code>) eller apostrofer (<code>' '</code>).
      </p>
      
      <PythonIDE hideCompletion initialCode={`print("Hej världen!")\nprint('Python är roligt!')`} />

      <h2>Kommentarer i koden</h2>
      <p>
        Ibland vill du skriva anteckningar i din kod som bara är till för dig själv eller andra människor som läser koden, utan att datorn försöker köra texten. Detta kallas för <strong>kommentarer</strong>.
      </p>
      
      <h3>Enradskommentarer</h3>
      <p>För att kommentera bort en enstaka rad använder du en brädgård (<code>#</code>). Allt som står efter brädgården på samma rad ignoreras av datorn.</p>
      <PythonIDE hideCompletion initialCode={`# Det här är en kommentar. Datorn ignorerar den!\nprint("Detta körs dock som vanligt") # Man kan också lägga kommentarer efter koden`} />

      <h3>Flerradskommentarer</h3>
      <p>Om du vill skriva en längre förklaring som sträcker sig över flera rader, kan du använda tredubbla citattecken (<code>"""</code>) i början och i slutet av din text.</p>
      <PythonIDE hideCompletion initialCode={`"""\nDet här är en längre kommentar.\nDen kan sträcka sig över\nhur många rader som helst.\nPerfekt för att förklara stora kodblock!\n"""\nprint("Bara denna rad visas i terminalen.")`} />

      <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', borderBottom: 'none' }} />

      <h3>Din uppgift (görs i huvudeditorn längst ner)</h3>
      <div className="task-box">
        <ol>
          <li>Gå ner till editorn under denna text.</li>
          <li>Skriv en kommentar (med <code>#</code>) där du skriver vad du gillar att göra på fritiden.</li>
          <li>På nästa rad, skriv ett <code>print()</code>-kommando som skriver ut ditt förnamn.</li>
          <li>Testkör koden. Ser du att din kommentar inte dyker upp i resultatet? Klicka då på att markera modulen som klar!</li>
        </ol>
      </div>
    </div>
  );
}
