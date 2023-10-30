import { PrismaClient } from "@prisma/client";

const undoPrisma = new PrismaClient();

async function undoSeed() {
  try {
    await undoPrisma.category.deleteMany({});
  } catch (error) {
    console.error("Erro ao desfazer o seed:", error);
  } finally {
    await undoPrisma.$disconnect();
  }
}

undoSeed().then(() => {
  console.log("Seed desfeito com sucesso.");
});
