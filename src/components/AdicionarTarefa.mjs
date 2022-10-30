import React, { useState } from 'react'
import AdicionarPratoModal from './AdicionarPratoModal.mjs'

const AdicionarTarefa = ({ tarefas, updateTarefas }) => {
  const [tarefa, setTarefa] = useState('')
  const [prato, setPrato] = useState('')
  const [show, setShow] = useState(false)

  const addPrato = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const adicionarTarefa = (e) => {
    e.preventDefault()
    fetch('/api/tarefa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: prato, descricao: tarefa }),
    }).then(() => {
      updateTarefas()
    })
    setTarefa('')
  }
  return (
    <>
      <form className='form__input' onSubmit={adicionarTarefa}>
        <div className='row'>
          <label htmlFor='prato'>Prato</label>
          <select
            type='text'
            name='prato'
            id='prato'
            className='input'
            required
            value={prato}
            onChange={(e) => setPrato(e.target.value)}
          >
            {tarefas.map((tarefa) => (
              <option key={tarefa.id} value={tarefa.id}>
                {tarefa.prato}
              </option>
            ))}
          </select>
          <button onClick={(e) => addPrato(e)} className='addPrato'>
            +
          </button>
        </div>
        <div className='row'>
          <label htmlFor='tarefa'>Tarefa</label>
          <input
            type='text'
            name='tarefa'
            id='tarefa'
            value={tarefa}
            className='input'
            required
            onChange={(e) => setTarefa(e.target.value)}
          />
        </div>
        <div className='row'>
          <button type='submit' className='addTodoBtn'>
            Adicionar Card
          </button>
        </div>
      </form>
      <AdicionarPratoModal
        onClose={() => setShow(false)}
        show={show}
        updateTarefas={() => updateTarefas()}
      >
        <p>This is modal body</p>
      </AdicionarPratoModal>
    </>
  )
}

export default AdicionarTarefa
