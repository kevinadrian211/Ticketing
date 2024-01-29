import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Seed Events
  const event1 = await prisma.event.create({
    data: {
      title: 'Concert',
      date: new Date('2024-02-01T20:00:00Z'),
      venue: 'Music Hall',
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'Movie Night',
      date: new Date('2024-02-15T18:30:00Z'),
      venue: 'Cinema Paradise',
    },
  });

  // Seed Tickets
  await prisma.ticket.createMany({
    data: [
      {
        eventId: event1.id,
        type: 'VIP',
        price: 100.0,
      },
      {
        eventId: event1.id,
        type: 'General',
        price: 50.0,
      },
      {
        eventId: event2.id,
        type: 'Regular',
        price: 10.0,
      },
    ],
  });

  // Seed Users
  await prisma.user.createMany({
    data: [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'hashed_password',
      },
      {
        username: 'jane_doe',
        email: 'jane@example.com',
        password: 'hashed_password',
      },
    ],
  });

  console.log('Seed data inserted successfully');
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
