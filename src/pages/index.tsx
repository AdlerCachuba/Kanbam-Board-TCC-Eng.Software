import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AdicionarTarefa from '../components/AdicionarTarefa.mjs'
import Nav from '../components/Nav.mjs'
import QuadroTarefas from '../components/QuadroTarefas.mjs'

const Home: NextPage = () => {
  const [tarefas, setTarefas] = useState([])

  const updateTarefas = () => {
    fetch('/api/tarefa')
      .then((res) => res.json())
      .then((data) => {
        setTarefas(data)
      })
  }
  useEffect(() => {
    updateTarefas()
  }, [])

  return (
    <>
      <Head>
        <title>GastroProcess</title>
        <meta name='description' content='Prototipo GastroProcess' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Nav />
        <AdicionarTarefa tarefas={tarefas} updateTarefas={updateTarefas} />
        <QuadroTarefas tarefas={tarefas} updateTarefas={updateTarefas} />
      </div>
    </>
  )
}

export default Home
