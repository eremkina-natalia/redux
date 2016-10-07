const initialState = JSON.parse(window.localStorage.getItem('todos')) ||
{
  text: 'Use Redux',
  completed: false,
  id: 0
}

const todo = (state, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        changed: false,
        deleted: false
      }

      case 'DELETE_TODO':
        return {
          id: action.id,
          text: action.text,
          deleted: true
        }

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state
        }
        return {
          ...state,
          completed: !state.completed
        }

      default:
        return state
      }
    }

const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )

    case 'DELETE_TODO':
      return (
        state.filter(t =>
        t.id !== action.id
        )
      )

    default:
      return state
  }
}

export default todos
