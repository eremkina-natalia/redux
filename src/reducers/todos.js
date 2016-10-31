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

      case 'CHANGE_TODO':
        return {
          id: action.id,
          text: action.text,
          deleted: true
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

const todos = (state = [initialState], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]

    case 'CHANGE_TODO':
      return (
        state.map(t =>
        t.id === action.id ? ( null ? state.text : action.text ) : t
      ).filter
      )

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

    case 'CLEAR_COMPLETED':
      return(
        state.filter(t =>
          t.completed == false
        )
    )

    default:
      return state
  }
}

export default todos
