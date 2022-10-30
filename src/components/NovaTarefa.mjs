import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import SubTarefa from './SubTarefa.mjs'

function NovaTarefa({ tarefa, index }) {
  const { id, prato, descricao, status } = tarefa
  return (
    <Draggable draggableId={id + ''} index={index}>
      {(provided) => {
        return (
          <div
            className={`${status}_item tarefa_item`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <p className='prato'>{prato}</p>
            <ul>
              {descricao
                .split(';')
                .map((subtarefa) =>
                  subtarefa === '' ? '' : <SubTarefa subtarefa={subtarefa} />
                )}
            </ul>
          </div>
        )
      }}
    </Draggable>
  )
}

export default NovaTarefa
/*
{descricao.split(';').map((subtarefa) => (
              <SubTarefa descricao={subtarefa}></SubTarefa>
            ))}
            */
