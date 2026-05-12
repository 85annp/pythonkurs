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
          Kopiera istället koden till <strong>Thonny</strong> och kör den lokalt på din egen dator!
        </p>
      </div>

      <h3>Installera pygame</h3>
      <p>
        Innan du kan använda pygame måste du installera det. Gå in i menyn Verktyg och välj Manage packages... och kontrollera så att pygame är installerad.
      </p>

      <h2>Ditt första fönster</h2>
      <p>
        Ett spel i pygame kräver alltid en <strong>game Loop</strong> - en loop (oftast <code>while True</code>) som körs hela tiden spelet är igång. 
        Spelet stängs när loopen bryts.
      </p>
      <ul>
        <li><strong>init()</strong>: Startar pygame-motorn.</li>
        <li><strong>Event Loop</strong>: Kollar om användaren gör något (till exempel klickar på krysset för att stänga fönstret).</li>
        <li><strong>Fill & Flip</strong>: Färglägg skärmen och visa ("flip") det du har ritat i det här varvet.</li>
      </ul>

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
        &nbsp;&nbsp;&nbsp;&nbsp;clock.tick(60) # Kör loopen i 60 FPS (Bilder per sekund)
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-blue-800 mt-0">Övningar:</h4>
        <ul className="text-sm text-blue-900 m-0">
          <li>Ändra fönstret till 800x600.</li>
          <li>Rita en röd rektangel istället för en cirkel (använd <code>pygame.draw.rect(screen, "red", (x, y, bredd, höjd))</code>).</li>
          <li>Byt bakgrundsfärg till en RGB-färg, t.ex. <code>(50, 50, 200)</code> istället för "darkgreen".</li>
        </ul>
      </div>

      <h2>Flytta saker och input</h2>
      <p>
        För att flytta på något behöver vi variabler för positionen (<strong>x</strong> och <strong>y</strong>). 
        Men innan vi börjar flytta saker ska vi lära oss ett proffsknep: <strong>Konstanter</strong>.
      </p>
      <p>
        Istället för att skriva talet <code>400</code> på flera olika ställen i din kod, skapar vi en variabel som aldrig ändras, till exempel <code>WIDTH = 400</code>. I Python skriver vi alltid konstanter med STORA BOKSTÄVER högst upp i koden.
      </p>
      <p>
        <strong>Koordinatsystemet i pygame:</strong><br />
        (0, 0) är högst upp i vänstra hörnet. Ökar du Y-värdet så åker din figur <em>neråt</em>!
      </p>

      <div className="code-example">
        import pygame<br />
        <br />
        # KONSTANTER<br />
        WIDTH = 400<br />
        HEIGHT = 400<br />
        PLAYER_SIZE = 50<br />
        SPEED = 5<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((WIDTH, HEIGHT))<br />
        <br />
        # Spelarens position (dessa ändras under spelets gång!)<br />
        x = WIDTH // 2<br />
        y = HEIGHT // 2<br />
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
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-blue-800 mt-0">Övningar:</h4>
        <ul className="text-sm text-blue-900 m-0">
          <li>Begränsa rörelsen så att spelaren stannar vid fönstrets kanter (t.ex. <code>if x &lt; 0: x = 0</code>).</li>
          <li>Lägg till en andra spelare (en ny rektangel i en annan färg) som styrs med W, A, S och D. Du behöver skapa helt egna x- och y-variabler för denna spelare!</li>
        </ul>
      </div>

      <h2>Slump och fallande objekt</h2>
      <p>
        För att ett spel inte ska vara exakt likadant varje gång använder vi modulen <code>random</code>.
      </p>

      <div className="code-example">
        import pygame<br />
        import random<br />
        <br />
        pygame.init()<br />
        screen = pygame.display.set_mode((400, 400))<br />
        <br />
        # Startposition för en fallande cirkel<br />
        circle_x = random.randint(0, 400)<br />
        circle_y = -50<br />
        fall_speed = 3<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT: exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Rörelse nedåt<br />
        &nbsp;&nbsp;&nbsp;&nbsp;circle_y += fall_speed<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Om den åker utanför botten, börja om uppe<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if circle_y &gt; 400:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;circle_y = -50<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;circle_x = random.randint(0, 400)<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;screen.fill("midnightblue")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.draw.circle(screen, "white", (circle_x, circle_y), 15)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.flip()
      </div>

      <h2>Kollisioner och rects</h2>
      <p>
        I pygame använder vi objektet <strong>Rect</strong> (rektangel) för att hantera position och krockar. En Rect är som en osynlig låda som håller koll på var din figur finns.
        Om du har två rektanglar kan pygame enkelt svara på om de överlappar varandra med metoden <code>rect1.colliderect(rect2)</code>. Det blir <strong>True</strong> om de nuddar varandra!
      </p>

      <div className="code-example">
        import pygame, random<br />
        pygame.init()<br />
        screen = pygame.display.set_mode((400, 400))<br />
        <br />
        # Skapa Rect-objekt istället för bara x och y<br />
        player = pygame.Rect(200, 200, 40, 40)<br />
        coin = pygame.Rect(100, 100, 20, 20)<br />
        score = 0<br />
        font = pygame.font.SysFont("Arial", 24)<br />
        <br />
        while True:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if event.type == pygame.QUIT: exit()<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Styrning (som tidigare, men nu styr vi "player")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;keys = pygame.key.get_pressed()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_RIGHT]: player.x += 5<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if keys[pygame.K_LEFT]: player.x -= 5<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;# Kolla krock mellan spelare och mynt!<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if player.colliderect(coin):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += 1<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Flytta myntet<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coin.x = random.randint(0, 380)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coin.y = random.randint(0, 380)<br />
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
      </div>

      <h2>Bilder och sprites</h2>
      <p>
        Nu byter vi ut de enkla färgade lådorna mot riktiga bilder! Lägg en bildfil i samma mapp som din Python-fil.
      </p>
      <ul>
        <li><strong>Ladda bilden:</strong> <code>img = pygame.image.load("min_bild.png").convert_alpha()</code></li>
        <li><strong>Ändra storlek:</strong> <code>img = pygame.transform.scale(img, (bredd, höjd))</code></li>
        <li><strong>Rita bilden:</strong> <code>screen.blit(img, (x, y))</code></li>
      </ul>

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

      <hr />

      <h3>Din uppgift (görs längst ner på sidan)</h3>
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
                <li>För alla andra kast, skriv "Du rullade en x:a" där x är det kast du fick.</li>
              </ul>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
