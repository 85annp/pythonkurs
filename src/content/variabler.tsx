import PythonIDE from "../components/PythonIDE";

export default function Variabler() {
  return (
    <div className="module-content">
      <h2>Variabler</h2>
      <p>
        En variabel är som en namngiven låda. Du kan lägga in ett värde och hämta det senare.
        I Python behöver man inte deklarera en variabel i förväg. En variabel skapas när den får ett värde första gången.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <ul style={{ flex: 1, minWidth: '250px' }}>
          <li>Om vi skriver <code>x = 5</code> får vi en "låda" med värdet 5 inuti. Lådan x innehåller nu ett tal.</li>
          <li>Om vi skriver <code>y = "John"</code> får vi en "låda" med värdet John inuti. Lådan y innehåller nu en text.</li>
        </ul>
        <div style={{ flexShrink: 0, width: '200px', textAlign: 'center' }}>
          <img src="/variabler.png" alt="Illustration av variabler som lådor" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </div>

      <PythonIDE hideCompletion initialCode={`x = 5\ny = "John"\nprint(x)\nprint(y)`} />

      <h3>Namngivning</h3>
      <p>Det finns en del regler kring hur variabler får namnges:</p>
      <ul>
        <li>Namnet måste börja med en bokstav eller understreck.</li>
        <li>Namnet får bara bestå av bokstäver, siffror och understreck.</li>
        <li><strong>Ett tips:</strong> Undvik svenska tecken (å, ä, ö) i variabelnamn eftersom en del programmeringsspråk inte tillåter dem.</li>
      </ul>
      
      <p>Sedan finns det också praxis kring variabler:</p>
      <ul>
        <li>Namnet bör beskriva vad variabeln skall innehålla (t.ex. <code>name</code>, <code>phone_number</code>).</li>
        <li>Namnet bör börja på liten bokstav (gemen).</li>
        <li>Praxis är att använda <strong>snake_case</strong> vid Python-programmering, till exempel <code>first_name</code> (och inte camelCase som <code>firstName</code>).</li>
      </ul>

      <img src="/snake_camel.png" alt="Illustration av snake_case och camel_case" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />

      <p style={{ fontStyle: 'italic', color: '#64748b' }}>
        Python gör skillnad på stora och små bokstäver. Det innebär att <code>Name</code>, <code>name</code>, <code>NAME</code> och <code>nAme</code> är olika variabler!
      </p>

      <h2>Datatyper</h2>
      <p>I Python finns det olika typer av data. De vanligaste du behöver ha koll på är:</p>
      
      <table style={{ width: '100%', marginBottom: '1.5rem', borderCollapse: 'collapse', border: '1px solid var(--border-color)' }}>
        <thead style={{ backgroundColor: 'var(--secondary)' }}>
          <tr>
            <th style={{ padding: '0.5rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>Datatyp</th>
            <th style={{ padding: '0.5rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>Beskrivning</th>
            <th style={{ padding: '0.5rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>Exempel</th>
            <th style={{ padding: '0.5rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>Kommentar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}><strong>str (string)</strong></td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Textsträngar</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>"Hej"</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Allt inom citattecken räknas som text.</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}><strong>int (integer)</strong></td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Heltal</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>10</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Används när vi räknar hela saker.</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}><strong>float</strong></td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Flyttal (decimaltal)</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>3.14</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>OBS: Vi använder punkt (.) istället för komma i Python.</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}><strong>bool (boolean)</strong></td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>Sant eller falskt</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>True / False</td>
            <td style={{ padding: '0.5rem', border: '1px solid var(--border-color)' }}>-</td>
          </tr>
        </tbody>
      </table>

      <p>Man kan ta reda på vilken datatyp en variabel har med kommandot <code>type()</code>:</p>
      <PythonIDE hideCompletion initialCode={`x = 5\nprint(type(x))`} />

      <h2>Input/output</h2>
      <p>Vi använder <code>print()</code> för att skriva ut något och <code>input()</code> för att ställa en fråga.</p>

      <h3>Utskrifter (print)</h3>
      <p>
        Med en vanlig <code>print()</code> får man en utskrift av en hel rad. Nästa utskrift hamnar på en ny rad. Om man vill ha en utskrift, men att markören inte hoppar ner till nästa rad, lägger man på argumentet <code>end=" "</code> i printkommandot.
      </p>
      
      <p>
        Ofta vill man skriva ut text och variabler tillsammans. Det enklaste sättet är med <strong>formatterade strängar (f-strings)</strong>. Man skriver då <code>f</code> före strängen och variablerna inom klammerparenteser <code>{`{ }`}</code>. Med formatterade strängar går det också att ställa in format, t.ex. hur många decimaler ett tal ska ha.
      </p>

      <PythonIDE hideCompletion initialCode={`print("Hej!", end = " ")\nprint("Programmering med", end = " - ")\nprint("Python")\n\nprice = 59\ncount = 4\nprint(f"Priset för {count} stycken är {price*count} kr.")\nprint(f"Styckpriset är {price:.2f} kr.")`} />

      <h3>Inmatning (input)</h3>
      <p>
        Ofta behöver programmet information från användaren (t.ex. ett namn eller ålder). Då använder man funktionen <code>input()</code>. Allt som kommer från <code>input()</code> sparas alltid som text (str).
      </p>
      <p>
        Om man vill räkna med de inmatade värdena måste man "casta" (göra om) dem till ett tal:
        <br/>- Vill du ha ett heltal? Skriv: <code>int(input(...))</code>
        <br/>- Vill du ha ett decimaltal? Skriv: <code>float(input(...))</code>
      </p>
      
      <p style={{ fontStyle: 'italic', color: '#64748b' }}>När du kör koden nedan kommer en ruta (popup) upp i webbläsaren där du får skriva in svaren!
        Efter du har svarat på alla input kommer alla in- och utmatningar att skrivas i terminalen (konsolen) till höger.
      </p>
      <p style={{ fontStyle: 'italic', color: '#64748b' }}>
        Om du vill se hur programmet fungerar utanför webbläsaren, kan du kopiera koden och klistra in och köra den i Thonny (<a href="https://thonny.org/" target="_blank">https://thonny.org/</a>).
      </p>

      <PythonIDE hideCompletion initialCode={`name = input("Vad heter du? ")\nage = int(input("Hur gammal är du? "))\nprint(f"Hej {name}, du är {age} år!")`} />

      <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', borderBottom: 'none' }} />

      <h3>Dina uppgifter (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br/>Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Hemort</li>
          <ul>
            <li>Skriv en kommentar (med #) "Uppgift 1".</li>
            <li>Skapa en variabel för text med namnet <code>city</code> och ge den värdet av staden du bor i (glöm inte citattecken runt texten).</li>
            <li>Använd <code>print(f</code> för att skriva ut en mening med <code>city</code>, t.ex. <code>Jag bor i Falköping</code>.</li>
          </ul>
          <li>Chokladboll</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Fråga efter priset på en chokladboll och lagra svaret i en variabel för decimaltal (välj namn själv, men ta något som passar för ett pris).</li>
            <li>Använd <code>print(f</code> för att skriva ut vad det kostar om man köper två chokladbollar, t.ex. <code>Två chokladbollar kostar 60 kr</code>.</li>
          </ul>
          <li>Längd</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Fråga efter användarens längd i meter och lagra svaret i en variabel för decimaltal med namnet <code>length_m</code>.</li>
            <li>Skapa en ny variabel med namnet <code>length_cm</code> som lagrar längden i cm. Den här variabeln ska vara av heltalstyp.</li>
            <li>Skriv ut datatypen för <code>length_cm</code> och kontrollera så att den skriver <code>&lt;class 'int'&gt;</code>.</li>
            <li>Skriv ut längden, t.ex. <code>Du är 184 cm</code>.</li>
          </ul>
          <li>Frukt</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 4".</li>
            <li>Fråga efter priset på ett äpple och lagra svaret i en variabel för decimaltal (välj lämpligt namn själv).</li>
            <li>Fråga efter priset på en banan och lagra svaret i en variabel för decimaltal (välj lämpligt namn själv).</li>
            <li>Fråga efter antal äpplen och lagra svaret i en variabel för heltal (välj lämpligt namn själv).</li>
            <li>Fråga efter antal bananer och lagra svaret i en variabel för heltal (välj lämpligt namn själv).</li>
            <li>Skriv ut vad det kommer att kosta, t.ex. <code>2 äpplen och 3 bananer kostar 25,10 kr</code>. <br/>(Det ska vara avrundat till 2 decimaler.)</li>
          </ul>
           <li>Medelvärde</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 5".</li>
            <li>Skapa variabler för tre tal och ge dem några olika värden.</li>
            <li>Skriv ut medelvärdet (avrundat till 1 decimal) av talen, t.ex. <code>Medelvärde: 1.7</code>. </li>
            <li>Testkör med olika värden och kontrollera resultatet.</li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
