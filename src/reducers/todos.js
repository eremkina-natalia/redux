import input from '../containers/AddTodo'

const state = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

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
      /*if (action.DELETE_TODO){
        return {
          ...state,
          deleted: !state.deleted
        }
      }*/
      return {
        ...state,
        completed: !state.completed/*,
        changed: !state.changed
        deleted: !state.deleted*/
      }
    default:
      return state
  }
}

/*export default function todos(state = [], action) {
  switch (action.type) {

      case 'ADD_TODO':
        return [
          ...state,
          todo(undefined, action)
        ]
      case 'CHECK_TODO':
        return [
          ...state,
          todo(undefined, action)
        ]
      case 'TOGGLE_TODO':
        return state.map(t =>
          todo(t, action)
        )

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(id => id !== action.id),
        todosById: omit(state.todosById, action.id) //возвращает объект, у кот убраны некоторые свойства
      }

    case types.STAR_TODO:
      return {
        ...state,
        todosById: mapValues(state.todosById, (todos) => { //создает новый объект с такими же ключами,как у исходного, значения получаются вызовом callback ф-и к кажд эл-ту
          return todos.id === action.id ?
            assign({}, todos, { starred: !todos.starred }) : //дополняет объект отсутствующими свойствами из др объекта
            todos
        })
      }

    default:
      return state;
  }
}*/

const todos = (state = [], action) => {
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
        state.map(t =>
        t.id === action.id ? null : t
        ).filter(Boolean)
      )
    default:
      return state
  }
}

export default todos
