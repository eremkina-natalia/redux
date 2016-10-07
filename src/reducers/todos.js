const initialState = [
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
        checked: false,
      }
      case 'CHECK_TODO':
        return {
          id: action.id,
          text: action.text,
          checked: true,
        }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        checked: !state.checked,
        completed: !state.completed
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
    case 'CHECK_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
