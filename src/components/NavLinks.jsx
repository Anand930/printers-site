import React from 'react'

const NavLinks = ({links, linkName}) => {
  return (
    <li className="list-none font-display text-blue-500  font-semibold p-3  hover:text-white hover:bg-blue-700 border-2  rounded-2xl hover:border-2 border-transparent hover:border-blue-800 " ><a href={`#${linkName}`}>{links}</a></li>
  )
}

export default NavLinks