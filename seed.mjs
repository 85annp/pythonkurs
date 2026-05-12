import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const modules = [
  { slug: 'komma-igang', title: 'Komma igång', order: 1, description: 'Introduktion till Python och hur du kör kod.' },
  { slug: 'variabler', title: 'Variabler', order: 2, description: 'Lär dig spara och använda data.' },
  { slug: 'operatorer', title: 'Operatorer', order: 3, description: 'Matematik och logik i Python.' },
  { slug: 'villkorssatser', title: 'Villkorssatser', order: 4, description: 'Få ditt program att ta beslut med if/else.' },
  { slug: 'repetitionssatser', title: 'Repetitionssatser', order: 5, description: 'Loopar med for och while.' },
  { slug: 'samlingar', title: 'Samlingar', order: 6, description: 'Listor, lexikon och tupler.' },
  { slug: 'metoder', title: 'Metoder', order: 7, description: 'Skapa egna funktioner för att strukturera koden.' },
  { slug: 'speltillampningar-pygame', title: 'Speltillämpningar med pygame', order: 8, description: 'Bygg dina egna spel lokalt med Pygame!' },
];

async function main() {
  for (const m of modules) {
    await prisma.module.upsert({
      where: { slug: m.slug },
      update: m,
      create: m,
    });
  }
  console.log('Database seeded with modules!');

  const hashedPassword = await bcrypt.hash('123456', 10);

  const larare = await prisma.user.upsert({
    where: { username: 'Larare01' },
    update: {},
    create: {
      username: 'Larare01',
      password: hashedPassword,
      name: 'Lärare Test',
      role: 'TEACHER',
    },
  });

  const elev = await prisma.user.upsert({
    where: { username: 'Elev01' },
    update: {},
    create: {
      username: 'Elev01',
      password: hashedPassword,
      name: 'Elev Test',
      role: 'STUDENT',
    },
  });

  console.log(`Test users created: ${larare.username} (TEACHER) and ${elev.username} (STUDENT)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
