import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.tarefa.createMany({
    data: [
      {
        prato: 'Macarronada',
        descricao: 'Cozinhar o macarrao;Preparar o molho',
        status: 'set_menu',
      },
      {
        prato: 'Alcatra na manteiga',
        descricao:
          'Porcionar a carne; Grelhar a carne na frigideira com manteiga',
        status: 'set_menu',
      },
      {
        prato: 'Sorvete de morango',
        descricao:
          'Fatiar os morangos; Bater a mistura para sorvete; Adicionar os morangos; Congelar;',
        status: 'show_time',
      },
      {
        prato: 'Bruschetta italiana',
        descricao:
          'Fatiar o pao; Misturar manjericao, queijo brie e geleia de damasco; Montagem',
        status: 'delivery',
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
