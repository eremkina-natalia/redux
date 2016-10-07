const checkTodo = (state = 'SHOW_CHECKED', action) => {
  switch (action.type) {
    case 'CHECK_TODO':
      return action.filter
    default:
      return state
  }
}

export default checkTodo
