import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../img/logo.svg'
import home_logo from '../img/home_icon.svg'
import search_icon from '../img/search_icon_white.svg'

const SideBar = () => {

  return (

    <aside className="min-h-screen pt-4 md:px-1 px-0 w-0 md:w-60 text-white bg-gray-900 
            relative md:fixed hidden md:inline-block">
      <div className="flex flex-row py-4">
        <img src={logo} alt='logo' />
        <Link
          className="text-2xl  text-white lg:text-3xl hover:text-gray-100 "
          to="/"
        >
          pplayer
        </Link>
      </div>
      <div className="text-left">
        <NavLink className="flex mx-2 my-1 rounded p-2 hover:bg-gray-800"
          activeClassName="bg-gray-800" exact to="/">
          <img src={home_logo} alt='home_icon' />
          <span className="ml-4">Home</span>
        </NavLink>
        <NavLink className="flex mx-2 my-1 rounded p-2 hover:bg-gray-800"
          activeClassName="bg-gray-800" exact to="/search">
          <img src={search_icon} alt='search_icon' />
          <span className="ml-4">Search</span>
        </NavLink>
        <div className="mt-5 pl-4">
          <a href="//add link to your github repo"
            className="mx-2 text-gray-600 hover:text-gray-500"
            aria-label="Git">
            Github
                </a>

          <a href="//add link to your twitter" className="mx-2 text-gray-600 hover:text-gray-500"
            aria-label="Facebook">
            Twitter
                </a>
        </div>
      </div>
    </aside>
  )
}


export default SideBar