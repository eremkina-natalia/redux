import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import check from './check'

const todoApp = combineReducers({
  todos,
  check,
  visibilityFilter
})

export default todoApp
