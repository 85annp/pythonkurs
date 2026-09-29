import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Funktioner() {
  return (
    <div className="module-content">
      <h2>Funktioner</h2>
      <p>
        Ofta kommer vi när vi programmerar att vilja använda samma funktionalitet flera gånger.
        Detta kan vi naturligtvis göra genom att kopiera och klistra in kod, eller ibland använda en loop.
        Men det absolut bästa sättet att sätta samman flera rader kod så att vi kan återanvända dem som ett eget litet "kommando" är att använda <strong>funktioner</strong> (som ofta kallas <em>metoder</em> i objektorienterade språk).
      </p>
      <p>
        Vi har hittills använt funktioner utan att tänka på det. Till exempel är <code>print()</code> en inbyggd funktion.
        Inbyggda funktioner finns där för att underlätta för oss. Vi vill t.ex. slippa skriva logiken för hur man skriver ut text på skärmen från grunden!
      </p>

      <h3>Skapa egna funktioner</h3>
      <p>Ofta kommer vi att vilja skapa egna funktioner. Varje funktion har:</p>
      <ul>
        <li>Ett <strong>namn</strong> (i Python använder vi oftast små bokstäver och understreck, t.ex. <code>min_funktion</code>).</li>
        <li>Noll, ett eller flera <strong>argument</strong> (värden vi skickar in i funktionen).</li>
        <li>Noll eller ett <strong>returvärde</strong> (det funktionen skickar tillbaka när den är klar).</li>
        <li>Koden som tillhör funktionen (som vi markerar med <strong>indrag</strong> i Python).</li>
      </ul>

      <p>En enkel funktion skapas med nyckelordet <code>def</code> (som står för define) och kan se ut så här:</p>

      <div className="code-example">
        def hej():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;print("Hejsan")
      </div>

      <p>
        Hela första raden kallas för funktionens <em>signatur</em>.
        Parenteserna <code>()</code> måste alltid finnas med. Om funktionen inte tar emot några värden är parenteserna tomma.
      </p>

      <p>För att <strong>använda</strong> (anropa) funktionen skriver vi bara dess namn följt av parenteserna:</p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`# Först skapar vi (definierar) funktionen
def hej():
    print("Hejsan!")

# Senare i programmet kan vi anropa den!
hej()
hej()
hej()`}
      />

      <h2>Funktioner som tar emot parametrar</h2>
      <p>
        För att skapa en funktion som tar emot ett värde måste vi ge variabeln ett namn innanför parenteserna.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`def hej2(namn):
    print(f"Hejsan {namn}!")

# Vi anropar funktionen och skickar med olika värden
hej2("Pelle")

du = "Kalle"
hej2(du)`}
      />

      <p>
        Naturligtvis kan mer än ett värde skickas med till en funktion. Vi separerar dem bara med kommatecken.
        Det enda som har betydelse är <strong>ordningen</strong> – vi måste skicka värdena i samma ordning som funktionen förväntar sig dem!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`def skriv_namn(fornamn, efternamn):
    print(f"Förnamn: {fornamn}, Efternamn: {efternamn}")

skriv_namn("Pelle", "Persson")`}
      />

      <h2>Funktioner som returnerar värden</h2>
      <p>
        Om man vill skriva en funktion som räknar ut något och ger ett svar tillbaka, använder man nyckelordet <code>return</code>.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`def kvadrat(tal):
    return tal * tal

# Vi anropar funktionen och sparar svaret i en variabel
k = kvadrat(5)
print(f"Kvadraten av 5 är {k}.")`}
      />

      <h2>Lokala vs. globala variabler</h2>
      <p>
        När du börjar dela upp din kod i funktioner är det avgörande att förstå var variabler existerar och var de kan nås. I programmering kallas detta för en variabels <strong>räckvidd</strong> (eller <em>scope</em> på engelska).
      </p>
      
      <h3>Lokala variabler</h3>
      <p>
        En <strong>lokal variabel</strong> skapas inuti en funktion. Den existerar enbart medan funktionen körs och kan <strong>inte</strong> nås eller användas utanför funktionen.
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`def berakna_area():
    bredd = 5   # Lokal variabel
    hojd = 10   # Lokal variabel
    area = bredd * hojd   # Lokal variabel
    print(f"Arean är: {area}")

berakna_area()

# Detta ger ett felmeddelande (NameError) eftersom 'area' inte finns här:
#print(area)`}
      />

      <h4>Fördel med lokala variabler</h4>
      <ul>
        <li>De är helt isolerade från resten av programmet.</li>
        <li>Du behöver inte oroa dig för att råka ändra en variabel i en helt annan del av koden.</li>
      </ul>

      <h3>Globala variabler</h3>
      <p>En <strong>global variabel</strong> skapas utanför alla funktioner, längst upp i programmet. Den kan läsas från vilken funktion som helst.</p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`spelarnamn = "Alex"   # Global variabel

def visa_profil():
    # Funktionen kan läsa den globala variabeln
    print(f"Välkommen tillbaka, {spelarnamn}!")

visa_profil()`}
      />

      <h4>Vad händer om man vill ändra en global variabel?</h4>
      <p>Om du försöker tilldela ett nytt värde till en variabel inuti en funktion skapar Python automatiskt en <em>ny lokal variabel</em> med samma namn, istället för att ändra den globala.</p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`poang = 0   # Global variabel

def oka_poang():
    poang += 1   # Detta ger UnboundLocalError!
    # Python ser tilldelningen och tror att 'poang' är en lokal variabel som ännu inte har ett värde.

oka_poang()
print(f"Poäng: {poang}")`}
      />

      <p>För att tvinga Python att ändra den globala variabeln måste man använda nyckelordet <code>global</code>.</p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`poang = 0

def oka_poang():
    global poang   # Python använder den globala variabeln
    poang += 1

oka_poang()
print(f"Poäng: {poang}")`}
      />

      <p>
        <strong>Varning!</strong> Att använda nyckelordet <code>global</code> anses nästan alltid vara dålig praxis inom programmering.
      </p>

      <h4>Varför ska du undvika <code>global</code>?</h4>
      <ul>
        <li><strong>Dolda beroenden:</strong> Det blir svårt att förstå vad en funktion behöver för att fungera eller vad den påverkar.</li>
        <li><strong>Svårt att felsöka:</strong> Om värdet på en variabel blir fel i ett stort program kan vilken funktion som helst ha orsakat felet.</li>
        <li><strong>Svårt att återanvända kod:</strong> En funktion som förlitar sig på globala variabler är svår att flytta eller återanvända i andra projekt.</li>
      </ul>

      <h2>God praxis (Best Practice) för funktioner</h2>
      <p>Här är tre principer för att skriva ren, säker och lättläst kod.</p>

      <h3>Praxis 1: Skicka in data via parametrar och returnera resultat</h3>
      <p>
        Istället för att ändra globala variabler direkt, låt funktionen ta emot värden via <strong>parametrar</strong> och lämna tillbaka beräknade värden med <code>return</code>.
      </p>

      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "50%" }}>Dålig praxis</th>
          <th style={{ width: "50%" }}>Bra praxis</th>
        </tr>
        <tr>
          <td className="code-example">
            # Dåligt: Funktionen är beroende av och ändrar en global variabel<br/>
            poang = 0<br/>
            <br/>
            def lagg_till_poang():<br/>
            &nbsp;&nbsp;global poang<br/>
            &nbsp;&nbsp;poang += 10
          </td>
          <td className="code-example">
            # Bra: Funktionen är fristående och förutsägbar<br/>
            def berakna_ny_poang(nuvarande_poang, extra_poang):<br/>
            &nbsp;&nbsp;return nuvarande_poang + extra_poang<br/>
            <br/>
            # Användning:<br/>
            spelarens_poang = 0<br/>
            spelarens_poang = berakna_ny_poang(spelarens_poang, 10)
          </td>
        </tr>
      </table>


      <h3>Praxis 2: Använd konstanter för värden som aldrig ändras</h3>
      <p>Globala variabler är helt okej om de är <strong>konstanter</strong> – det vill säga fasta värden som sätts en gång och sedan aldrig ändras under programmets gång (till exempel inställningar, momssats eller matematiska konstanter).</p>
      <p>I Python skrivs konstanter med <strong>STORA_BOKSTÄVER</strong> för att tydligt visa för andra att värdet inte ska ändras.</p>

      <div className="code-example">
        MOMS = 0.25  # Global konstant (ändras ej)<br/>
        <br/>
        def berakna_moms(pris):<br/>
        &nbsp;&nbsp;return pris * MOMS<br/>
        <br/>
        print(f"Momsen blir: &#123;berakna_moms(100)&#125; kr")
      </div>

      <h3>Praxis 3: Skugga inte Pythons inbyggda funktioner (Name Shadowing)</h3>
      <p>Python har många inbyggda funktioner och ord (som <code>sum</code>, <code>list</code>, <code>max</code>, <code>min</code>, <code>str</code>, <code>input</code>). Om du döper en lokal eller global variabel till samma namn som en inbyggd funktion, kommer du att "skugga" (dölja) Pythons ursprungliga funktion så att den inte går att använda längre.</p>

      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "50%" }}>Dålig praxis</th>
          <th style={{ width: "50%" }}>Bra praxis</th>
        </tr>
        <tr>
          <td className="code-example">
            # DÅLIGT: Variabeln 'list' skuggar Pythons inbyggda datatyp list()<br/>
            list = [10, 20, 30] <br/>
            <br/>
            # DÅLIGT: Variabeln 'sum' skuggar Pythons inbyggda funktion sum()<br/>
            sum = 60 <br/>
            <br/>
            # Nästa gång du försöker använda sum() kraschar programmet:<br/>
            tallista = [1, 2, 3]<br/>
            totalt = sum(tallista)  # TypeError: 'int' object is not callable
          </td>
          <td className="code-example">
            # BRA: Använd beskrivande namn som inte krockar med Pythons ord<br/>
            poang_lista = [10, 20, 30]<br/>
            totalsumma = 60<br/>
            <br/>
            # Nu fungerar Pythons inbyggda funktioner som de ska:<br/>
            tallista = [1, 2, 3]<br/>
            totalt = sum(tallista)  # Fungerar utmärkt!
          </td>
        </tr>
      </table>


      <p>Om en variabel du hittar på får en särskild färg i en kodeditor (t ex Thonny), beror det ofta på att ordet är reserverat av Python. Välj då ett annat namn!</p>


      <h2>Tumregel för bra funktioner</h2>
      <p>
        En bra funktion tar emot all data den behöver som parametrar och lämnar resultatet som ett returvärde.
        Funktioner som gör beräkningar bör helst <strong>inte</strong> använda <code>input()</code> eller <code>print()</code>.
        All kommunikation sker via parametrar in, och <code>return</code> ut!
      </p>
      <p>
        Genom att skilja på <em>logik</em> (beräkningar) och <em>användargränssnitt</em> (utskrifter och inmatningar) kan du återanvända din beräkningskod oavsett om du bygger ett terminalprogram, en webbsida eller en app!
      </p>

      <h2>Menyprogram med funktioner</h2>
      <p>
        Menyprogram är bland de längre program man bygger som nybörjare. Med hjälp av funktioner kan man dela upp sitt program i mindre bitar som sköter en sak var. Det ökar läsbarheten extremt mycket!
      </p>

      <p>
        Menyprogram fungerar inte så bra i kodrutorna i webbläsaren, så testa gärna koden i Thonny i stället!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`# Här definierar vi alla våra små funktioner först!

def skriv_meny():
    print("\\n--- MENY ---")
    print("1. Skriv vertikalt")
    print("2. Skriv upprepad text")
    print("3. Avsluta")

def skriv_vertikalt():
    text = input("Vilken text vill du skriva vertikalt? ")
    for bokstav in text:
        print(bokstav)

def skriv_upprepad_text():
    text = input("Vilken text ska upprepas? ")
    antal = int(input("Hur många gånger ska den upprepas? "))
    
    # Tips: I Python kan man multiplicera strängar!
    print(text * antal)

# Här börjar själva huvudprogrammet
while True:
    skriv_meny()
    val = input("Välj ett alternativ: ")
    
    match val:
        case "1":
            skriv_vertikalt()
        case "2":
            skriv_upprepad_text()
        case "3":
            print("Programmet avslutas...")
            break
        case _:
            print("Ogiltigt alternativ!")`}
      />

      <h2>Ett bättre sätt att läsa in tal (felhantering)</h2>
      <p>
        Vi har hittills låtit programmen krascha om användaren skriver in fel när vi frågar efter tal (och använder <code>int()</code> eller <code>float()</code>).
        Det fungerar när vi bara övar, men så kan vi inte ha det i ett riktigt program.
      </p>
      <p>
        I Python löser vi detta med en struktur som heter <code>try ... except</code>.
        Vi säger helt enkelt åt datorn att <em>försöka</em> (try) omvandla texten till ett heltal. Om det blir ett fel (ett <em>ValueError</em>) fångar vi felet med <code>except</code> och ber användaren försöka igen.
      </p>

      <p>
        Det här är ett perfekt tillfälle att bygga en egen funktion som vi kan återanvända i <strong>alla</strong> våra framtida program!
      </p>

      <PythonIDE
        hideCompletion={true}
        initialCode={`def las_in_heltal(meddelande):
    # En loop som körs tills användaren gör rätt
    while True:
        svar = input(meddelande)
        
        try:
            # Vi FÖRSÖKER göra om det till en int
            heltal = int(svar)
            return heltal # Om det lyckas, returnerar vi värdet och loopen bryts!
        except ValueError:
            # Om det kraschar hamnar vi här istället för att programmet dör!
            print("Det där var inte ett giltigt heltal. Försök igen!")

# Nu kan vi använda vår nya superfunktion!
print("--- Matematiktestet ---")
tal1 = las_in_heltal("Skriv in första heltalet: ")
tal2 = las_in_heltal("Skriv in det andra heltalet: ")

print(f"Summan är: {tal1 + tal2}")`}
      />

      <p>
        Från och med nu kan du alltid kopiera och använda din <code>las_in_heltal</code>-funktion i alla nya program du gör för att göra dem krasch-säkra!
      </p>

      <hr />

      <h3>Dina uppgifter (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br />Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Baklänges</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Skapa funktionen <code>skriv_baklänges(meddelande)</code>.
              <ul>
                <li>Funktionen ska ta emot en sträng som parameter (<code>meddelande</code>).</li>
                <li>Funktionen ska skriva ut parametern meddelande baklänges genom att loopa från sista till första positionen.</li>
                <li>Utskriften ska ske på en rad och markören ska vara på nästa rad efter hela utskriften är klar.</li>
              </ul>
            </li>
            <li>Anropa funktionen minst tre gånger.</li>
          </ul>
          <li>Tal i kvadrat</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Skapa funktionen <code>skriv_tal_i_kvadrat_mellan(nedreGräns, övreGräns)</code>.
              <ul>
                <li>Funktionen ska ta emot två heltal som parametrar (<code>nedreGräns</code> och <code>övreGräns</code>).</li>
                <li>För varje tal mellan <code>nedreGräns</code> och <code>övreGräns</code> (inklusive) ska funktionen beräkna och skriva ut vad talet är i kvadrat, alltså upphöjt till två.</li>
              </ul>
            </li>
            <li>Om funktionen anropas genom att skriva <code>skriv_tal_i_kvadrat_mellan(3, 5)</code> så ska programmet skriva ut:<br />
              <code>Talet 3 i kvadrat är 9.<br />
                Talet 4 i kvadrat är 16.<br />
                Talet 5 i kvadrat är 25.
              </code>
            </li>
          </ul>
          <li>Triangel</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Skapa funktionen <code>rita_rätvinklig_triangel(sidlängd)</code>.
              <ul>
                <li>Funktionen ska ta emot ett heltal som parameter (<code>sidlängd</code>).</li>
                <li>Funktionen ska rita ut en rätvinklig triangel med den sidlängd som anges.</li>
              </ul>
            </li>
            <li>En triangel ritad av denna funktion skulle t.ex. kunna se ut så här:<br />
              <code>*<br />
                **<br />
                ***<br />
                ****<br />
                *****</code>
            </li>
            <li>Anropa funktionen minst två gånger i ditt program.</li>
          </ul>
          <li>Addera</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 4".</li>
            <li>Skapa funktionen <code>addera(tal1, tal2)</code>.
              <ul>
                <li>Funktionen ska ta emot två heltal som parametrar (<code>tal1</code> och <code>tal2</code>).</li>
                <li>Funktionen ska returnera summan av talen.</li>
              </ul>
            </li>
            <li>Anropa funktionen minst två gånger i ditt program och skriv ut resultaten.</li>
          </ul>
          <li>Längst ord</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 5".</li>
            <li>Skapa funktionen <code>längst(text1, text2)</code>.
              <ul>
                <li>Funktionen ska ta emot två strängar som parametrar (<code>text1</code> och <code>text2</code>).</li>
                <li>Funktionen ska returnera den sträng av de båda parameterna som är längst.</li>
                <li>Som exempel så ska anropet <code>längst("Hej", "Hejsan")</code> returnera <code>"Hejsan"</code>.</li>
                <li>Om båda argumenten är lika långa så ska funktionen returnera det första av dem.</li>
              </ul>
            </li>
            <li>Anropa funktionen minst tre gånger där den första är störst en gång, den andra en gång och texterna är lika långa en gång (men olika texter). Skriv ut resultaten.</li>
          </ul>
          <li>Inläsning med felhantering</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 6".</li>
            <li>Skapa funktionen <code>las_in_heltal(meddelande)</code> exakt som i exemplet.</li>
            <li>Skapa funktionen <code>las_in_decimaltal(meddelande)</code> analogt med exemplet.</li>
            <li>Anropa båda funktionerna och testa att skriva både rätt och fel.</li>
            <li>🤯 Skapa en funktion <code>tal_eller_ej(text)</code> som skriver ut om texten är ett heltal, ett decimaltal eller varken eller.<br />
                Anropa funktionen minst tre gånger (med heltal, decimaltal och annat än tal).</li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
