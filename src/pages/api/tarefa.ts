import type { NextApiRequest, NextApiResponse } from 'next'
import { Status } from '../../enums/Status'
import { prisma } from '../../server/db/client'

const tarefa = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const tarefas = await prisma.tarefa.findMany()
    res.status(200).json(tarefas)
  } else if (req.method === 'POST') {
    const { id, descricao } = req.body
    const tarefaBd = await prisma.tarefa.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    const novaDescricao = tarefaBd?.descricao + ';' + descricao

    const tarefa = await prisma.tarefa.update({
      where: {
        id: parseInt(id),
      },
      data: {
        descricao: novaDescricao,
      },
    })
    res.status(200).json(tarefa)
  } else if (req.method === 'PATCH') {
    const { id, status } = req.body
    const tarefa = await prisma.tarefa.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    })
    res.status(200).json(tarefa)
  }
}
export default tarefa
