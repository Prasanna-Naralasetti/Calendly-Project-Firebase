import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLink'
import SignOutLinks from './SignedOutLink'

function Navbar() {
  return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to='/' className="brand-logo">Calendly</Link>
        <SignInLinks />
        <SignOutLinks/>
      </div>
     </nav>
   
  )
}
export default Navbar