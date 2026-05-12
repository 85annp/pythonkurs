import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Samlingar() {
  return (
    <div className="module-content">
      <h2>Listor</h2>
      <p>
        Listor används för att spara flera värden av samma sort i en och samma variabel.
        Listor används när man vill spara flera liknande värden, till exempel skostorleken för en hel klass, alla fem tärningarna i Yatzy eller födelseår på alla i en dagisgrupp.
      </p>
      <p>
        En lista är dynamisk, vilket betyder att den kan innehålla olika datatyper och den kan växa eller krympa när som helst under programmets gång.
      </p>


      <h3>Skapa och använda listor</h3>
      <p>
        För att skapa en lista använder man hakparenteser <code>[ ]</code> och separerar värdena med kommatecken.
        Varje plats i listan har ett <strong>index</strong> (ett platsnummer). Det första indexet är alltid <strong>0</strong>.
      </p>

      <p>
        Om vi skapar en lista med fyra namn, så kommer det första namnet att ha index 0, det andra index 1, det tredje index 2 och det fjärde index 3.
        Vi kan komma åt de olika namnen i listan genom att skriva listans namn följt av indexet inom hakparenteser, till exempel <code>namn[0]</code> för det första namnet.
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Värde</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>Adam</td></tr>
          <tr><td>1</td><td>Bertil</td></tr>
          <tr><td>2</td><td>Caesar</td></tr>
          <tr><td>3</td><td>David</td></tr>
        </tbody>
      </table>

      <PythonIDE
        hideCompletion={true}
        initialCode={`# Skapa en lista med fyra namn
namn = ["Adam", "Bertil", "Caesar", "David"]

# Skriv ut hela listan
print(namn)

# Skriv ut det första namnet (index 0)
print(f"Det första namnet är: {namn[0]}")

# Ändra ett värde i listan (byt ut Bertil mot Bosse)
print("Ändrar...")
namn[1] = "Bosse"

# Skriv ut hela listan
print(namn)`}
      />

      <h3>Längden på listan och loopar</h3>
      <p>
        För att veta hur många element som finns i en lista använder man funktionen <code>len()</code> (som står för length).
        Observera att det sista indexet i en lista alltid är <code>len(lista) - 1</code>, eftersom indexeringen börjar på 0.
      </p>
      <p>
        Det allra vanligaste (och bästa) sättet att gå igenom alla värden i en lista i Python är att använda en vanlig <code>for</code>-loop.
        Detta kan till exempel användas för att skriva ut allt i listan.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`namn = ["Adam", "Bertil", "Caesar", "David"]

# Skriv ut hur många namn som finns i listan
antal = len(namn)
print(f"Det finns {antal} namn i listan.")

print("Här är alla namn (for-loop):")
for person in namn:
    print(person)`}
      />

      <h3>Fler användbara list-metoder</h3>
      <p>
        Datatypen <code>List</code> har massor av inbyggda metoder för att till exempel lägga till, ta bort och sortera.
      </p>
      <ul>
        <li><code>.append(värde)</code> lägger till i slutet.</li>
        <li><code>.remove(värde)</code> tar bort ett specifikt värde.</li>
        <li><code>.index(värde)</code> tar reda på vilken position (index) ett värde har.</li>
        <li><code>del lista[index]</code> (eller <code>.pop()</code>) tar bort värdet på en specifik plats.</li>
        <li><code>.sort()</code> sorterar listan i storleksordning (eller bokstavsordning).</li>
        <li><code>värde in lista</code> kollar om ett värde finns i listan (som <i>Contains</i> i andra språk).</li>
      </ul>

      <PythonIDE
        hideCompletion={true}
        initialCode={`favorittal = []
favorittal.append(150)
favorittal.append(4)
favorittal.append(42)
favorittal.append(100)
favorittal.append(16)

# Ta bort talet 100 från listan
favorittal.remove(100)

# Hitta vilket index talet 150 har och ta bort talet på detta index
index = favorittal.index(150)
del favorittal[index]

# Sortera listan i storleksordning
favorittal.sort()

# Finns talet 16 i listan?
if 16 in favorittal:
    print("Talet 16 finns i listan!")

print(favorittal)`}
      />

      <h3>Skapa en tom lista</h3>
      <p>
        För att skapa en tom lista i Python använder man tomma hakparenteser <code>[]</code>.
        Detta kan vara användbart om man vill börja med en tom lista och sedan lägga till värden i den under programmets gång.
      </p>
      <PythonIDE
        hideCompletion={true}
        initialCode={`a = []         
print(f"a = {a}")

print(f"type(a) = {type(a)}")
print(f"len(a) = {len(a)}")`}
      />


      <h3>Mata in obegränsat antal värden</h3>
      <p>
        Om man vill låta användaren mata in så många värden hen vill, kan man använda en <code>while True</code>-loop som vi avbryter när användaren skickar in en tom rad.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`stader = []
print("Skriv in valfritt antal städer. Avsluta med en tom rad.")

while True:
    ny_stad = input("Stad: ")
    if ny_stad == "":
        break # Avbryt om användaren bara tryckte Enter
    
    stader.append(ny_stad)

print(f"Du skrev in {len(stader)} städer: {stader}")`}
      />

      <h2>Dictionary (ordlista)</h2>
      <p>
        En lista är perfekt när vi har ett antal värden som vi vill spara.
        Ibland har man i stället värden som är kopplade som nyckel-värde-par. Man vill då kunna komma åt värdet med hjälp av nyckeln. Då använder vi en <strong>Dictionary</strong>!
      </p>
      <p>
        En Dictionary är som en lista där vi kan välja vilken variabeltyp vi vill använda som "index" (till exempel en textsträng).
        Den som fungerar som "index" kallas för <strong>nyckel</strong> (key), och det värde som nyckeln leder till kallas för <strong>värde</strong> (value).
      </p>

      <p>
        En Dictionary skapas genom att använda krullparenteser <code>{ }</code> istället för hakparenteser, och varje element i dictionaryn består av en nyckel och ett värde som separeras av ett kolon <code>:</code>.
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Nyckel (string)</th>
            <th>Värde (int)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Mount Everest</td><td>8848</td></tr>
          <tr><td>K2</td><td>8611</td></tr>
          <tr><td>Kangchenjunga</td><td>8586</td></tr>
          <tr><td>Lhotse</td><td>8516</td></tr>
        </tbody>
      </table>

      <PythonIDE
        hideCompletion={true}
        initialCode={`# Skapa en dictionary med krullparenteser { }
hojder = {
    "Mount Everest": 8848,
    "K2": 8611,
    "Kangchenjunga": 8586,
    "Lhotse": 8516
}

# Vilken höjd har Mount Everest?
print(f"Mount Everest har höjden {hojder['Mount Everest']} meter.")

# En ny mätning visar att Everest är högre. Vi ändrar värdet:
hojder["Mount Everest"] = 8849

# Vilka nyckel-värde-par finns i dictionaryn? Vi loopar med .items()
for key, value in hojder.items():
    print(f"{key} är {value} meter högt.")`}
      />

      <h3>Varför heter det Dictionary?</h3>
      <p>
        En dictionary kan användas på exakt samma sätt som en riktig ordbok. En ordbok översätter ett ord från ett språk till ett ord på ett annat språk. Till exempel:
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`ordbok = {}
ordbok["ja"] = "yes"
ordbok["nej"] = "no"

print("På engelska heter ja:", ordbok["ja"])`}
      />

      <h3>Ett vanligt problem: Räkna tecken</h3>
      <p>
        Ett väldigt vanligt sätt att använda en dictionary är för att räkna förekomster av något.
        I exemplet nedan loopar vi igenom en text och räknar hur många gånger varje bokstav förekommer. 
        Vi använder <code>if tecken in antal_forekomster</code> för att kontrollera om tecknet redan finns i dictionaryn och i så fall ökar vi räknaren. Om det är första gången vi ser tecknet, så skapar vi en ny nyckel i dictionaryn med värdet 1.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`text = "apa banan citron"
antal_forekomster = {}

for tecken in text:
    if tecken in antal_forekomster:
        antal_forekomster[tecken] += 1
    else:
        antal_forekomster[tecken] = 1

print("Strängen innehåller följande tecken:")
for key, value in antal_forekomster.items():
    print(f"{key} - {value}")`}
      />

      <h3>Ta bort element i en Dictionary</h3>
      <p>
        Om man vill ta bort ett värde (till exempel mellanslaget från vår teckenräkning ovan) använder man kommandot <code>del</code> (delete) eller metoden <code>.pop()</code>.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`antal_forekomster = {'a': 4, 'p': 1, ' ': 2, 'b': 1}

print(antal_forekomster)

# Ta bort mellanslaget (nyckeln ' ')
del antal_forekomster[' ']

# Ta bort bokstaven a (nyckeln 'a') med .pop() och spara det borttagna värdet i en variabel
a_antal = antal_forekomster.pop('a')

print(f"Antalet a:n var {a_antal}.")
print(antal_forekomster)`}
      />

      <h3>Sortera en Dictionary</h3>
      <p>
        Till skillnad från listor är dictionaries i grunden inte tänkta att vara sorterade, de är ju uppslagsverk. 
        Men vi kan använda funktionen <code>sorted()</code> om vi vill skriva ut dem i en viss ordning.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`antal_forekomster = {'a': 4, 'n': 3, 'p': 1, 'b': 1, 'c': 1}

# För att sortera på värdet från högsta till lägsta
# 'key=lambda kv: kv[1]' betyder titta på värdet.
sorterad_varde = sorted(antal_forekomster.items(), key=lambda kv: kv[1], reverse=True)

print("Mest förekommande tecken först:")
for key, value in sorterad_varde:
    print(f"{key} - {value}")

# För att sortera på nyckeln från lägsta till högsta
# 'key=lambda kv: kv[0]' betyder titta på nyckeln.
sorterad_nyckel = sorted(antal_forekomster.items(), key=lambda kv: kv[0])

print("Tecken i alfabetisk ordning:")
for key, value in sorterad_nyckel:
    print(f"{key} - {value}")`}
      />

      <h2>Tupler</h2>
      <p>
        Tupler är en typ av datastruktur som liknar listor, men de är immutable, vilket betyder att deras värden inte kan ändras efter att de har skapats.
        Tupler används ofta för att representera data som inte ska ändras, till exempel koordinater eller fasta konfigurationer.
        Tupler skapas genom att använda vanliga parenteser <code>( )</code> istället för hakparenteser, och elementen i tuplen separeras av kommatecken.
      </p>
            <PythonIDE
        hideCompletion={true}
        initialCode={`frukter = ("äpple", "banan", "plommon", "äpple")
print(frukter)`}
      />

      <hr />

      <h3>Din uppgift (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br />Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Tärning</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Importera random och skapa en variabel där du lagrar ett tärningskast [1..6].</li>
            <li>Lägg in utskrifter:
              <ul>
                <li>Om du rullar en 1:a, skriv "Du rullade en etta, bättre lycka nästa gång!"</li>
                <li>Om du rullar en 6:a, skriv "Wow, du rullade en sexa!"</li>
                <li>För alla andra kast, skriv "Du rullade en x:a" där x är det kast du fick.</li>
              </ul>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
