import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import NovaTarefa from './NovaTarefa.mjs'

const QuadroTarefas = ({ tarefas, updateTarefas }) => {
  const handleDragEnd = ({ destination, source }) => {
    if (
      !destination ||
      (destination.index === source.index &&
        destination.droppableId === source.droppableId)
    ) {
      return
    }
    const tarefa = tarefas[source.index]
    tarefa.status = destination.droppableId
    fetch('/api/tarefa', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: tarefa.id, status: tarefa.status }),
    }).then(() => {
      updateTarefas()
    })
  }

  return (
    <div className='container'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='status_context'>
          <h3>{'set_menu'.replace('_', ' ')}</h3>
          <Droppable droppableId='set_menu'>
            {(provided) => {
              return (
                <ul
                  role='list'
                  className='status_container'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tarefas.map((tarefa, index) =>
                    tarefa.status === 'set_menu' ? (
                      <NovaTarefa
                        tarefa={tarefa}
                        key={tarefa.id}
                        index={index}
                      />
                    ) : (
                      ''
                    )
                  )}
                  {provided.placeholder}
                </ul>
              )
            }}
          </Droppable>
        </div>
        <div className='status_context'>
          <h3>{'show_time'.replace('_', ' ')}</h3>
          <Droppable droppableId='show_time'>
            {(provided) => {
              return (
                <div
                  role='list'
                  className='status_container'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tarefas.map((tarefa, index) =>
                    tarefa.status === 'show_time' ? (
                      <NovaTarefa
                        tarefa={tarefa}
                        key={tarefa.id}
                        index={index}
                      />
                    ) : (
                      ''
                    )
                  )}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </div>
        <div className='status_context'>
          <h3>{'delivery'.replace('_', ' ')}</h3>
          <Droppable droppableId='delivery'>
            {(provided) => {
              return (
                <div
                  role='list'
                  className='status_container'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tarefas.map((tarefa, index) =>
                    tarefa.status === 'delivery' ? (
                      <NovaTarefa
                        tarefa={tarefa}
                        key={tarefa.id}
                        index={index}
                      />
                    ) : (
                      ''
                    )
                  )}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )
}

export default QuadroTarefas
