import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render(){
    return(
      <div>
      <header className="home header-home light-text bg-fill fade" id="header">
        <div className='todoApp' id='leftBlock'>
          <Link to='/todo'>  <button className='btnLink'>START TODO</button></Link>
        </div>
        <div className='todoApp' id='rightBlock'>
          <Link to='/note'><button className='btnLink'>START NOTES</button></Link>
        </div>
      </header>
        {this.props.children}
      </div>
    )

  }
}
