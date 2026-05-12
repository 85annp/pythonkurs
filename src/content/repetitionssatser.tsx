import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Repetitionssatser() {
  return (
    <div className="module-content">
      <h2>Upprepningar - iterationer - loopar</h2>
      <p>
        Upprepningar, alltså att något skall göras flera gånger, kallas även för iterationer. Ofta kallar vi det helt enkelt för <strong>loopar</strong>.
      </p>
      <p>Alla loopar kommer att upprepas antingen:</p>
      <ul>
        <li>ett visst bestämt antal gånger, eller</li>
        <li>så länge som ett visst villkor är sant.</li>
      </ul>
      <p>
        I många språk (som C# och JavaScript) finns det tre sorters loopar: <code>for</code>, <code>while</code> och <code>do-while</code>. 
        I Python klarar vi oss med bara två: <code>for</code> och <code>while</code>!
      </p>

      <h2>for-loopen (upprepa ett bestämt antal gånger)</h2>
      <p>
        <code>for</code>-loopen är bäst när man vill upprepa något ett bestämt antal gånger. 
        I Python använder vi kommandot <code>range()</code> för att skapa en följd av tal som loopen kan "räkna" igenom. 
      </p>
      <p>
        En <code>range()</code> kan anges med <code>start</code>, <code>stop</code> och <code>step</code>. 
        Om man inte anger <code>start</code> börjar den på noll. Om man inte anger <code>step</code> hoppar den ett steg i taget.
      </p>
      <ul>
        <li><code>range(5)</code> ger talen: 0, 1, 2, 3, 4 (den börjar på noll och stannar precis innan slutsiffran)</li>
        <li><code>range(1, 6)</code> ger talen: 1, 2, 3, 4, 5 (den stannar precis innan slutsiffran)</li>
        <li><code>range(1, 6, 2)</code> ger talen: 1, 3, 5 (den stannar precis innan slutsiffran och hoppar två steg i taget)</li>
      </ul>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`for i in range(1, 6, 2):
    print(i)`}
      />

      <h2>for-loopen för listor (som foreach i andra språk)</h2>
      <p>
        I många andra språk finns en speciell <code>foreach</code>-loop för att gå igenom en samling (till exempel en lista med namn).
        I Python är <code>for</code>-loopen så smart att den fungerar som en foreach-loop per automatik! Den går själv igenom alla element, ett efter ett.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`bilar = ["Volvo", "BMW", "Ford", "Mazda"]

for bil in bilar:
    print(bil)`}
      />

      <h2>Nästlade loopar</h2>
      <p>
        Iterationer begränsas inte till att bara använda en upprepning. Man kan kombinera flera loopar genom att lägga dem inuti varandra.
      </p>
      <p>
        Det är viktigt att tänka på att använda olika variabelnamn i de olika looparna. 
        Tänk också på hur du använder indenteringen, så att koden hör till rätt loop!
      </p>
      <p>
        När man har nästlade loopar kan man tänka sig att man loopar igenom ett schackbräde eller liknande, där ena loopen styr vilken rad man är på och den andra loopen vilken kolumn.
      </p>
      <p>
        <em>Tips: I Python lägger kommandot <code>print()</code> automatiskt till en ny rad i slutet. 
        Genom att skriva <code>print(text, end="")</code> säger vi åt datorn att inte byta rad, vilket är perfekt när vi ritar ut kolumner!</em>
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`for rad in range(10):
    print(f"Rad {rad}: ", end="")
    
    for kolumn in range(6):
        print(kolumn, end="")
        
    print() # Skapa ny rad när kolumn-loopen är klar`}
      />

      <h2>while-loopen</h2>
      <p>
        <code>while</code>-loopen upprepar <em>så länge</em> ett villkor är sant. I while-loopen kontrolleras villkoret alltid först, innan loopen ens har startat.
      </p>
      <p>
        Det är viktigt att tänka på att while-loopen kan bli en <strong>oändlig loop</strong> om man inte ser till att villkoret så småningom blir falskt.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`i = 1
while i <= 5:
    print(i)
    i += 1`}
      />

      <p>
        Ett vanligt användningsområde för while är när vi vill fråga användaren om vi ska fortsätta köra programmet:
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`fortsatt = "j"

while fortsatt.lower() == "j":
    print("Programmet körs...")
    
    fortsatt = input("Vill du köra en gång till (j/n)? ")`}
      />

      <h2>do-while (Hur gör man i Python?)</h2>
      <p>
        I många språk finns en variant på loop som heter <code>do-while</code>. Den kör alltid koden minst en gång, och kollar villkoret <em>sist</em>.
      </p>
      <p>
        <strong>Python har faktiskt ingen do-while-loop!</strong> I stället brukar man använda ett trick: vi skapar en loop som går för evigt (<code>while True:</code>) och använder kommandot <code>break</code> (avbryt) när vi vill hoppa ur loopen.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`while True:
    print("Detta kommer att köras minst en gång.")
    
    fortsatt = input("Vill du köra en gång till (j/n)? ")
    if fortsatt.lower() != "j":
        break  # Hoppar ur loopen`}
      />

      <h2>Menyprogram</h2>
      <p>
        I terminalprogram är det vanligt att man bygger upp sitt program utifrån en meny. Ett menyprogram visar en meny för användaren där hen får välja vad hen vill göra genom att skriva in en siffra.
      </p>
      <p>
        Vi kan bygga detta med hjälp av tricket ovan (<code>while True:</code>) tillsammans med den nya <code>match</code>-satsen (Pythons motsvarighet till switch).
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`while True:
    print("\\n--- MENY ---")
    print("1. Omvandla m/s till km/h")
    print("2. Omvandla km/h till m/s")
    print("3. Avsluta programmet")
    
    val = input("Välj ett alternativ (1-3): ")

    match val:
        case "1":
            m_s = float(input("Skriv in hastigheten i m/s: "))
            print(f"{m_s} m/s är lika med {m_s * 3.6:.2f} km/h")
            
        case "2":
            km_h = float(input("Skriv in hastigheten i km/h: "))
            print(f"{km_h} km/h är lika med {km_h / 3.6:.2f} m/s")
            
        case "3":
            print("Programmet avslutas...")
            break # Bryter while-loopen och stänger menyn
            
        case _:
            print("Du valde inte ett giltigt alternativ!")`}
      />

      <h2>Flyktsekvenser (Escape-sekvenser)</h2>
      <p>
        En del tecken har speciell betydelse i kod. Till exempel används dubbelfnutt <code>"</code> för att markera var en text börjar och slutar. Men vad händer om vi faktiskt vill skriva ut ett citattecken på skärmen?
      </p>
      <p>
        Då använder vi en <strong>backslash</strong> <code>\</code> framför tecknet. Det kallas för att använda en flyktsekvens (eller "att escapa" på svengelska).
      </p>
      <ul>
        <li><code>\"</code> låter oss skriva ut ett citattecken.</li>
        <li><code>\\</code> låter oss skriva ut en backslash.</li>
        <li><code>\n</code> används för att skapa en <strong>ny rad</strong> (n står för newline).</li>
      </ul>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`print("Nu skriver jag ut ett citattecken: \\" ")
print("Nu skriver jag ut ett bakvänt snedstreck: \\\\ ")

print("En text på\\ntvå rader!")`}
      />

      <hr />

      <h3>Din uppgift (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br/>Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Tal med for-satser</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Skriv med en for-loop ut talen 1-5 på en rad med mellanslag mellan varje siffra.<br />
                <code>1 2 3 4 5</code>
            </li>
            <li>Skriv med en for-loop ut alla jämna tal 0-10 på en rad med mellanslag mellan varje tal. Det får inte finnas någon <code>if</code>-sats.<br />
                <code>0 2 4 6 8 10</code>
            </li>
             <li>Skriv med en for-loop ut talen 10-1 på en rad med mellanslag mellan varje tal.<br />
                <code>10 9 8 7 6 5 4 3 2 1</code>
            </li>
             <li>Skriv med en for-loop ut vart tredje tal (3-15) på en rad med mellanslag mellan varje tal.<br />
                <code>3 6 9 12 15</code>
            </li>
            <li>Fråga användaren efter startvärde, slutvärde och steg och skriv ut på en rad med mellanslag mellan varje tal enligt önskemålen.</li>
          </ul>

          <li>Mönster med nästlade for-satser</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Skapa en variabel <code>length</code> där användaren får mata in önskad sidlängd.</li>
            <li>Skriv ut en kvadrat med den önskade sidlängden. Kvadraten ska bestå av asterisker (stjärnor).<br />
              <code>*****</code><br />
              <code>*****</code><br />
              <code>*****</code><br />
              <code>*****</code><br />
              <code>*****</code><br />
            </li>
            <li>Skriv ut en rätvinklig triangel med toppen upp av asterisker med den önskade höjden.<br />
              <code>*</code><br />
              <code>**</code><br />
              <code>***</code><br />
              <code>****</code><br />
              <code>*****</code><br />
            </li>
            <li>Skriv ut en rätvinklig triangel med botten upp av asterisker med den önskade höjden.<br />
              <code>*****</code><br />
              <code>****</code><br />
              <code>***</code><br />
              <code>**</code><br />
              <code>*</code><br />
            </li>
            <li>🤯 Skriv ut en ihålig kvadrat av asterisker med den önskade sidlängden. Det ska vara asterisker i alla ytterkanterna, men mellanslag i mitten.<br />
              <code>*****</code><br />
              <code>*&nbsp;&nbsp;&nbsp;*</code><br />
              <code>*&nbsp;&nbsp;&nbsp;*</code><br />
              <code>*&nbsp;&nbsp;&nbsp;*</code><br />
              <code>*****</code><br />
            </li>
            <li>🤯 Skriv ut en pyramid av asterisker med höjden samma som sidlängden innan.<br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;*</code><br />
              <code>&nbsp;&nbsp;&nbsp;***</code><br />
              <code>&nbsp;&nbsp;*****</code><br />
              <code>&nbsp;*******</code><br />
              <code>*********</code><br />
            </li>                                
          </ul>
          <li>while-satser</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Fortsätt tills rätt svar
              <ul>
                <li>Fråga användaren vilket som är världens folkrikaste land.</li>
                <li>Så länge som användaren svarar fel ska hen få en ny chans att svara på frågan.</li>
                <li>När användaren svarar rätt ska hen få ett meddelande om att det var rätt svar.</li>
              </ul>
            </li>
            <li>Meny
              <ul>
                <li>Lägg in en meny med tre val: addera två tal, multiplicera två tal och avsluta.</li>
                <li>Se till att alla valen fungerar som förväntat.</li>
                <li>Talen ska kunna vara decimaltal.</li>
              </ul>
            </li>
            <li>🤯 Summera tal
              <ul>
                <li>Be användaren ange positiva heltal, ett i taget. </li>
                <li>Använd en while-loop för att fortsätta läsa in tal tills användaren skriver in -1.</li>
                <li>När inmatningen är slut, ska programmet beräkna och skriva ut medelvärdet av alla inmatade tal (exklusive -1).</li>
                <li>Ledtråd: Du behöver en variabel för att lagra summan av alla tal och en annan för att räkna hur många tal som matats in.</li>
              </ul>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
