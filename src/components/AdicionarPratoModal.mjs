import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const AdicionarPratoModal = (props) => {
  const [prato, setPrato] = useState('')

  const adicionarPrato = (e) => {
    e.preventDefault()
    fetch('/api/prato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prato: prato }),
    }).then(() => {
      setPrato('')
      props.onClose()
      props.updateTarefas()
    })
  }
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='modal' onClick={props.onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>Adicionar Prato</h4>
          </div>
          <div className='modal-body'>
            <form className='form__input' onSubmit={adicionarPrato}>
              <div className='row'>
                <label htmlFor='tarefa'>Prato</label>
                <input
                  type='text'
                  name='prato'
                  id='prato'
                  value={prato}
                  className='input'
                  required
                  onChange={(e) => setPrato(e.target.value)}
                />
              </div>
              <div className='row'>
                <button className='addTodoBtn'>Adicionar Prato</button>
              </div>
            </form>
          </div>
          <div className='modal-footer'></div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default AdicionarPratoModal
