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

  const receitas = [
    {
      name: "Bolo de Chocolate",
      avaliacao: 5,
      imagem: "https://recipesblob.oetker.com.br/assets/e4907609f7e14c7ca1c9d68b5149499a/1272x764/bolo-de-chocolate-com-cobertura.webp",
      porcoes: "10 porções",
      userId: userId,
      descricao: "Bolo de chocolate delicioso e fofinho, perfeito para qualquer ocasião.",
      tempo: "40 minutos",
      instrucao: "Misture os ingredientes e asse a 180°C por 30 minutos.",
      ingredientes: "Farinha de trigo, açúcar, cacau em pó, ovos, leite, fermento em pó",
    },
    {
      name: "Pão de Queijo",
      avaliacao: 4,
      imagem: "https://moinhoglobo.com.br/wp-content/uploads/2016/03/44-p%C3%A3o-de-queijo.jpg",
      porcoes: "20 pães",
      userId: userId,
      descricao: "Pão de queijo mineiro, crocante por fora e macio por dentro.",
      tempo: "30 minutos",
      instrucao: "Misture todos os ingredientes e asse a 200°C por 20 minutos.",
      ingredientes: "Polvilho doce, queijo minas, leite, ovos, manteiga",
    },
    {
      name: "Feijoada",
      avaliacao: 5,
      imagem: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/C7263LFMLVEUHARXGNOZBW4JF4.png",
      porcoes: "6 porções",
      userId: userId,
      descricao: "Feijoada tradicional brasileira, com feijão preto e carnes variadas.",
      tempo: "3 horas",
      instrucao: "Cozinhe as carnes e o feijão até ficarem macios e sirva com arroz.",
      ingredientes: "Feijão preto, carne de porco, linguiça, arroz, couve",
    },
  ];

  for (const receita of receitas) {
    await prisma.receita.create({
      data: receita
    });
  }

  console.log("Receitas inseridas com sucesso!");
};

// Chama a função principal
main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
