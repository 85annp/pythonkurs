import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

const modules = [
  { slug: 'komma-igang', title: 'Komma igång', order: 1, description: 'Introduktion till Python och hur du kör kod.' },
  { slug: 'variabler', title: 'Variabler', order: 2, description: 'Lär dig spara och använda data.' },
  { slug: 'operatorer', title: 'Operatorer', order: 3, description: 'Matematik och logik i Python.' },
  { slug: 'villkorssatser', title: 'Villkorssatser', order: 4, description: 'Få ditt program att ta beslut med if/else.' },
  { slug: 'repetitionssatser', title: 'Repetitionssatser', order: 5, description: 'Loopar med for och while.' },
  { slug: 'samlingar', title: 'Samlingar', order: 6, description: 'Listor, lexikon och tupler.' },
  { slug: 'funktioner', title: 'Funktioner', order: 7, description: 'Skapa egna funktioner för att strukturera koden.' },
  { slug: 'speltillampningar-pygame', title: 'Speltillämpningar med pygame', order: 8, description: 'Bygg dina egna spel lokalt med Pygame!' },
];

export async function GET() {
  try {
    // Delete the old "metoder" module if it exists
    try {
      await prisma.module.deleteMany({
        where: { slug: 'metoder' }
      });
    } catch (e) {
      // Ignore if it doesn't exist
    }

    for (const m of modules) {
      await prisma.module.upsert({
        where: { slug: m.slug },
        update: m,
        create: m,
      });
    }

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

    return NextResponse.json({ 
      success: true, 
      message: `Database seeded successfully. Created/verified ${larare.username} and ${elev.username}` 
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
