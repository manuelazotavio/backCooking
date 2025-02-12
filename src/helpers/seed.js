import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  
  const userId = 3; 
  const userExists = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExists) {
    console.log(`Usuário com ID ${userId} não encontrado.`);
    return;
  }

  const recipes = [
    {
      name: "Bolo de Chocolate",
      rating: 5,
      image: "https://recipesblob.oetker.com.br/assets/e4907609f7e14c7ca1c9d68b5149499a/1272x764/bolo-de-chocolate-com-cobertura.webp",
      portions: "10 porções",
      userId: userId,
      description: "Bolo de chocolate delicioso e fofinho, perfeito para qualquer ocasião.",
      time: "40 minutos",
      instruction: "Misture os ingredientes e asse a 180°C por 30 minutos.",
      ingredients: "Farinha de trigo, açúcar, cacau em pó, ovos, leite, fermento em pó",
    },
    {
      name: "Pão de Queijo",
      rating: 4,
      image: "https://moinhoglobo.com.br/wp-content/uploads/2016/03/44-p%C3%A3o-de-queijo.jpg",
      portions: "20 pães",
      userId: userId,
      description: "Pão de queijo mineiro, crocante por fora e macio por dentro.",
      time: "30 minutos",
      instruction: "Misture todos os ingredientes e asse a 200°C por 20 minutos.",
      ingredients: "Polvilho doce, queijo minas, leite, ovos, manteiga",
    },
    {
      name: "Feijoada",
      rating: 5,
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/C7263LFMLVEUHARXGNOZBW4JF4.png",
      portions: "6 porções",
      userId: userId,
      description: "Feijoada tradicional brasileira, com feijão preto e carnes variadas.",
      time: "3 horas",
      instruction: "Cozinhe as carnes e o feijão até ficarem macios e sirva com arroz.",
      ingredients: "Feijão preto, carne de porco, linguiça, arroz, couve",
    },
  ];

  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe
    });
  }

  console.log("Receitas inseridas com sucesso!");
};


main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
