import React from 'react'

const NavLinkFooter = ({links, linkName}) => {
  return (
    <li className="font-display font-semibold p-3 text-white " ><a href={`#${linkName}`}>{links}</a></li>
  )
}

export default NavLinkFooter;