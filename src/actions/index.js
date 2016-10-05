let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const loginTodo = (login) => ({
  type: 'LOGIN_TODO',
  login
})

  export const checkTodo = (text) => ({
    type: 'CHECK_TODO',
    text
})
