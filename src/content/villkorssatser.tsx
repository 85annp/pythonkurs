import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Villkorssatser() {
  return (
    <div className="module-content">
      <h2>Villkor och villkorssatser</h2>
      <p>
        Villkor och villkorsatser används för att exekvera (köra) olika programkod beroende på ett eller flera villkor. 
        Villkoret kan vara enkelt, som att testa om en variabel har ett visst värde, eller mer komplext där man testar flera olika variablers värden tillsammans med operatorer som OCH (<code>and</code>) och ELLER (<code>or</code>).
      </p>
      <p>Villkorssatser kallas även selektioner.</p>

      <h2>if- och if-else-satser</h2>
      <p>
        När vi gör kontroller använder vi kommandot <code>if</code>. 
        Till <code>if</code> skriver vi alltid ett uttryck som kommer att utvärderas.
        Villkoret använder oftast en jämförelseoperator, oftast för likhet. Kom ihåg att likhet jämförs med två likamedtecken (<code>==</code>).
      </p>
      <p>
        I Python måste man alltid avsluta if-raden med ett kolon <code>:</code>. Koden som ska köras om villkoret är sant måste sedan vara <strong>indenterad</strong> (indragen med tab eller mellanslag).
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div className="code-example" style={{ flex: 1, minWidth: '250px' }}>
          if uttryck:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_uttryck_sant
        </div>
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          <img src="/if.png" alt="Flödesschema för en if-sats" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </div>


      <PythonIDE 
        hideCompletion={true}
        initialCode={`tal = 0
tal1 = 5
tal2 = 10

if tal == 0:
    print("Tjoho! Talet är noll!")
    
if tal2 > tal1:
    print("tal2 är större än tal1.")`}
      />

      <h3>Flera rader kod</h3>
      <p>
        I många andra språk (som C# och JavaScript) använder man klammerparenteser <code>{`{ }`}</code> för att klumpa ihop flera rader kod. 
        I Python använder vi <strong>indrag (indentering)</strong>. Alla rader som har samma indrag under if-satsen tillhör det blocket!
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`tal = 0

if tal == 0:
    print("Tjoho! Talet är noll!")
    print("Det är alltid kul med en nolla.")`}
      />

      <h3>else-gren</h3>
      <p>
        Ofta vill man göra en sak om ett villkor är uppfyllt och ett annat om villkoret inte är uppfyllt. 
        Det åstadkommer man med kommandot <code>if-else</code> (vilket är smartare än att skriva två olika if-satser).
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div className="code-example" style={{ flex: 1, minWidth: '250px' }}>
          if uttryck:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_uttryck_sant<br/>
          else:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_uttryck_falskt<br/>
        </div>
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          <img src="/ifelse.png" alt="Flödesschema för en if-sats" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </div>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`tal = 5

if tal == 0:
    print("Tjoho! Talet är noll!")
    print("Det är alltid kul med en nolla.")
else:
    print("Jaha, nu blev inte talet noll.")
    print("Undrar vad som kommer att hända då?")`}
      />

      <h2>Kombinera flera villkor</h2>
      <p>
        Ofta behöver man undersöka flera villkor samtidigt. Villkoren kan kombineras med OCH eller ELLER.
      </p>
      <ul>
        <li>Om man sätter <strong>OCH</strong> mellan villkoren kräver man att båda uttrycken är sanna. I Python skriver vi <code>and</code>.</li>
        <li>Om man sätter <strong>ELLER</strong> mellan uttrycken räcker det att ett av dem är sant. I Python skriver vi <code>or</code>.</li>
        <li>Vi kan också säga att vi vill att något INTE ska vara sant. Vi skriver då <code>not</code> framför uttrycket.</li>
        <li>Om man vill ha ett intervall skriver man precis som i matten, t.ex. 0 &lt; y &lt; 5.</li>
      </ul>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`klockslag = 7
regnar = True

if klockslag >= 21 and regnar:
    print("Paraply på kvällspromenaden!")

if 6 <= klockslag < 9:
    print("God morgon!")`}
      />

      <h2>if-elif-else-satser</h2>
      <p>
        Ofta räcker det inte med att antingen-eller, utan vi har fler villkor. Vi kan t.ex. vilja skriva ut texten "god natt" om klockan är före 6, annars "god morgon" om klockan är före 9, annars "god dag" om klockan är före 15.
      </p>
      <p>
        I Python använder vi nyckelordet <code>elif</code> (som står för "else if"). Vi kollar alltså bara nästa villkor om det första inte var uppfyllt!
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div className="code-example" style={{ flex: 1, minWidth: '250px' }}>
          if uttryck:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_sant<br/>
          elif uttryck2:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_uttryck2_sant<br/>
          else:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;sats_om_inget_var_sant
        </div>
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          <img src="/ifelifelse.png" alt="Flödesschema för en if-sats" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </div>

      <p>
        När man ska jämföra numeriska värden som ligger i en stege, är det klokt att ta det i storleksordning och utnyttja just att <code>elif</code> bara körs om koden ovanför var falsk. Den vänstra koden nedan är mycket smidigare än den högra!
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Med elif (effektivt)</th>
            <th>Bara med if (ineffektivt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre style={{ margin: 0 }}>
{`if alder < 7:
    pris = 0
elif alder < 20:
    pris = 18
else:
    pris = 30`}
              </pre>
            </td>
            <td>
              <pre style={{ margin: 0 }}>
{`if alder < 7:
    pris = 0
if 7 <= alder < 20:
    pris = 18
if alder >= 20:
    pris = 30`}
              </pre>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>match-case (som "switch" i andra språk)</h2>
      <p>
        Om alla kontroller sker mot samma variabel och med flera fasta alternativ kan man i nyare versioner av Python (3.10+) använda <code>match</code> och <code>case</code> istället för en lång <code>if</code>-<code>elif</code>-kedja.
      </p>
      <p>
        För att kontrollera övriga fall (default värde) används <code>_</code>. Den måste alltid ligga sist bland <code>case</code> eftersom den alltid är sann.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`veckodag = 2

match veckodag:
    case 1:
        print("Måndag")
    case 2:
        print("Tisdag")
    case 3:
        print("Onsdag")
    case _:
        print("Annan dag")`}
      />

      <p>Man kan kombinera flera värden i samma case genom att använda pipe-tecknet <code>|</code> som en "eller"-operator:</p>

            <PythonIDE 
        hideCompletion={true}
        initialCode={`veckodag = 2

match veckodag:
    case 1 | 2 | 3 | 4 | 5:
        print("Veckodag")
    case 6 | 7:
        print("Helg")
    case _:
        print("Felaktigt värde")`}
      />

      <h2>Jämföra text</h2>
      <p>
        I många språk (som C# eller Java) behöver man använda speciella funktioner som <code>.Equals()</code> eller <code>.CompareTo()</code> för att jämföra text.
        I Python är det mycket smidigare! Du använder bara de vanliga matematik-operatorerna direkt på texten:
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Jämförelse</th>
            <th>Betydelse i Python</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>str1 == str2</code></td>
            <td>Kollar om texterna är exakt likadana.</td>
          </tr>
          <tr>
            <td><code>str1 != str2</code></td>
            <td>Kollar om texterna är olika.</td>
          </tr>
          <tr>
            <td><code>str1 &lt; str2</code></td>
            <td>Kollar om <code>str1</code> kommer före <code>str2</code> i alfabetet.</td>
          </tr>
          <tr>
            <td><code>str1 &gt; str2</code></td>
            <td>Kollar om <code>str1</code> kommer efter <code>str2</code> i alfabetet.</td>
          </tr>
        </tbody>
      </table>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`text1 = "Apelsin"
text2 = "Banan"

if text1 == text2:
    print("Samma ord!")
elif text1 < text2:
    print(f"{text1} kommer före {text2} i alfabetet.")
else:
    print(f"{text2} kommer före {text1} i alfabetet.")`}
      />

      <h2>Slumptal</h2>
      <p>
        I Python får man slumptal genom att använda ett färdigt paket som heter <code>random</code>.
        För att kunna använda det måste vi alltid skriva <code>import random</code> längst upp i vårt program.
      </p>
      <p>
        Det vanligaste är att vi vill ha ett heltal (t.ex. en tärning). Då använder vi metoden <code>randint(min, max)</code> som ger ett tal från och med <strong>min</strong> till och med <strong>max</strong>.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`import random

# Slå en vanlig sexsidig tärning
kast = random.randint(1, 6)

print(f"Du rullade en {kast}:a!")`}
      />
      
      <p>
        Ett annat användbart kommando är <code>random.choice()</code> som slumpar fram ett värde direkt ur en lista med texter, till exempel: <code>random.choice(["Sten", "Sax", "Påse"])</code>. Mer om det när vi kommer till listor lite senare i kursen.
      </p>

            <hr />

      <h3>Dina uppgifter (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br/>Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Tärning</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Importera random och skapa en variabel där du lagrar ett tärningskast [1..6].</li>
            <li>Lägg in utskrifter:
              <ul>
                <li>Om du rullar en 1:a, skriv "Du rullade en etta, bättre lycka nästa gång!"</li>
                <li>Om du rullar en 6:a, skriv "Wow, du rullade en sexa!"</li>
                <li>För alla andra kast, skriv "Du rullade en x:a." där x är det kast du fick.</li>
              </ul>
            </li>
            <li>Testkör flera gånger så att du ser alla varianter av utskrifter.</li>
          </ul>
          <li>Tågbiljett</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Skapa en variabel <code>age</code> där användaren får mata in sin ålder.</li>
            <li>Skriv ut om det är barn, ungdom, vuxen eller pensionär. Använd dessa åldersgränser:
              <ul>
                <li>Barn: 0-6 år</li>
                <li>Ungdom: 7-19 år</li>
                <li>Vuxen: 20-64 år</li>
                <li>Pensionär: 65 år och äldre</li>
              </ul>
            </li>
            <li><strong>Obs!</strong> Du får inte använda operatorerna <code>and</code> och <code>or</code> i den här uppgiften.</li>
            <li>Testkör flera gånger så att du ser alla varianter av utskrifter.</li>
          </ul>
          <li>Status</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Skapa en variabel <code>command</code> där användaren får mata in ett kommando. Gör det tydligt att de kan välja mellan start, stopp, status och reset.</li>
            <li>Använd match-case för att skriva ut en status:
              <ul>
                <li>start: "Systemet startar..."</li>
                <li>stopp: "Systemet stannar..."</li>
                <li>status: "Systemet körs..."</li>
                <li>reset: "Startar om systemet..."</li>
                <li>allt annat: "Okänt kommando"</li>
              </ul>
            </li>
            <li>Testkör flera gånger så att du ser alla varianter av utskrifter.</li>
          </ul>                    
        </ol>
      </div>
    </div>
  );
}
