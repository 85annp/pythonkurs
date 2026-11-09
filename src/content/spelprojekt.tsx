import React from "react";

export default function Spelprojekt() {
  return (
    <div className="module-content">
      <h2>Spelprojekt i pygame</h2>
      <p>
        Nu är det dags att sätta ihop alla dina kunskaper och skapa ett eget komplett datorspel!
        Här hittar du <strong>10 olika spelprojekt</strong> indelade i tre svårighetsnivåer.
        Välj ett projekt som passar dina ambitioner och förkunskaper.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800 m-0">
          <strong>Viktigt:</strong> Bygg och provkör ditt spel lokalt i <strong>Thonny</strong> (<a href="https://thonny.org/" target="_blank" rel="noopener noreferrer">https://thonny.org/</a>).
          När spelet är klart och uppfyller alla krav klistrar du in koden i fältet till höger och klickar på <em>"Markera som klar"</em> så att din lärare kan granska och godkänna det!
        </p>
      </div>

      <div className="task-box" style={{ borderColor: 'var(--primary)', backgroundColor: '#eff6ff' }}>
        <h3 style={{ color: '#1e40af', marginTop: 0 }}>⭐ Gemensamma krav på alla projekt</h3>
        <p style={{ color: '#1e3a8a', marginBottom: '0.75rem' }}>
          Oavsett vilket spelprojekt du väljer <strong>måste</strong> ditt spel innehålla följande fyra delar:
        </p>
        <ul style={{ color: '#1e3a8a' }}>
          <li>
            <strong>1. Poängräkning som visas på skärmen:</strong><br />
            Spelarens poäng (eller liv/tid) ska kontinuerligt renderas i spelfönstret med hjälp av <code>pygame.font</code> (t.ex. <code>font.render()</code> och <code>screen.blit()</code>).
          </li>
          <li>
            <strong>2. Minst en egen funktion med parametrar:</strong><br />
            Dela upp koden med egna funktioner som tar emot argument (t.ex. en funktion som ritar text på skärmen, återställer spelet eller kontrollerar en kollision).
          </li>
          <li>
            <strong>3. Start- och game over-skärm:</strong><br />
            Spelet ska ha olika spellägen (game states): en startskärm (där spelaren trycker t.ex. MELLANSLAG för att börja), själva spelet, och en game over-skärm med resultat och möjlighet att spela igen.
          </li>
          <li>
            <strong>4. Kommentarer i koden:</strong><br />
            Beskriv tydligt med kommentarer (<code>#</code>) vad de olika delarna av din kod gör, vilka variabler som används och hur funktionerna fungerar.
          </li>
        </ul>
      </div>

      <h2>Proffstips: Bygg en start- och game over-skärm</h2>
      <p>
        Ett smidigt sätt att hantera start- och game over-skärmar i Pygame är att använda en variabel för <strong>speltillstånd</strong> (state). 
        Beroende på tillståndet ritar du ut olika saker och lyssnar på olika tangenter:
      </p>

      <div className="code-example">
        import pygame<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((600, 400))<br />
        clock = pygame.time.Clock()<br />
        font = pygame.font.SysFont("Arial", 28)<br />
        <br />
        # Egen funktion med parametrar som kravet efterfrågar!<br />
        def draw_text(text, x, y, color="white"):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;surface = font.render(text, True, color)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.blit(surface, (x, y))<br />
        <br />
        # Speltillstånd: "START", "PLAYING" eller "GAME_OVER"<br />
        game_state = "START"<br />
        score = 0<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.KEYDOWN:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if game_state == "START" and event.key == pygame.K_SPACE:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score = 0<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game_state = "PLAYING"<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif game_state == "GAME_OVER" and event.key == pygame.K_SPACE:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score = 0<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game_state = "PLAYING"<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("black")<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;if game_state == "START":<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text("TITEL PÅ DITT SPEL", 170, 150, "yellow")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text("Tryck MELLANSLAG för att starta", 120, 210, "white")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;elif game_state == "PLAYING":<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Här körs din vanliga spellogik...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text(f"Poäng: &#123;score&#125;", 10, 10, "white")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;elif game_state == "GAME_OVER":<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text("GAME OVER!", 220, 150, "red")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text(f"Slutpoäng: &#123;score&#125;", 220, 190, "white")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draw_text("Tryck MELLANSLAG för att spela igen", 110, 240, "gray")<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60)<br />
      </div>

      <hr style={{ margin: '2.5rem 0' }} />

      {/* ========================================================================= */}
      {/* NIVÅ 1: LÄTTARE */}
      {/* ========================================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{ backgroundColor: '#22c55e', color: 'white', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontWeight: 'bold', fontSize: '0.9rem' }}>
          Nivå 1: Lättare
        </span>
        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Passar bra som nybörjarprojekt</span>
      </div>

      <h2>Spelprojekt: Catch the Falling Objects!</h2>
      <p>
        Ett klassiskt arkadspel där spelaren styr en korg längst ner på skärmen för att fånga fallande föremål.
      </p>
      <ul>
        <li><strong>Styrning:</strong> En korg (rektangel eller sprite) som styrs med vänster och höger piltangent (eller A och D).</li>
        <li><strong>Fallande objekt:</strong> Objekt som dyker upp längst upp på skärmen på slumpmässiga x-positioner och faller nedåt med olika hastigheter.</li>
        <li><strong>Bra vs dåliga objekt:</strong> Fånga bra objekt (t.ex. mynt, äpplen eller stjärnor) för att få poäng. Undvik dåliga objekt (t.ex. bomber eller stenar) som drar av liv!</li>
        <li><strong>Ökad svårighetsgrad:</strong> För varje 10 poäng ökar fallhastigheten så att spelet blir mer utmanande ju längre du klarar dig.</li>
        <li><strong>Game Over:</strong> När spelaren har 0 liv kvar avslutas rundan och slutresultatet visas.</li>
      </ul>

      <h2>Spelprojekt: Tic-Tac-Toe (3 i rad)!</h2>
      <p>
        Bygg det klassiska strategispelet "tre i rad" för två spelare på samma dator med ett grafiskt gränssnitt i Pygame!
      </p>
      <ul>
        <li><strong>Spelplan:</strong> Ett 3x3-rutnät representerat som en lista av listor i Python (t.ex. en 2D-lista med tomma strängar, <code>"X"</code> och <code>"O"</code>).</li>
        <li><strong>Musklick:</strong> Spelarna turas om att klicka i rutorna. Programmet räknar ut vilken rad och kolumn som klickats på baserat på musens position (<code>mouse_x // RUTA_STORLEK</code> och <code>mouse_y // RUTA_STORLEK</code>).</li>
        <li><strong>Vinstkontroll:</strong> En funktion med parametrar som kontrollerar alla 3 rader, 3 kolumner och de 2 diagonalerna för att se om någon har tre i rad.</li>
        <li><strong>Oavgjort & omstart:</strong> Upptäck om alla rutor är fyllda utan vinnare (oavgjort). Visa en "Spela igen"-knapp eller tangent för att rensa spelplanen.</li>
        <li><strong>Extra utmaning:</strong> Bygg en enkel dator-motståndare som automatiskt väljer en slumpmässig ledig ruta när det är dess tur!</li>
      </ul>

      <hr style={{ margin: '2.5rem 0' }} />

      {/* ========================================================================= */}
      {/* NIVÅ 2: MEDEL */}
      {/* ========================================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{ backgroundColor: '#eab308', color: 'white', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontWeight: 'bold', fontSize: '0.9rem' }}>
          Nivå 2: Medel
        </span>
        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Kombinerar hastigheter, listor och studsar</span>
      </div>

      <h2>Spelprojekt: Pong!</h2>
      <p>
        Skapa historiens mest ikoniska arkadspel för en eller två spelare!
      </p>
      <ul>
        <li><strong>Två paddlar:</strong> Vänster paddel styrs med <code>W</code> och <code>S</code>, höger paddel styrs med <code>Uppåtpil</code> och <code>Nedåtpil</code> (eller styrs av datorn).</li>
        <li><strong>Boll i rörelse:</strong> En boll som rör sig med både en <code>x</code>-hastighet och en <code>y</code>-hastighet.</li>
        <li><strong>Studs mot paddlar:</strong> När bollen kolliderar med en paddel vänder den i x-led (multiplicera <code>x</code>-hastigheten med <code>-1</code>).</li>
        <li><strong>Studs mot tak och golv:</strong> När bollen nuddar över- eller underkant vänder den i y-led (multiplicera <code>y</code>-hastigheten med <code>-1</code>).</li>
        <li><strong>Poäng & reset:</strong> När bollen åker utanför vänster eller höger kant tilldelas motsatt spelare poäng, och bollen återställs till skärmens mitt med riktning mot förloraren.</li>
        <li><strong>Extra utmaning:</strong> Öka bollens hastighet en aning för varje paddelträff så att varje duell blir mer och mer intensiv!</li>
      </ul>

      <h2>Spelprojekt: Breakout!</h2>
      <p>
        Styr en paddel och studsa en boll för att slå sönder en mur av färgglada tegelstenar!
      </p>
      <ul>
        <li><strong>Paddel & boll:</strong> En paddel som styrs med vänster/höger piltangent och en boll som rör sig med en x- och en y-hastighet.</li>
        <li><strong>Tegelstensmur:</strong> En lista med rektanglar (<code>pygame.Rect</code>) som ritas upp i prydliga rader längst upp på skärmen.</li>
        <li><strong>Kollisioner med tegelstenar:</strong> När bollen träffar en tegelsten tas rektangeln bort ur listan, bollen vänder i y-led (multiplicera y-hastigheten med <code>-1</code>) och spelaren får poäng.</li>
        <li><strong>Väggar & paddel:</strong> Bollen studsar mot sidoväggarna, taket och spelarens paddel.</li>
        <li><strong>Liv & vinstvillkor:</strong> Om bollen passerar nedanför paddeln förlorar du ett liv och bollen startar om. Spelet är slut när du har 0 liv (Game Over) eller när alla tegelstenar är krossade (Vinst!).</li>
      </ul>

      <h2>Spelprojekt: Flappy Bird!</h2>
      <p>
        Ett beroendeframkallande spel där du navigerar en flaxande fågel genom smala röröppningar.
      </p>
      <ul>
        <li><strong>Gravitation & hopp:</strong> Fågeln rör sig i y-led och har en vertikal hastighet som ökar varje bildruta (gravitation). När spelaren trycker på <code>MELLANSLAG</code> ges fågeln en negativ y-hastighet (ett uppåt-hopp).</li>
        <li><strong>Hinder (rör):</strong> Rör som rör sig från höger mot vänster. Varje hinder består av ett övre och ett undre rör med en passage/lucka på slumpmässig höjd.</li>
        <li><strong>Lista med rör:</strong> Rör sparas i en lista. När ett rör lämnat skärmens vänsterkant tas det bort, och nya rör skapas med jämna mellanrum.</li>
        <li><strong>Poäng:</strong> Spelaren får 1 poäng varje gång fågeln lyckas passera ett rörpar.</li>
        <li><strong>Kollisioner:</strong> Spelet tar slut om fågeln kolliderar med ett rör, slår i marken eller flyger ovanför skärmens tak.</li>
      </ul>

      <h2>Spelprojekt: Memory!</h2>
      <p>
        Skapa ett klassiskt minnesspel där spelaren ska vända fram matchande par av kort.
      </p>
      <ul>
        <li><strong>Kortlek & rutnät:</strong> Ett rutnät med kort (t.ex. 4x4 rutor för 8 par) representerat som en lista av listor. Varje kort har en dold färg eller symbol.</li>
        <li><strong>Blanda korten:</strong> Par skapas och blandas slumpmässigt med <code>random.shuffle()</code> när spelet startar.</li>
        <li><strong>Vända kort:</strong> Spelaren klickar på ett kort för att vända upp det. När två kort är uppvända kontrolleras om de matchar:
          <ul>
            <li>Om de är <em>lika</em>: Korten förblir uppvända och spelaren får poäng!</li>
            <li>Om de är <em>olika</em>: Korten visas en kort stund och vänds sedan automatiskt tillbaka med baksidan upp.</li>
          </ul>
        </li>
        <li><strong>Statistik & vinst:</strong> Räkna antal försök / drag som spelaren gjort. Spelet är vunnet när alla par har hittats!</li>
      </ul>

      <hr style={{ margin: '2.5rem 0' }} />

      {/* ========================================================================= */}
      {/* NIVÅ 3: SVÅRARE */}
      {/* ========================================================================= */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontWeight: 'bold', fontSize: '0.9rem' }}>
          Nivå 3: Svårare
        </span>
        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>För dig som vill bemästra mer avancerad spellogik, fysik och matematik</span>
      </div>

      <h2>Spelprojekt: Snake!</h2>
      <p>
        Den odödliga mobilspelet! Styr en växande orm som samlar mat på skärmen utan att krocka med väggar eller sig själv.
      </p>
      <ul>
        <li><strong>Ormens kropp som lista:</strong> Ormen sparas som en lista av koordinater <code>(x, y)</code>. Varje steg läggs ett nytt huvud till först i listan, och det sista elementet (svansen) tas bort.</li>
        <li><strong>Växande orm:</strong> När ormens huvud krockar med maten tas svansen <em>inte</em> bort det varvet – då blir ormen en ruta längre och du får poäng!</li>
        <li><strong>Slumpad mat:</strong> Mat placeras ut på slumpmässiga koordinater i rutnätet. Kontrollera så att maten inte spawnar direkt ovanpå ormens kropp!</li>
        <li><strong>Kollisioner:</strong> Spelet är slut om huvudet åker in i en vägg eller krockar med någon del av ormens egen svans.</li>
        <li><strong>Smart styrning:</strong> Se till att spelaren inte kan råka vända 180 grader direkt bakåt in i sin egen hals (om ormen rör sig åt höger ska den inte kunna svänga direkt till vänster).</li>
      </ul>

      <h2>Spelprojekt: Space Invaders!</h2>
      <p>
        Försvara jorden mot invaderande rymdmonster i detta ikoniska arkadspel.
      </p>
      <ul>
        <li><strong>Spelarskepp:</strong> Ett skepp som styrs i sidled med piltangenterna och avfyrar laserskott uppåt med <code>MELLANSLAG</code>.</li>
        <li><strong>Skott-lista:</strong> En lista med aktiva skott (rektanglar) som rör sig uppåt och tas bort när de åker utanför skärmen.</li>
        <li><strong>Fiende-armé:</strong> En flotta av fiender som rör sig synkroniserat i sidled. När någon fiende når skärmens ytterkant byter hela flottan riktning och sänker sig ett steg nedåt mot spelaren!</li>
        <li><strong>Kollisioner:</strong> När ett skott träffar en fiende tas både skottet och fienden bort ur sina respektive listor och spelaren tilldelas poäng.</li>
        <li><strong>Slutvillkor:</strong> Spelet är förlorat om en fiende hinner nå ner till skeppets höjd. Spelaren vinner när alla fiender är besegrade!</li>
        <li><strong>Extra utmaning:</strong> Låt fienderna slumpmässigt släppa bomber nedåt som spelaren måste undvika!</li>
      </ul>

      <h2>Spelprojekt: Asteroids (förenklad)!</h2>
      <p>
        Flyg ett rymdskepp i tyngdlös rymd, rotera med precision och spräng asteroider till grus!
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <p className="text-sm text-blue-900 m-0">
          <strong>Matematik-koppling:</strong> Här får du använda trigonometri! Importera <code>import math</code> för att räkna ut skeppets rörelse utifrån dess rotationsvinkel:
          <br />
          <code>dx = math.cos(math.radians(vinkel)) * hastighet</code><br />
          <code>dy = -math.sin(math.radians(vinkel)) * hastighet</code>
        </p>
      </div>
      <ul>
        <li><strong>Rotation & acceleration:</strong> Skeppet kan roteras åt vänster och höger med piltangenterna. När spelaren trycker på <code>Uppåtpil</code> accelererar skeppet framåt i den riktning fören pekar.</li>
        <li><strong>Screen wrap:</strong> Både skeppet och asteroiderna "åker runt skärmen" – om ett objekt åker ut genom vänster kant dyker det omedelbart upp vid höger kant, och tvärtom!</li>
        <li><strong>Skjutning & delning:</strong> Spelaren kan skjuta skott i skeppets nosriktning. När ett skott träffar en stor asteroid tas den bort och delas i två mindre asteroider med högre hastighet. När de minsta asteroiderna träffas försvinner de helt och ger poäng.</li>
        <li><strong>Game Over:</strong> Om skeppet krockar med en asteroid förlorar spelaren ett liv.</li>
      </ul>

      <h2>Spelprojekt: Bygg ett Plattformsspel!</h2>
      <p>
        Bygg grunden till ett Mario-liknande plattformsspel med gravitation, plattformar och myntsamlande.
      </p>
      <ul>
        <li><strong>Spelarfysik:</strong> Spelaren påverkas av gravitation (konstant ökande fallhastighet). När spelaren står på en plattform nollställs fallhastigheten. Spelaren kan springa i sidled och hoppa med <code>MELLANSLAG</code> eller <code>Uppåtpil</code> (men endast när spelaren står på fast mark!).</li>
        <li><strong>Plattformar:</strong> En lista med rektanglar (<code>pygame.Rect</code>) på olika höjder som spelaren kan hoppa mellan och landa uppepå.</li>
        <li><strong>Kollisionshantering:</strong> Kontrollera att spelaren landar uppepå plattformen (justera spelarens fötter till plattformens ovankant med <code>player.bottom = platform.top</code> när spelaren faller).</li>
        <li><strong>Mynt & Mål:</strong> Placera ut mynt att samla in (som ger poäng och försvinner vid beröring) och en målflagga som tar spelaren till vinstskärmen!</li>
        <li><strong>Extra utmaning:</strong> Bygg banan från en textkarta (tilemap) med en lista av strängar, där exempelvis <code>"#"</code> ritar ut en markblocksplattform, <code>"C"</code> skapar ett mynt och <code>"F"</code> skapar målflaggan!</li>
      </ul>

      <hr style={{ margin: '2.5rem 0' }} />

      <h2>Inlämning & Checklist</h2>
      <div className="task-box">
        <h3>📋 Checklista innan inlämning</h3>
        <p>Innan du lämnar in koden till din lärare, kontrollera att ditt spel uppfyller alla krav:</p>
        <ol>
          <li>Ditt spel fungerar att starta och köra lokalt i Thonny utan felmeddelanden.</li>
          <li>Du har en tydlig poängräkning som visas grafiskt på skärmen.</li>
          <li>Du har skapat minst en egen funktion med parametrar och använt den i programmet.</li>
          <li>Du har både en startskärm och en fungerande game over-skärm.</li>
          <li>Din kod är välkommenterad med förklarande kommentarer (<code>#</code>).</li>
        </ol>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Klistra in hela din Python-kod i redigeraren till höger och klicka på "Markera som klar" när du är färdig!
        </p>
      </div>
    </div>
  );
}
