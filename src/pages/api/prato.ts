import type { NextApiRequest, NextApiResponse } from 'next'
import { Status } from '../../enums/Status'
import { prisma } from '../../server/db/client'

const tarefa = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { prato } = req.body
    const novoMenu = {
      prato: prato,
      descricao: '',
      status: Status.SetMenu,
    }
    const tarefa = await prisma.tarefa.create({
      data: novoMenu,
    })
    res.status(200).json(tarefa)
  }
}
export default tarefa
