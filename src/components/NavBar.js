import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  return (
    <header className="bg-black-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black-800 text-4xl font-bold cursive tracking-widest">
            Spencer
          </NavLink>
          <NavLink to='/post' className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover: text-white-800" activeClassName="text-red-100 bg-red 700">
            Blog Posts
          </NavLink>
          <NavLink to='/project' className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover: text-white-800" activeClassName="text-red-100 bg-red 700">
            Projects
          </NavLink>
          <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover: text-white-800" activeClassName="text-red-100 bg-red 700">
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/spencerlazzar/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://github.com/spencerlazzar" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://www.facebook.com/spencerlazzar206/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://twitter.com/spencelazzar" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://www.strava.com/athletes/23391746" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://www.instagram.com/spencerlazzar/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
        </div>
      </div>
    </header>
  )
}

export default NavBar
