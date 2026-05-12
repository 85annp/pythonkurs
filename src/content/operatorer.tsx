import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Operatorer() {
  return (
    <div className="module-content">
      <h2>Aritmetiska operatorer</h2>
      <p>
        Vanliga operatorer för matematik (dvs <code>+</code> <code>-</code> <code>*</code> <code>/</code>) fungerar likadant i programmering som i matematik.
      </p>
      <p>
        I programmering kan man dessutom använda <code>+</code> för att slå ihop strängar, då kallar vi det för att <strong>konkatenera</strong>. När flera strängar konkateneras (slås ihop) kan man ibland behöva lägga till blanktecken.
      </p>
      <p>
        Vid utskrift kan man också kombinera flera delar genom att använda formatterade strängar (f-strings) eller kommatecken.
      </p>
      
      <PythonIDE 
        hideCompletion={true}
        initialCode={`first_name = "Annika"
last_name = "Nilsson"
print(first_name + last_name)

name = first_name + " " + last_name
print(name)

print(f"{first_name} {last_name} är 35 år gammal.")

print(first_name, last_name, "är 35 år gammal.")`}
      />

      <h2>Rest</h2>
      <p>
        I Python (och andra programmeringsspråk) finns det en operator för rest. För att få resten vid division (modulus) används tecknet <code>%</code>.
      </p>
      <p>
        Det som händer är att datorn gör en heltalsdivision, men "struntar" i hur många hela det blir och bara tar resten.
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Python</th>
            <th>Blandad form</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>7 % 3 = 1</code></td>
            <td>7/3 = 2 <sup><mark>1</mark></sup>&frasl;<sub>3</sub></td>
            <td>1</td>
          </tr>
          <tr>
            <td><code>8 % 3 = 2</code></td>
            <td>8/3 = 2 <sup><mark>2</mark></sup>&frasl;<sub>3</sub></td>
            <td>2</td>
          </tr>
          <tr>
            <td><code>9 % 3 = 0</code></td>
            <td>9/3 = 3 <sup><mark>0</mark></sup>&frasl;<sub>3</sub></td>
            <td>0</td>
          </tr>                    
        </tbody>
      </table>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`x = 67
y = 60
mod = x % y
print(f"Resten vid divisionen {x} / {y} blir {mod}.")`}
      />

      <h2>Division i Python</h2>
      <p>Python har två operatorer för division.</p>

      <p>
        <code>/</code> "Vanlig" division (returnerar ett decimaltal om det behövs)<br />
        <code>//</code> Heltalsdivision (floor division) (returnerar ett heltal, alltid avrundat nedåt)
      </p>

      <h3>Heltalsdivision</h3>
      <p>
        När man ska göra omvandlingar av till exempel sekunder till minuter och sekunder, kan det vara användbart med heltalsdivision. Heltalsdivision innebär att man tar hur många <strong>hela gånger</strong> det går. Det innebär att man alltid avrundar nedåt.
      </p>
      <p>
        <code>7 // 3 = 2</code><br />
        <code>8 // 3 = 2</code><br />
        <code>9 // 3 = 3</code>
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`total_seconds = 150
minutes = total_seconds // 60
seconds = total_seconds % 60
print(f"{total_seconds} sekunder är {minutes} minuter och {seconds} sekunder.")`}
      />

      <h2>Upphöjt</h2>
      <p>
        För att få upphöjt använder man dubbla multiplikationstecken, <code>**</code>. x<sup>y</sup> skrivs alltså <code>x**y</code>.
      </p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`print(2**10)`}
      />

      <h2>Tilldelande operatorer</h2>
      <p>
        I Python (och många andra programmeringsspråk) kan man istället för att skriva<br/>
        <code>tal1 = tal1 + tal2</code><br/>
        använda operatorn <code>+=</code> som ett kortare skrivsätt (tänk "plussa och tilldela"). Uttrycket blir då<br/>
        <code>tal1 += tal2</code>
      </p>
      <p>
        På samma sätt kan man skriva <code>-=</code>, <code>*=</code>, <code>/=</code> och så vidare.
      </p>
      <p><em>Observera att likamedtecknet alltid står efter +, -, * och /.</em></p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`number1 = 5
number2 = 3
number1 += number2
print(f"number1 = {number1}")
print(f"number2 = {number2}")`}
      />

      <h2>Jämförelseoperatorer</h2>
      <p>
        Jämförelseoperatorerna (när vi jämför två variabler eller värden) är egentligen samma som i matematiken. Det som skiljer är att när vi jämför likhet gör vi det med två likamedtecken (du kommer väl ihåg att ett likamedtecken är tilldelning). När vi jämför om något är olika använder vi utropstecken istället för första likamedtecknet (<code>!</code> betyder "tvärtom" eller negering).
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Betyder</th>
            <th>Exempel</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>==</code></td><td>Lika med</td><td><code>x == y</code></td></tr>
          <tr><td><code>!=</code></td><td>Inte lika med</td><td><code>x != y</code></td></tr>
          <tr><td><code>&lt;</code></td><td>Mindre än</td><td><code>x &lt; y</code></td></tr>
          <tr><td><code>&gt;</code></td><td>Större än</td><td><code>x &gt; y</code></td></tr>
          <tr><td><code>&lt;=</code></td><td>Mindre än eller lika med</td><td><code>x &lt;= y</code></td></tr>
          <tr><td><code>&gt;=</code></td><td>Större än eller lika med</td><td><code>x &gt;= y</code></td></tr>
        </tbody>
      </table>

      <p>Jämförelseoperatorer returnerar <code>True</code> eller <code>False</code>.</p>
      <p>Om man vill ha ett intervall skriver man precis som i matten, t.ex. <code>0 &lt; y &lt; 5</code>.</p>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`x = 5
y = 3

print(f"x == y: {x == y}")
print(f"x != y: {x != y}")
print(f"x > y: {x > y}")
print(f"x < y: {x < y}")
print(f"x >= y: {x >= y}")
print(f"x <= y: {x <= y}")
print(f"0 < y < 5: {0 < y < 5}")`}
      />

      <h2>Logiska operatorer</h2>
      <p>
        För att sätta ihop flera jämförelser kan man använda OCH och ELLER. I Python skriver man <code>and</code> och <code>or</code>. <code>and</code> blir sann om båda operanderna är sanna. <code>or</code> blir sann om någon av operanderna är sann. Det finns också <code>not</code> som blir sann om det är falskt och tvärtom.
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Beskrivning</th>
            <th>Exempel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>and</code></td>
            <td>Returnerar <code>True</code> om båda påståendena är sanna och annars <code>False</code>.</td>
            <td><code>x &gt; 0 and x % 2 == 0</code></td>
          </tr>
          <tr>
            <td><code>or</code></td>
            <td>Returnerar <code>True</code> om något av påståendena är sant och annars <code>False</code>.</td>
            <td><code>x &lt; 0 or x % 2 != 0</code></td>
          </tr>
          <tr>
            <td><code>not</code></td>
            <td>Vänder resultatet, returnerar <code>True</code> om påståendet är falskt och <code>False</code> om det är sant.</td>
            <td><code>not(x &gt; 0 and x % 2 == 0)</code></td>
          </tr>
        </tbody>
      </table>

      <PythonIDE 
        hideCompletion={true}
        initialCode={`x = 5

print(x > 0 and x % 2 == 0)
print(x < 0 or x % 2 != 0)
print(not(x > 0 and x % 2 == 0))`}
      />

      <hr />

      <h3>Din uppgift (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br/>Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>"Miniräknare"</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Fråga efter ett tal (ska kunna vara decimaltal) och lagra svaret i en variabel <code>number1</code>.</li>
            <li>Fråga efter ett tal (ska kunna vara decimaltal) och lagra svaret i en variabel <code>number2</code>.</li>
            <li>Gör sedan en utskrift där du skriver ut (om användaren matat in 10 och 3):
                <br /><code>10 plus 3 = 13</code>
                <br /><code>10 minus 3 = 7</code>
                <br /><code>10 gånger 3 = 30</code>
                <br /><code>10 delat med 3 = 3.333333333333333</code>
                <br /><code>10 upphöjt med 3 = 1000</code>
                <br /><code>10 rest 3 = 1</code>
                <br /><code>10 heltalsdivision med 3 = 3</code>
            </li>
            <li>Testa programmet både med heltal och decimaltal.</li>
          </ul>
          <li>Månader och år</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Skapa en variabel <code>total_months</code> där användaren får mata in antal månader.</li>
            <li>Låt sedan programmet räkna ut vad det blir i år och månader.
              <br /><code>Ange antal månader: 23</code>
              <br /><code>23 månader motsvarar 1 år och 11 månader.</code>
            </li>      
          </ul>
          <li>Timmar, minuter och sekunder</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Skapa en variabel <code>total_seconds</code> där användaren får mata in antal sekunder.</li>
            <li>Låt sedan programmet räkna ut vad det blir i timmar, minuter och sekunder.
              <br /><code>Ange antal sekunder: 7385</code>
              <br /><code>7385 sekunder motsvarar 2 timmar, 3 minuter och 5 sekunder.</code>
            </li>      
          </ul> 
          <li>Hyrbilen</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 4".</li>
            <li>Låt användaren mata in antalet dagar hen ska hyra en bil och hur många kilometer som hen ska köra. Spara dessa i variabler med lämpliga namn.</li>
            <li>Beräkna kostnaden för att hyra bilen och spara den i en variabel med lämpligt namn.<br/>
              Följande gäller för biluthyrningen:
              <ul>
                <li>startavgiften för att hyra bilen är 300 kr</li>
                <li>det kostar ytterligare 1 krona per kilometer man kör</li>
                <li>det kostar ytterligare 500 kronor för varje extra dag man vill hyra den förutom den första.</li>
              </ul>
            </li>
            <li>
              Gör en utskrift av hyreskostnaden.
              <br /><code>Ange antal dagar: 5</code>
              <br /><code>Ange antal kilometer: 320</code>
              <br /><code>Det kommer att kosta 2620 kr.</code>
            </li> 
          </ul>
          <li>Udda eller jämn</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 5".</li>
            <li>Skapa en variabel <code>number</code> och låt användaren ge den ett värde.</li>    
            <li>Skriv ut <code>True</code> om talet är jämnt och <code>False</code> om talet är udda.<br/>
                <strong>Obs!</strong> Använd inget annat än det du lärt dig hittills i kursen!</li>    
          </ul>                              
        </ol>

      </div>
    </div>
  );
}
