async function truncateTables() {
    await prisma.$executeRaw('TRUNCATE "user", "recipe", "favorite", "session" RESTART IDENTITY CASCADE;');
  }
  
  truncateTables();