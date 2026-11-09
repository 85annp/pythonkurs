process.loadEnvFile?.();

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

if (process.env.POSTGRES_URL_NON_POOLING) {
  process.env.POSTGRES_PRISMA_URL = process.env.POSTGRES_URL_NON_POOLING;
}
let dbUrl = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_PRISMA_URL || "";
if (!dbUrl.includes("pool_timeout")) {
  dbUrl += (dbUrl.includes("?") ? "&" : "?") + "pool_timeout=45&connect_timeout=45";
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
});

const modules = [
  { slug: 'komma-igang', title: 'Komma igång', order: 1, description: 'Introduktion till Python och hur du kör kod.' },
  { slug: 'variabler', title: 'Variabler', order: 2, description: 'Lär dig spara och använda data.' },
  { slug: 'operatorer', title: 'Operatorer', order: 3, description: 'Matematik och logik i Python.' },
  { slug: 'villkorssatser', title: 'Villkorssatser', order: 4, description: 'Få ditt program att ta beslut med if/else.' },
  { slug: 'repetitionssatser', title: 'Repetitionssatser', order: 5, description: 'Loopar med for och while.' },
  { slug: 'samlingar', title: 'Samlingar', order: 6, description: 'Listor, lexikon och tupler.' },
  { slug: 'funktioner', title: 'Funktioner', order: 7, description: 'Skapa egna funktioner för att strukturera koden.' },
  { slug: 'speltillampningar-pygame', title: 'Speltillämpningar med pygame', order: 8, description: 'Lär dig grunderna i Pygame lokalt på din egen dator.' },
  { slug: 'spelprojekt-pygame', title: 'Spelprojekt i pygame', order: 9, description: 'Bygg dina egna spel indelade i tre nivåer: lättare, medel och svårare.' },
  { slug: 'matematik-och-ai', title: 'Matematik och AI', order: 10, description: 'Upptäck hur matematik, statistik och algoritmer driver modern artificiell intelligens och maskininlärning med Python.' },
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

  const hashedPassword = await bcrypt.hash('Koda_Python2026!', 10);

  const larare = await prisma.user.upsert({
    where: { username: 'Larare01' },
    update: { password: hashedPassword },
    create: {
      username: 'Larare01',
      password: hashedPassword,
      role: 'TEACHER',
    },
  });

  const elev = await prisma.user.upsert({
    where: { username: 'Elev01' },
    update: { password: hashedPassword },
    create: {
      username: 'Elev01',
      password: hashedPassword,
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
