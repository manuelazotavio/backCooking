async function truncateTables() {
    await prisma.$executeRaw('TRUNCATE "user", "receita", "favorito", "session" RESTART IDENTITY CASCADE;');
  }
  
  truncateTables();