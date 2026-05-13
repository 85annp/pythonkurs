import React from "react";
import PythonIDE from "../components/PythonIDE";

export default function Metoder() {
  return (
    <div className="module-content">
      <h2>Funktioner (metoder)</h2>
      <p>
        Ofta kommer vi när vi programmerar att vilja använda samma funktionalitet flera gånger.
        Detta kan vi naturligtvis göra genom att kopiera och klistra in kod, eller ibland använda en loop.
        Men det absolut bästa sättet att sätta samman flera rader kod så att vi kan återanvända dem som ett eget litet "kommando" är att använda <strong>funktioner</strong> (som ofta kallas <em>metoder</em> i andra språk).
      </p>
      <p>
        Vi har hittills använt funktioner utan att tänka på det. Till exempel är <code>print()</code> en inbyggd funktion, och <code>len()</code> är en annan. De finns där för att vi ska slippa skriva logiken för hur man skriver ut text på skärmen från grunden!
      </p>

      <h3>Skapa egna funktioner</h3>
      <p>Ofta kommer vi att vilja skapa egna funktioner. Varje funktion har:</p>
      <ul>
        <li>Ett <strong>namn</strong> (i Python använder vi oftast små bokstäver och understreck, t.ex. <code>min_funktion</code>).</li>
        <li>Noll, ett eller flera <strong>argument</strong> (värden vi skickar in i funktionen).</li>
        <li>Ett <strong>returvärde</strong> (det funktionen skickar tillbaka när den är klar).</li>
        <li>Koden som tillhör funktionen (som vi markerar med <strong>indrag</strong> i Python).</li>
      </ul>

      <p>En enkel funktion skapas med nyckelordet <code>def</code> (som står för define) och kan se ut så här:</p>

      <div className="code-example">
        def hej():<br/>
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
print(f"Kvadraten av 5 är {k}")`}
      />

      <h3>Lokala variabler</h3>
      <p>
        Att tänka på är att alla variabler som skapas inuti en funktion, <strong>bara finns inuti den funktionen</strong>. Det kallas för <em>lokala variabler</em>.
        Om du har en variabel som heter <code>tal</code> utanför funktionen, och en som heter <code>tal</code> inuti funktionen, så blandas de inte ihop!
      </p>

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

      <h2>Ett bättre sätt att läsa in tal (Felhantering)</h2>
      <p>
        Vi har hittills låtit programmen krascha om användaren skriver in fel när vi frågar efter tal (och använder <code>int()</code>). 
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

      <h3>Din uppgift (görs längst ner på sidan)</h3>
      <div className="task-box">
        <p><strong>Tips!</strong><br/>Låt alla uppgifter finnas kvar i kodrutan, men kommentera bort de uppgifter du är färdig med genom att skriva ''' på raden före och efter kodblocket.</p>
        <ol>
          <li>Baklänges</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Skapa metoden <code>skriv_baklänges(meddelande)</code>.
              <ul>
                <li>Metoden ska ta emot en sträng som parameter (<code>meddelande</code>).</li>
                <li>Metoden ska skriva ut parametern meddelande baklänges genom att loopa från sista till första positionen.</li>
              </ul>
            </li>
            <li>Anropa metoden minst tre gånger i ditt program.</li>
          </ul>
          <li>Tal i kvadrat</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Skapa metoden <code>skriv_tal_i_kvadrat_mellan(nedreGräns, övreGräns)</code>. 
              <ul>
                <li>Metoden ska ta emot två heltal som parametrar (<code>nedreGräns</code> och <code>övreGräns</code>).</li>
                <li>För varje tal mellan <code>nedreGräns</code> och <code>övreGräns</code> (inklusive) ska metoden beräkna och skriva ut vad talet är i kvadrat, alltså upphöjt till två.</li>
              </ul>
            </li>
            <li>Om metoden anropas genom att skriva <code>skriv_tal_i_kvadrat_mellan(3, 5)</code> så ska programmet skriva ut:<br />
                <code>Talet 3 i kvadrat är 9.<br />
                      Talet 4 i kvadrat är 16.<br />
                      Talet 5 i kvadrat är 25.
                </code>
            </li>
          </ul>
          <li>Triangel</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Skapa metoden <code>rita_rätvinklig_triangel(sidlängd)</code>. 
              <ul>
                <li>Metoden ska ta emot ett heltal som parameter (<code>sidlängd</code>).</li>
                <li>Metoden ska rita ut en rätvinklig triangel med den sidlängd som anges.</li>
              </ul>
            </li>
            <li>En triangel ritad av denna metod skulle t.ex. kunna se ut så här:<br />
              <code>*<br />
                    **<br />
                    ***<br />
                    ****<br />
                    *****</code>
            </li>
            <li>Anropa metoden minst två gånger i ditt program.</li>
          </ul>
          <li>Addera</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 4".</li>
            <li>Skapa metoden <code>addera(tal1, tal2)</code>.
              <ul>
                <li>Metoden ska ta emot två heltal som parametrar (<code>tal1</code> och <code>tal2</code>).</li>
                <li>Metoden ska returnera summan av talen.</li>
              </ul>
            </li>
            <li>Anropa metoden minst tre gånger i ditt program och skriv ut resultaten.</li>
          </ul>
          <li>Längst ord</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 5".</li>
            <li>Skapa metoden <code>längst(text1, text2)</code>.
              <ul>
                <li>Metoden ska ta emot två strängar som parametrar (<code>text1</code> och <code>text2</code>).</li>
                <li>Metoden ska returnera den sträng av de båda parameterna som är längst.</li>
              </ul>
              <li>Som exempel så ska anropet <code>längst("Hej", "Hejsan")</code> returnera <code>"Hejsan"</code>.</li>
              <li>Om båda argumenten är lika långa så ska metoden returnera det första av dem.</li>
            </li>
            <li>Anropa metoden minst tre gånger där den första är störst en gång, den andra en gång och texterna är lika långa en gång (men olika texter). Skriv ut resultaten.</li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
