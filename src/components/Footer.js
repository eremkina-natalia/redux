import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <footer>
    <p className="bottomLinks">
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL"> All </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
      {", "}
      <FilterLink filter="SHOW_CHANGED"> Changed </FilterLink>
      {", "}
      <FilterLink filter="SHOW_DELETED"> Deleted </FilterLink>
    </p>
  </footer>
)

export default Footer
