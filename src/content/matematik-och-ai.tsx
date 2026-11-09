import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function MatematikOchAI() {
  return (
    <div className="module-content">
      <h2>Matematik och AI (Artificiell Intelligens)</h2>
      <p>
        Artificiell intelligens (AI) och maskininlärning (Machine Learning) framställs ofta som något närmast magiskt i media.
        Men bakom alla språkmodeller som ChatGPT, självkörande bilar, ansiktsigenkänning och rekommendationsalgoritmer finns
        inte magi – utan <strong>matematik</strong> och <strong>algoritmer</strong> som körs i blixtsnabb hastighet med datorns hjälp!
      </p>
      <p>
        I den här modulen ska vi utforska grundstenarna i hur matematik och Python samverkar för att skapa intelligenta system.
        Du kommer att få lära dig hur datorn kan använda statistik för att hitta trender, slump för att lösa komplexa problem,
        geometri för att klassificera data, och hur en artificiell <em>neuron</em> faktiskt fungerar och tränas!
      </p>

      <div className="task-box" style={{ borderColor: 'var(--primary)', backgroundColor: '#eff6ff' }}>
        <h3 style={{ color: '#1e40af', marginTop: 0 }}>💡 Klassisk programmering vs. Maskininlärning</h3>
        <p style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>
          <strong>Klassisk programmering:</strong> Vi programmerare formulerar reglerna manuellt med t.ex. <code>if/else</code>-satser och skickar in data. Datorn följer reglerna och levererar ett svar.
        </p>
        <p style={{ color: '#1e3a8a', marginBottom: 0 }}>
          <strong>Maskininlärning / AI:</strong> Vi matar datorn med massor av exempel (data och facit). Datorn använder matematiska metoder för att själv <em>hitta mönstren och räkna fram reglerna</em>.
        </p>
      </div>

      <h2>1. Matematikens verktygslåda i Python: math och statistics</h2>
      <p>
        Python har kraftfulla inbyggda standardbibliotek för matematiska och statistiska beräkningar.
        De två viktigaste att känna till är <code>math</code> och <code>statistics</code>.
      </p>

      <h3>Modulen math</h3>
      <p>
        Med <code>import math</code> får du tillgång till matematiska konstanter som pi ($\pi$) och eulers tal ($e$),
        samt avancerade matematiska funktioner som kvadratrot (<code>math.sqrt</code>), potenser (<code>math.pow</code>),
        trigonometri (<code>math.sin</code>, <code>math.cos</code>) och avståndsberäkning (<code>math.dist</code>).
      </p>

      <h3>Modulen statistics</h3>
      <p>
        För att analysera datamängder använder vi <code>statistics</code>. Den innehåller funktioner för att beräkna:
      </p>
      <ul>
        <li><code>statistics.mean(lista)</code> – Medelvärdet (summan av alla värden delat med antalet).</li>
        <li><code>statistics.median(lista)</code> – Medianen (det mittersta värdet när datan sorteras).</li>
        <li><code>statistics.mode(lista)</code> – Typvärdet (det värde som förekommer oftast).</li>
        <li><code>statistics.stdev(lista)</code> – Standardavvikelsen (hur mycket värdena i snitt avviker från medelvärdet, dvs. spridningen).</li>
      </ul>

      <p>Testa att köra exemplet nedan och se hur enkelt Python analyserar datamängden:</p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`import math
import statistics

# Provresultat för en klass (skala 0-100)
resultat = [45, 62, 78, 85, 90, 62, 74, 88, 95, 62, 53]

medel = statistics.mean(resultat)
median = statistics.median(resultat)
typvarde = statistics.mode(resultat)
spridning = statistics.stdev(resultat)

print("--- DATAANALYS AV PROVRESULTAT ---")
print(f"Antal prov: {len(resultat)}")
print(f"Medelvärde: {medel:.2f}")
print(f"Median:     {median}")
print(f"Typvärde:   {typvarde}")
print(f"Standardavvikelse: {spridning:.2f}")

# Beräkna euklidiskt avstånd mellan två punkter (x1, y1) och (x2, y2)
punkt_a = (2, 3)
punkt_b = (5, 7)
avstand = math.dist(punkt_a, punkt_b)
print(f"\\nAvstånd mellan {punkt_a} och {punkt_b}: {avstand:.2f}")`}
      />

      <h2>2. Sannolikhet och Slump: Monte Carlo-metoden</h2>
      <p>
        Vissa matematiska problem är antingen för svåra eller för tidskrävande att beräkna med exakta formler.
        Ett av de mest använda koncepten inom datavetenskap och AI är <strong>Monte Carlo-simuleringar</strong> (döpt efter det berömda kasinot i Monaco).
      </p>
      <p>
        Principen är genial i sin enkelhet: låt datorn göra tusentals (eller miljontals) slumpmässiga försök,
        och använd statistiken från försöken för att lösa problemet!
      </p>

      <h3>Exempel: Beräkna talet Pi med regndroppar</h3>
      <p>
        Föreställ dig en kvadrat med sidlängden 2, centrerad runt origo (från -1 till 1 på både x- och y-axeln).
        Inuti kvadraten ritar vi en cirkel med radien 1:
      </p>
      <ul>
        <li>Kvadratens area är <code>2 &times; 2 = 4</code>.</li>
        <li>Cirkelns area är <code>&pi; &times; r&sup2; = &pi; &times; 1&sup2; = &pi;</code>.</li>
        <li>Förhållandet mellan cirklens area och kvadratens area är alltså <strong>&pi; / 4</strong>.</li>
      </ul>
      <p>
        Om vi "släpper" massor av slumpmässiga punkter (x, y) jämnt fördelade över kvadraten, kommer andelen punkter som landar inuti cirkeln
        (där x&sup2; + y&sup2; &le; 1) att motsvara <strong>&pi; / 4</strong>. Multiplicerar vi denna andel med 4 får vi ett närmevärde för &pi;!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`import random
import math

antal_punkter = 2000
traffar_i_cirkel = 0

for _ in range(antal_punkter):
    # Slumpa en punkt mellan -1.0 och 1.0
    x = random.uniform(-1.0, 1.0)
    y = random.uniform(-1.0, 1.0)
    
    # Pythagoras sats: avstånd från origo till punkten är roten ur (x^2 + y^2)
    # Ligger punkten inuti enhetscirkeln?
    if x**2 + y**2 <= 1.0:
        traffar_i_cirkel += 1

# Beräkna uppskattningen
pi_uppskattning = 4 * (traffar_i_cirkel / antal_punkter)
fel = abs(pi_uppskattning - math.pi)

print(f"Antal punkter: {antal_punkter}")
print(f"Träffar i cirkeln: {traffar_i_cirkel}")
print(f"Uppskattat Pi: {pi_uppskattning:.5f}")
print(f"Pythons math.pi: {math.pi:.5f}")
print(f"Differens (fel): {fel:.5f}")`}
      />

      <h2>3. Linjär regression: Datorn lär sig trender och förutspår framtiden</h2>
      <p>
        En av de mest grundläggande formerna av maskininlärning kallas <strong>linjär regression</strong>.
        Tanken är att hitta den linje ($y = kx + m$) som bäst beskriver sambandet mellan två variabler.
      </p>
      <p>
        I gymnasie- och högstadiekursen känner du säkert igen <em>räta linjens ekvation</em>:
      </p>
      <div className="code-example">
        y = k * x + m
      </div>
      <p>
        Där:
      </p>
      <ul>
        <li><strong>k</strong> är linjens lutning (hur mycket $y$ förändras när $x$ ökar med 1).</li>
        <li><strong>m</strong> är interceptet / startvärdet (där linjen skär y-axeln, alltså värdet på $y$ när $x = 0$).</li>
      </ul>
      <p>
        I Python finns funktionen <code>statistics.linear_regression(x_data, y_data)</code> som automatiskt beräknar den optimala
        lutningen ($k$) och interceptet ($m$) med hjälp av <em>minsta kvadratmetoden</em>. När datorn har räknat ut $k$ och $m$ har den skapat en <strong>modell</strong>
        som vi kan använda för att förutsäga nya värden!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`import statistics

# Vi har data på hur många timmar elever studerade och deras provresultat
studietimmar = [2, 3, 5, 7, 8, 10, 12, 14]
provresultat = [42, 50, 61, 75, 79, 88, 93, 99]

# Träna vår modell genom att hitta den bästa linjen
slope, intercept = statistics.linear_regression(studietimmar, provresultat)

print("--- LINJÄR REGRESSION (AI-PREDIKTION) ---")
print(f"Formel: Resultat = {slope:.2f} * Timmar + {intercept:.2f}")

# Låt modellen förutspå resultatet för elever som pluggat ett visst antal timmar
def forutspa_resultat(timmar):
    beraknat = slope * timmar + intercept
    # Begränsa mellan 0 och 100 poäng
    return max(0, min(100, round(beraknat, 1)))

for t in [4, 6, 9, 15]:
    poang = forutspa_resultat(t)
    print(f"Vid {t} timmars plugg förutspår modellen: {poang} poäng")`}
      />

      <h2>4. Klassificering med K-Nearest Neighbors (KNN)</h2>
      <p>
        Vad gör vi om vi inte vill förutspå ett tal, utan vill att datorn ska <strong>kategorisera</strong> något?
        Till exempel: Är ett mejl spam eller inte spam? Är ett djur en hund eller en katt? Är en frukt ett äpple eller en apelsin?
      </p>
      <p>
        En av de mest intuitiva och eleganta algoritmerna för klassificering kallas <strong>K-Nearest Neighbors (KNN)</strong> (K närmaste grannar).
        Den bygger på en enkel princip: <em>"Säg mig vilka dina närmsta grannar är, så ska jag säga vem du är!"</em>
      </p>

      <h3>Hur KNN fungerar steg för steg:</h3>
      <ol>
        <li>
          <strong>Egenskaper som koordinater:</strong> Varje objekt representeras av numeriska mätvärden (vektorer).
          Till exempel kan en frukt beskrivas av dess <code>[vikt i gram, rundhet på skala 1-10]</code>.
        </li>
        <li>
          <strong>Beräkna avstånd:</strong> När en ny okänd frukt dyker upp, använder datorn <em>Pythagoras sats</em> (eller <code>math.dist</code>)
          för att beräkna avståndet till alla kända frukter i databasen:
          <br />
          <code>avstånd = math.dist(okänd_frukt, känd_frukt)</code>
        </li>
        <li>
          <strong>Hitta de K närmaste:</strong> Datorn sorterar listan och väljer ut de $K$ stycken närmaste grannarna (t.ex. de 3 eller 5 närmaste).
        </li>
        <li>
          <strong>Demokratisk omröstning:</strong> Den kategori som har flest röster bland de närmaste grannarna blir datorns klassificering!
        </li>
      </ol>

      <PythonIDE
        hideCompletion={true}
        initialCode={`import math

# Träningsdata: [vikt (gram), färgnyans (1-10)], Kategori
traningsdata = [
    ([150, 9], "Äpple"),
    ([165, 8], "Äpple"),
    ([140, 9], "Äpple"),
    ([180, 2], "Banan"),
    ([195, 3], "Banan"),
    ([170, 2], "Banan"),
    ([130, 7], "Apelsin"),
    ([135, 6], "Apelsin")
]

def klassificera_frukt(ny_frukt, k=3):
    # 1. Beräkna avstånd till alla frukter i databasen
    avstand_lista = []
    for egenskaper, kategori in traningsdata:
        avstand = math.dist(ny_frukt, egenskaper)
        avstand_lista.append((avstand, kategori))
    
    # 2. Sortera så de kortaste avstånden hamnar först
    avstand_lista.sort()
    
    # 3. Välj ut de k närmaste
    narmaste_grannar = avstand_lista[:k]
    
    # 4. Räkna röster
    roster = {}
    for dist, kat in narmaste_grannar:
        roster[kat] = roster.get(kat, 0) + 1
        
    vinnare = max(roster, key=roster.get)
    return vinnare, narmaste_grannar

# Testa att klassificera en ny frukt: vikt 185g, färgnyans 3
test_frukt = [185, 3]
resultat, grannar = klassificera_frukt(test_frukt, k=3)

print(f"Klassificerar ny frukt {test_frukt}...")
print("De 3 närmaste grannarna:")
for d, kat in grannar:
    print(f" - {kat} (avstånd: {d:.2f})")

print(f"\\nAI-modellens beslut: Frukten är en {resultat}!")`}
      />

      <h2>5. Neurala Nätverk: Hur en artificiell neuron tänker</h2>
      <p>
        Djupinlärning (Deep Learning) och stora AI-modeller bygger på <strong>artificiella neurala nätverk</strong>.
        Dessa nätverk är inspirerade av hur biologiska nervceller (neuroner) i den mänskliga hjärnan tar emot, bearbetar och skickar vidare signaler.
      </p>
      <p>
        Grundbyggstenen kallas för en <strong>Perceptron</strong> (en enskild artificiell neuron). Den består av fyra delar:
      </p>

      <table className="content-table">
        <thead>
          <tr>
            <th>Beståndsdel</th>
            <th>Matematisk beteckning</th>
            <th>Vad den gör</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Insignaler</strong></td>
            <td>$x_1, x_2, \dots, x_n$</td>
            <td>Datan som skickas in (t.ex. pixlar i en bild eller mätvärden).</td>
          </tr>
          <tr>
            <td><strong>Vikter</strong></td>
            <td>$w_1, w_2, \dots, w_n$</td>
            <td>Hur viktig varje signal är. Positiv vikt förstärker signalen, negativ hämmar den.</td>
          </tr>
          <tr>
            <td><strong>Bias (tröskel)</strong></td>
            <td>$b$</td>
            <td>Ett extra värde som justerar hur lätt eller svårt det är för neuronen att "fyrverka".</td>
          </tr>
          <tr>
            <td><strong>Aktiveringsfunktion</strong></td>
            <td><code>f(summa)</code></td>
            <td>Avgör om signalen ska skickas vidare (t.ex. 1 för JA, 0 för NEJ).</td>
          </tr>
        </tbody>
      </table>

      <h3>Hur neuronen beräknar sitt svar:</h3>
      <p>
        Neuronen multiplicerar varje insignal med dess vikt, adderar ihop dem tillsammans med bias, och kör resultatet genom en aktiveringsfunktion:
      </p>
      <div className="code-example">
        summa = (x1 * w1) + (x2 * w2) + bias<br />
        utsignal = 1 om summa &gt;= 0 annars 0
      </div>

      <h3>Hur neuronen faktiskt "lär sig" (Träning):</h3>
      <p>
        När neuronen skapas vet den ingenting – vikterna sätts ofta till slumpmässiga små tal.
        Sedan kör vi en träningsloop:
      </p>
      <ul>
        <li>Neuronen gissar på ett exempel.</li>
        <li>Vi jämför gissningen med facit: <code>fel = facit - gissning</code>.</li>
        <li>Om neuronen gissade fel justerar vi vikterna lite grann med en <strong>inlärningstakt</strong> (learning rate):
          <br /><code>vikt = vikt + learning_rate * fel * insignal</code>
        </li>
      </ul>
      <p>
        Kör exemplet nedan och se hur neuronen på bara några iterationer lär sig att fatta rätt beslut för den logiska ELLER-funktionen (OR)!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`# Vi tränar en neuron att lära sig en logisk OR-grind (ELLER)
# Tabell:
# (0, 0) -> 0
# (0, 1) -> 1
# (1, 0) -> 1
# (1, 1) -> 1

traning = [
    ([0, 0], 0),
    ([0, 1], 1),
    ([1, 0], 1),
    ([1, 1], 1)
]

# Startvärden (slumpmässiga/enkla gissningar)
w1 = 0.1
w2 = -0.2
bias = -0.1
learning_rate = 0.2

print("--- STARTAR TRÄNING AV EN ARTIFICELL NEURON ---")

for epok in range(1, 11):
    antal_fel = 0
    for (x1, x2), facit in traning:
        # 1. Viktad summa
        summa = x1 * w1 + x2 * w2 + bias
        # 2. Aktivering (stegfunktion)
        gissning = 1 if summa >= 0 else 0
        
        # 3. Räkna ut felet
        fel = facit - gissning
        if fel != 0:
            antal_fel += 1
            # Justera vikter och bias
            w1 += learning_rate * fel * x1
            w2 += learning_rate * fel * x2
            bias += learning_rate * fel
            
    print(f"Epok {epok}: Antal felaktiga gissningar = {antal_fel}")
    if antal_fel == 0:
        print(f"Neuronen har lärt sig mönstret perfekt efter {epok} epoker! 🎉")
        break

print(f"\\nTränade vikter: w1 = {w1:.2f}, w2 = {w2:.2f}, bias = {bias:.2f}")

# Verifiera neuronen på all data
print("\\nSlutgiltig testkörning:")
for (x1, x2), facit in traning:
    svar = 1 if (x1 * w1 + x2 * w2 + bias) >= 0 else 0
    status = "RÄTT ✓" if svar == facit else "FEL ✗"
    print(f"Input ({x1}, {x2}) -> Neurons svar: {svar} (Facit: {facit}) [{status}]")`}
      />

      <h2>6. Text & Språkmodeller: Hur en AI "skriver" med sannolikhet</h2>
      <p>
        Hur kan moderna språkmodeller (som ChatGPT eller Gemini) skriva så flytande och sammanhängande text?
        I grund och botten fungerar de genom att förutspå <strong>vad nästa ord med störst sannolikhet borde vara</strong>,
        baserat på de ord som kommit innan.
      </p>
      <p>
        En enkel men kraftfull matematisk modell för detta kallas en <strong>Markov-kedja</strong>.
        Vi analyserar en text och bygger en ordbok där varje ord är kopplat till en lista över de ord som brukar följa direkt efter.
        När datorn sedan genererar ny text slumpar den nästa ord bland de statistiska kandidaterna!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`import random

# Träningsdata för vår mini-språkmodell
kalltext = """
artificiell intelligens bygger på matematik och programmering .
matematik hjälper datorn att förstå mönster och data .
datorn kan lära sig genom att träna på data .
programmering gör det möjligt att bygga intelligens med matematik .
"""

ord_lista = kalltext.lower().split()

# Bygg övergångstabell: vilket ord följer efter vilket?
overgangar = {}
for i in range(len(ord_lista) - 1):
    nuvarande = ord_lista[i]
    nasta = ord_lista[i + 1]
    
    if nuvarande not in overgangar:
        overgangar[nuvarande] = []
    overgangar[nuvarande].append(nasta)

print("Ordföljder som datorn lärt sig (utdrag):")
for ordet in ["matematik", "datorn", "artificiell"]:
    print(f"Efter '{ordet}' kan komma: {overgangar.get(ordet, [])}")

# Generera ny AI-text!
startord = "artificiell"
genererad_text = [startord]
nuvarande_ord = startord

for _ in range(12):
    kandidater = overgangar.get(nuvarande_ord)
    if not kandidater:
        break
    # Välj nästa ord slumpmässigt baserat på de faktiska förekomsterna
    nasta_ord = random.choice(kandidater)
    genererad_text.append(nasta_ord)
    nuvarande_ord = nasta_ord

print("\\nGenererad AI-mening:")
print(" ".join(genererad_text))`}
      />

      <hr />

      <h3>Dina uppgifter (görs i kodfönstret till höger)</h3>
      <div className="task-box">
        <p>
          <strong>Tips!</strong><br />
          Låt alla dina lösningar ligga kvar i kodrutan. När du är klar med en uppgift kan du antingen låta den köras eller kommentera bort tidigare anrop med <code>'''</code>.
          Kom ihåg att skriva tydliga kommentarer (<code># Uppgift 1</code> osv.) och använda beskrivande variabel- och funktionsnamn.
        </p>

        <ol>
          <li>
            <strong>Statistik och Dataanalys</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 1</code>.</li>
              <li>Skapa en lista <code>temperaturer = [14.2, 16.5, 15.0, 18.2, 21.0, 19.4, 16.5, 22.1, 17.8]</code> som representerar dagstemperaturer.</li>
              <li>Använd modulen <code>statistics</code> för att skriva ut:
                <ul>
                  <li>Medeltemperaturen (avrundad till en decimal).</li>
                  <li>Mediantemperaturen.</li>
                  <li>Typvärdet (den vanligaste temperaturen).</li>
                  <li>Standardavvikelsen (avrundad till två decimaler).</li>
                </ul>
              </li>
              <li>Skriv även ut <em>variationsbredden</em> (skillnaden mellan högsta och lägsta temperaturen) med hjälp av Pythons inbyggda <code>max()</code> och <code>min()</code>.</li>
            </ul>
          </li>

          <li>
            <strong>Monte Carlo-simulering av Tärningskast</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 2</code>.</li>
              <li>Skapa en funktion <code>simulera_tarningssannolikhet(antal_kast)</code>.</li>
              <li>I funktionen ska du simulera att kasta <strong>tre vanliga sexsidiga tärningar</strong> samtidigt <code>antal_kast</code> gånger med hjälp av <code>random.randint(1, 6)</code>.</li>
              <li>Räkna hur många gånger summan av de tre tärningarna blir <strong>minst 15</strong> (alltså 15, 16, 17 eller 18).</li>
              <li>Returnera och skriv ut den uppskattade sannolikheten i procent (t.ex. <code>"Sannolikhet: 9.25%"</code>).</li>
              <li>Testa funktionen med 1 000 kast och sedan med 10 000 kast. Märker du hur sannolikheten stabiliseras ju fler försök datorn gör?</li>
            </ul>
          </li>

          <li>
            <strong>Linjär regression: Bostadspriser</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 3</code>.</li>
              <li>Skapa två listor med historisk försäljningsdata för bostäder i ett område:
                <br /><code>boarea = [30, 45, 55, 65, 75, 90, 110, 125]</code> (i kvadratmeter)
                <br /><code>pris = [1800, 2400, 2900, 3400, 3800, 4500, 5300, 6100]</code> (i tusentals kronor)
              </li>
              <li>Använd <code>statistics.linear_regression(boarea, pris)</code> för att ta fram linjens lutning och intercept.</li>
              <li>Skapa en funktion <code>uppskatta_bostadspris(kvm)</code> som använder regressionsekvationen och returnerar det beräknade priset.</li>
              <li>Anropa funktionen för att förutspå priset på två lägenheter: en på <strong>50 kvm</strong> och en på <strong>85 kvm</strong>. Skriv ut resultaten i hela tusentals kronor.</li>
            </ul>
          </li>

          <li>
            <strong>Klassificering med Euklidiskt Avstånd (KNN)</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 4</code>.</li>
              <li>Skapa en funktion <code>avstand(punkt1, punkt2)</code> som beräknar och returnerar det euklidiska avståndet mellan två punkter <code>(x, y)</code> med hjälp av <code>math.dist</code> (eller Pythagoras sats).</li>
              <li>Givet följande träningsdata över djur baserat på <code>[vikt i kg, mankhöjd i cm]</code>:
                <br /><code>katter = [[4, 25], [5, 26], [3.5, 23]]</code>
                <br /><code>hundar = [[15, 45], [22, 55], [18, 50]]</code>
              </li>
              <li>Skapa funktionen <code>ar_katt_eller_hund(nytt_djur)</code>. Funktionen ska beräkna avståndet från <code>nytt_djur</code> till alla kända djur.</li>
              <li>Hitta vilket enskilt känt djur som ligger <em>närmast</em> (1-NN). Om det närmaste djuret är en katt ska funktionen returnera <code>"Katt"</code>, annars <code>"Hund"</code>.</li>
              <li>Testa funktionen på djuret <code>[4.5, 28]</code> och djuret <code>[12, 42]</code> och skriv ut resultatet.</li>
            </ul>
          </li>

          <li>
            <strong>Artificiell Neuron (Perceptronen)</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 5</code>.</li>
              <li>Skapa en funktion <code>neuron_beslut(x1, x2, w1, w2, bias)</code> som beräknar den viktade summan och returnerar <code>1</code> om summan är större än eller lika med noll, annars <code>0</code>.</li>
              <li>Testa att manuellt hitta vikter ($w_1, w_2$) och bias så att neuronen löser den logiska <strong>OCH-funktionen (AND)</strong>:
                <br /><code>(0, 0) -&gt; 0</code>
                <br /><code>(0, 1) -&gt; 0</code>
                <br /><code>(1, 0) -&gt; 0</code>
                <br /><code>(1, 1) -&gt; 1</code>
              </li>
              <li><em>Tips:</em> Testa t.ex. $w_1 = 0.5$, $w_2 = 0.5$ och bias = $-0.8$.</li>
              <li>Kör ett testanrop för alla fyra kombinationerna och skriv ut resultaten för att visa att neuronen svarar rätt på alla fyra!</li>
            </ul>
          </li>

          <li>
            <strong>🤯 Utmaning: Bygg en rekommendationsmotor för musik eller film</strong>
            <ul>
              <li>Skriv en kommentar <code># Uppgift 6</code>.</li>
              <li>Streaming- och AI-tjänster (som Spotify och Netflix) rekommenderar innehåll baserat på hur lika användares smakvektorer är!</li>
              <li>Föreställ dig tre genrer på en skala 1-10: <code>[Action/Energi, Humor/Glädje, Djup/Dramatik]</code>.</li>
              <li>Skapa en katalog med minst fyra filmer/låtar med genrebetyg, t.ex.:
                <br /><code>filmer = &#123; "Die Hard": [9, 3, 2], "The Matrix": [8, 2, 8], "Superbad": [2, 9, 1], "Interstellar": [5, 2, 10] &#125;</code>
              </li>
              <li>Låt användaren ange sin egen smak (t.ex. <code>min_smak = [7, 3, 7]</code>).</li>
              <li>Skapa en funktion <code>rekommendera_film(anvandar_smak, katalog)</code> som räknar ut avståndet till alla filmer med <code>math.dist</code> och returnerar namnet på den film som har <strong>minst avstånd</strong> till användarens preferenser.</li>
              <li>Skriv ut vilken film som rekommenderas och varför!</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
