import React from 'react'
import { NavLink } from 'react-router-dom'

function SignInLinks() {
  return (
    <div>
    <ul className="right">
      <li><NavLink to='/create'>New Event</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>PN</NavLink></li>
    </ul>
    </div >
  )
}
export default SignInLinks