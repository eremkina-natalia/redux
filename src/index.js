import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import '../css/app.css'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import AppNotes from './components/AppNotes'
import NotFound from './components/NotFound'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
       <Route path='/' component={Home}>
       <IndexRoute component={Home} />
         <Route path='/todo' component={App} />
         <Route path='/note' component={AppNotes} />
       </Route>
       <Route path='*' component={NotFound} />
     </Router>
   </Provider>,
  document.getElementById('content')
)
