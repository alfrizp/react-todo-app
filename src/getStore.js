import guid from 'guid'
import { createStore } from 'redux'

const todos = [
  {
    id: guid.raw(),
    text: 'Design database',
    done: true
  },
  {
    id: guid.raw(),
    text: 'Mockup Apiary',
    done: false
  },
  {
    id: guid.raw(),
    text: 'Code',
    done: false
  }
]

const defaultState = {
  todos,
  showDone: true
}

const reducer = (state = defaultState, action) => {
  console.log(action)
  const { type, todo, showDone } = action
  if (type === 'SUBMIT_TODO') {
    state = {
      ...state,
      todos: [...state.todos, todo]
    }
  }

  if (type === 'UPDATE_TODO') {
    state = {
      ...state,
      todos: state.todos.map(_todo => _todo.id === todo.id ? todo : _todo)
    }
  }

  if (type === 'SET_SHOW_DONE') {
    state = {
      ...state,
      showDone
    }
  }

  return state
}

export default () => createStore(reducer)
