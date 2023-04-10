import PropTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Tasks.css'

export function Tasks ({ tarefas, handleEditeTask, handleDeleteTask }) {
  return (
    <ul>
      {tarefas.map((tarefa, i) => (
        <li key={tarefa}>
          {tarefa}

          <span>
            <button type="button" onClick={() => handleEditeTask(i)}>
              <FaEdit className="edit" />
            </button>
            <button type="button" onClick={() => handleDeleteTask(i)}>
              <FaWindowClose className="delete" />
            </button>
          </span>
        </li>
      ))}
    </ul>
  )
}

Tasks.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEditeTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired
}
