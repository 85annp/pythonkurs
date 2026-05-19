import React from "react";

export default function Speltillampningar() {
  return (
    <div className="module-content">
      <h2>Speltillämpningar med pygame</h2>
      <p>
        Nu är det dags att lämna den svarta textrutan och börja bygga riktiga grafiska applikationer och spel!
        För att göra detta kommer vi använda ett bibliotek som heter <strong>pygame</strong>.
      </p>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800 m-0">
          <strong>Viktigt:</strong> Pygame kräver att det öppnas ett eget fönster på din dator. Därför kan du <strong>inte</strong> köra koden direkt här i webbläsaren.
          Kopiera istället koden till <strong>Thonny</strong>  (<a href="https://thonny.org/" target="_blank">https://thonny.org/</a>) och kör den lokalt på din egen dator!
        </p>
      </div>

      <h3>Installera pygame</h3>
      <p>
        Innan du kan använda pygame måste du installera det. Gå in i menyn Verktyg och välj Manage packages... och kontrollera så att pygame är installerad.
      </p>

      <h2>Ditt första fönster</h2>
      <p>
        Ett spel i pygame kräver alltid en <strong>game loop</strong> - en loop (oftast <code>while True</code>) som körs hela tiden spelet är igång.
        Spelet stängs när loopen bryts.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <ul>
          <li><strong>initiera pygame</strong>: Startar pygame-motorn och sätter upp skärmen och klockan.<br />
            <code>pygame.init()<br />
              screen = pygame.display.set_mode((400, 300))<br />
              clock = pygame.time.Clock()</code>
          </li>
          <li><strong>kontrollera händelser</strong>: Kollar om användaren gör något (till exempel klickar på krysset för att stänga fönstret).<br />
            <code>for event in pygame.event.get():</code>
          </li>
          <li><strong>uppdatera objekt</strong>: Färglägg skärmen och rita en vit cirkel.<br />
            <code>screen.fill("darkgreen")<br />
                  pygame.draw.circle(screen, "white", (200, 150), 40)</code>
          </li>
          <li><strong>visa det nya fönstret</strong>: Visar det uppdaterade fönstret på skärmen.
            <code>pygame.display.flip()</code>
          </li>
          <li><strong>avsluta spelet</strong>: Stänger programmet när loopen bryts.<br />
            <code>if event.type == pygame.QUIT:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;exit() # Stänger programmet</code>
          </li>
        </ul>
        <div style={{ flexShrink: 0, width: '200px', textAlign: 'center' }}>
          <img src="/gameloop.png" alt="Illustration av spel-loopen" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </div>


      <p>
        Testa så att det här exemplet fungerar på din dator. Det borde öppna ett fönster med en vit cirkel på en mörkgrön bakgrund. Stäng fönstret när du är klar.
      </p>

      <div className="code-example">
        import pygame<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((400, 300))<br />
        clock = pygame.time.Clock()<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit()  # Stänger programmet<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("darkgreen")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.circle(screen, "white", (200, 150), 40)<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (bilder per sekund)
      </div>

      <div className="task-box">
        <p>Nu kan du göra Uppgift 1 längst ner på sidan.</p>
      </div>

      <h2>Flytta saker och input</h2>
      <p>
        För att flytta på något behöver vi variabler för positionen, <code>x</code> och <code>y</code>.
        Men innan vi börjar flytta saker ska vi lära oss ett proffsknep: <strong>konstanter</strong>.
      </p>
      <p>
        Istället för att skriva talet <code>400</code> på flera olika ställen i din kod, skapar vi en variabel som aldrig ändras, till exempel <code>WIDTH = 400</code>. 
        I Python skriver vi alltid konstanter med STORA BOKSTÄVER högst upp i koden.
      </p>
      <p>
        <strong>Koordinatsystemet i pygame:</strong><br />
        (0, 0) är högst upp i vänstra hörnet. Ökar du <code>y</code>-värdet så åker din figur <em>neråt</em> !
      </p>

      <p>Provkör det här programmet i Thonny. Du ska kunna flytta runt den cyanfärgade spelaren.</p>

      <div className="code-example">
        import pygame<br />
        <br />
        # KONSTANTER<br />
        WIDTH = 500<br />
        HEIGHT = 400<br />
        PLAYER_SIZE = 50<br />
        SPEED = 5<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((WIDTH, HEIGHT))<br />
        clock = pygame.time.Clock()<br />
        <br />
        # Spelarens position (dessa ändras under spelets gång!)<br />
        x = (WIDTH - PLAYER_SIZE) // 2<br />
        y = (HEIGHT - PLAYER_SIZE) // 2<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT: exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Hämta alla nedtryckta tangenter<br />
        &nbsp;&nbsp;&nbsp;&nbsp;keys = pygame.key.get_pressed()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_LEFT]:  x -= SPEED<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_RIGHT]: x += SPEED<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_UP]:    y -= SPEED<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_DOWN]:  y += SPEED<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("black")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.rect(screen, "cyan", (x, y, PLAYER_SIZE, PLAYER_SIZE))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (bilder per sekund)
      </div>

      <div className="task-box">
        <p>Nu kan du göra Uppgift 2 längst ner på sidan.</p>
      </div>


      <h2>Slump och fallande objekt</h2>
      <p>
        För att ett spel inte ska vara exakt likadant varje gång använder vi modulen <code>random</code>. 
        I det här exemplet skapar vi en cirkel som faller ner från toppen av skärmen. Varje gång den åker utanför botten så börjar den om från toppen på en ny slumpad <code>x</code>-position.
      </p>

      <div className="code-example">
        import pygame<br />
        import random<br />
        <br />
        # KONSTANTER<br />
        WIDTH = 500<br />
        HEIGHT = 600<br />
        CIRCLE_RADIUS = 15<br />
        SPEED = 2<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((WIDTH, HEIGHT))<br />
        clock = pygame.time.Clock()<br />
        <br />
        # Startposition för en fallande cirkel<br />
        circle_x = random.randint(CIRCLE_RADIUS, WIDTH - CIRCLE_RADIUS)<br />
        circle_y = -CIRCLE_RADIUS<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT: exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Rörelse nedåt<br />
        &nbsp;&nbsp;&nbsp;&nbsp;circle_y += SPEED<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Om den åker utanför botten, börja om uppe<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if circle_y &gt; HEIGHT:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;circle_y = -CIRCLE_RADIUS<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;circle_x = random.randint(CIRCLE_RADIUS, WIDTH - CIRCLE_RADIUS)<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("midnightblue")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.circle(screen, "white", (circle_x, circle_y), CIRCLE_RADIUS)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (bilder per sekund)
      </div>

      <div className="task-box">
        <p>Nu kan du göra Uppgift 3 längst ner på sidan.</p>
      </div>


      <h2>Kollisioner och rects</h2>
      <p>
        I pygame använder vi objektet <code>Rect</code> (rektangel) för att hantera position och krockar. En <code>Rect</code> är som en osynlig låda som håller koll på var din figur finns.
        Om du har två rektanglar kan pygame enkelt svara på om de överlappar varandra med metoden <code>rect1.colliderect(rect2)</code>. Det blir <code>True</code> om de nuddar varandra!
      </p>

      <div className="code-example">
        import pygame<br />
        import random<br />
        <br />
        # KONSTANTER<br />
        WIDTH = 500<br />
        HEIGHT = 400<br />
        PLAYER_SIZE = 40<br />
        COIN_SIZE = 20<br />
        SPEED = 5<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((WIDTH, HEIGHT))<br />
        clock = pygame.time.Clock()<br />
        <br />
        # Skapa Rect-objekt istället för bara x och y<br />
        player = pygame.Rect((WIDTH - PLAYER_SIZE) // 2, (HEIGHT - PLAYER_SIZE) // 2, PLAYER_SIZE, PLAYER_SIZE)<br />
        coin = pygame.Rect(100, 100, COIN_SIZE, COIN_SIZE)<br />
        score = 0<br />
        font = pygame.font.SysFont("Arial", 24)<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT: exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Styrning (som tidigare, men nu styr vi "player")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;keys = pygame.key.get_pressed()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_RIGHT]: player.x += SPEED<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_LEFT]: player.x -= SPEED<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Kolla krock mellan spelare och mynt!<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if player.colliderect(coin):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Flytta myntet<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coin.x = random.randint(0, WIDTH - COIN_SIZE)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coin.y = random.randint(0, HEIGHT - COIN_SIZE)<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("gray20")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.rect(screen, "blue", player)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.rect(screen, "yellow", coin)<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Rita ut poängen<br />
        &nbsp;&nbsp;&nbsp;&nbsp;text_surface = font.render(f"Poäng: {"{"}score{"}"}", True, "white")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.blit(text_surface, (10, 10))<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (bilder per sekund)
      </div>

      <div className="task-box">
        <p>Nu kan du göra Uppgift 4 längst ner på sidan.</p>
      </div>

      <h2>Bilder och sprites</h2>
      <p>
        Nu byter vi ut de enkla färgade lådorna mot riktiga bilder! Lägg en bildfil i samma mapp som din Python-fil.
      </p>

      <h3>Ladda och rita bilder</h3>
      <ul>
        <li>Ladda in en bild i pygame med <code>img = pygame.image.load("filnamn.png")</code>. Detta gör man en gång INNAN game-loopen.</li>
        <li>För att rita bilden använder man blit (block transfer) med bilden och positionen för övre vänstra hörnet, <code>screen.blit(img, (x, y))</code>.</li>
      </ul>

      <h3>Transparens och storlek</h3>
      <ul>
        <li>Använd <code>img.convert_alpha()</code> när du laddar bilder för att behålla genomskinliga bakgrunder. Gör helst konverteringen innan game-loopen för att undvika prestandaproblem.</li>
        <li>Använd <code>img.transform.scale()</code> för att ändra storleken på bilder. Gör helst skalningen innan game-loopen för att undvika prestandaproblem.</li>
      </ul>

      <div className="code-example">
        import pygame<br />
        <br />
        # KONSTANTER<br />
        WIDTH = 600<br />
        HEIGHT = 400<br />
        PLAYER_SIZE = 64<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((WIDTH, HEIGHT))<br />
        clock = pygame.time.Clock()<br />
        <br />
        # Koden fungerar bara om du har en bildfil player.png i samma mapp!<br />
        player_img = pygame.image.load("player.png").convert_alpha()<br />
        player_img = pygame.transform.scale(player_img, (PLAYER_SIZE, PLAYER_SIZE))<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("midnightblue")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.blit(player_img, ((WIDTH - PLAYER_SIZE) // 2, (HEIGHT - PLAYER_SIZE) // 2))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (bilder per sekund)
      </div>

      <div className="task-box">
        <p>Nu kan du göra Uppgift 5 längst ner på sidan.</p>
      </div>


      <hr />

      <h2>Slutprojekt: Bygg Pong!</h2>
      <p>
        Nu har du allt du behöver för att bygga ett komplett spel! Ditt slutprojekt i kursen är att bygga <strong>Pong</strong>.
      </p>
      <p>Du behöver:</p>
      <ul>
        <li>Två paddlar (en som styrs med W/S, en som styrs med Upp/Ner).</li>
        <li>En boll som rör sig med en x-hastighet och en y-hastighet.</li>
        <li>Kollisioner mot paddlarna som får bollen att vända (multiplicera x-hastigheten med -1).</li>
        <li>Kollisioner mot taket och golvet som får bollen att vända (multiplicera y-hastigheten med -1).</li>
        <li>När bollen åker utanför höger eller vänster kant – ge poäng och återställ bollen till mitten!</li>
      </ul>

      <h2>Slutprojekt: Bygg Snake!</h2>
      <p>
        Nu har du allt du behöver för att bygga ett komplett spel! Ditt slutprojekt i kursen är att bygga <strong>Snake</strong>.
      </p>
      <p>Du behöver:</p>
      <ul>
        <li>En lista av positioner för ormen.<br />
            När ormen rör sig lägger du till ett nytt huvud först i listan och tar bort det sista elementet (svansen).</li>
        <li>När ormens huvud krockar med maten låter du bli att ta bort svansen – då växer ormen!</li>
        <li>En mat som dyker upp på slumpmässiga platser.</li>
        <li>Kollisioner med väggar och själva ormen som avslutar spelet.</li>
        <li>Hanterar styrning så att ormen inte kan vända 180 grader direkt.</li>
      </ul>

      <hr />

      <h3>Dina uppgifter (görs i Thonny och klistras in längst ner på sidan)</h3>
      <div className="task-box">
        <ol>
          <li>Ditt första fönster</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 1".</li>
            <li>Utgå från koden i "Ditt första fönster"
              <ul>
                <li>Ändra fönstret till 800x600.</li>
                <li>Rita en röd rektangel istället för en cirkel (använd pygame.draw.rect).</li>
                <li>Byt bakgrundsfärg till en RGB-färg, t.ex. (50, 50, 200).</li>
              </ul>
            </li>
          </ul>
          <li>Flytta saker och input</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 2".</li>
            <li>Utgå från koden i "Flytta saker och input"
              <ul>
                <li>Skapa en konstant för bakgrundsfärgen, t.ex. <code>BG_COLOR = (20, 20, 20)</code>, och använd den i <code>screen.fill(BG_COLOR)</code>.</li>
                <li>Begränsa rörelsen så att spelaren stannar vid fönstrets kanter (t.ex. <code>if x &lt; 0: x = 0</code>).</li>
                <li>Lägg till en andra spelare (en ny rektangel i en annan färg) som styrs med W, A, S och D. <br />
                    Du behöver skapa helt egna x- och y-variabler för denna spelare!<br />
                    Döp gärna om x och y till player1_x och player1_y och gör samma för den andra spelaren!</li>
              </ul>
            </li>
          </ul>
          <li>Slump och fallande objekt</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 3".</li>
            <li>Utgå från koden i "Slump och fallande objekt"
              <ul>
                <li>Gör så att cirkeln faller snabbare genom att ändra konstanten.</li>
                <li>Skapa en variabel för cirkelns färg, t.ex. <code>CIRCLE_COLOR = (255, 0, 0)</code>. 
                    Ge den ett nytt slumpat värde varje gång cirkeln skapas.</li>
                <li>Låt cirkeln falla snett genom att lägga till en variabel för horisontell hastighet. 
                    Den ska ha samma riktning hela vägen ner tills den börjar om (så att den inte "wobblar" fram och tillbaka genom att ändra riktning i varje varv i game-loopen).</li>
              </ul>
            </li>
          </ul>
          <li>Kollisioner och rects</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 4".</li>
            <li>Utgå från koden i "Kollisioner och rects"
              <ul>
                <li>Spelaren kan bara gå i sidled. Lägg in så att det går att flytta även i höjdled.</li>
                <li>Variabeln score finns redan i koden. Din uppgift är att se till att poängen faktiskt ökar med 1 varje gång spelaren och myntet krockar (inuti colliderect-blocket).</li>
                <li>Hindra spelaren från att åka utanför fönstret! Använd if-satser för att se till att <code>player.x</code> och <code>player.y</code> alltid håller sig mellan <code>0</code> och <code>WIDTH</code>/<code>HEIGHT</code>.</li>
                <li>Skapa en röd "fiende"-rektangel. Skapa en funktion, t.ex. reset_game(), som nollställer poängen och flyttar tillbaka spelaren till mitten. Anropa denna funktion när spelaren krockar med fienden.</li>
              </ul>
            </li>
          </ul>
          <li>Bilder och sprites</li>
          <ul>
            <li>Skriv en kommentar "Uppgift 5".</li>
            <li>Utgå från koden i "Bilder och sprites"
              <ul>
                <li>Ladda bilden: img = pygame.image.load("min_bild.png").convert_alpha()</li>
                <li>Ändra storlek: img = pygame.transform.scale(img, (bredd, höjd))</li>
                <li>Rita bilden: screen.blit(img, (x, y))</li>
                <li>Hitta en liten bild (PNG) på nätet och lägg i samma mapp som pygamekoden.</li>
                <li>Ladda in bilden och få den att följa muspekaren.</li>
                <li>Lägg in en bakgrundsbild som täcker hela fönstret.</li>
              </ul>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
