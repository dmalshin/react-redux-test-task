import React from 'react'
import { Link } from 'redux-little-router'
import { menuLinks } from '../../config/menuLinks'

export const AppHeader = () => (
  <header>
    {menuLinks.map((link) => (
      <React.Fragment key={link.name}>
        <Link href={link.path}>{link.name}</Link>
        <br />
      </React.Fragment>
    ))}
  </header>
)
