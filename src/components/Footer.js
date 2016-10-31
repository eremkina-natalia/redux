import React from 'react'
import FilterLink from '../containers/FilterLink'
import todos from '../reducers/todos'

var Footer = React.createClass({
  render: function(){
    return(
      <footer>
        <p className="bottomLinks">
          Show:
          {" "}
          <FilterLink filter="SHOW_ALL"> All </FilterLink>
          {", "}
          <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
          {", "}
          <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
        </p>
      </footer>
    )
  }
})

export default Footer
