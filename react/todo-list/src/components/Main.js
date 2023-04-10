import { Component } from 'react'

import { Form } from './Form'
import { Tasks } from './Tasks'

import './Main.css'

export class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: JSON.parse(localStorage.getItem('tarefas')) ?? [],
    index: -1
  }

  handleCreateTask = (event) => {
    event.preventDefault()

    const { novaTarefa, tarefas, index } = this.state

    if (!novaTarefa) {
      return
    }

    const novasTarefas = [...tarefas]

    if (tarefas.indexOf(novaTarefa.trim()) !== -1) {
      alert('Essa tarefa já existe')

      this.setState({
        novaTarefa: ''
      })

      return
    }

    if (index !== -1) {
      novasTarefas[index] = novaTarefa

      this.setState({
        novaTarefa: '',
        tarefas: novasTarefas,
        index: -1
      })

      localStorage.setItem('tarefas', JSON.stringify(novasTarefas))

      return
    }

    novasTarefas.push(novaTarefa)

    this.setState({
      tarefas: novasTarefas,
      novaTarefa: ''
    })

    localStorage.setItem('tarefas', JSON.stringify(novasTarefas))
  }

  handleDeleteTask = (index) => {
    const { tarefas } = this.state

    const novasTarefas = [...tarefas]
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: novasTarefas
    })

    localStorage.setItem('tarefas', JSON.stringify(novasTarefas))
  }

  handleEditeTask = (index) => {
    const { tarefas } = this.state

    this.setState({
      novaTarefa: tarefas[index],
      index
    })
  }

  handleInputChange = (event) => {
    this.setState({ novaTarefa: event.target.value })
  }

  render () {
    const { novaTarefa, tarefas } = this.state

    return (
      <main>
        <h1>Lista de tarefas</h1>

        <Form
          novaTarefa={novaTarefa}
          handleCreateTask={this.handleCreateTask}
          handleInputChange={this.handleInputChange}
        />

        <Tasks
          tarefas={tarefas}
          handleEditeTask={this.handleEditeTask}
          handleDeleteTask={this.handleDeleteTask}
        />
      </main>
    )
  }
}
