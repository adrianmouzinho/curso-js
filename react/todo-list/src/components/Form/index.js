import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export function Form ({ novaTarefa, handleCreateTask, handleInputChange }) {
  return (
    <form onSubmit={handleCreateTask}>
      <input
        type="text"
        value={novaTarefa}
        onChange={handleInputChange}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleCreateTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired
}
