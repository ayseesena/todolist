import React from 'react'

import NewFrom from './newfrom/NewFrom'


function Header() {
  return (
    <header className="header">
    <h1>Todos</h1>
   <NewFrom/>
</header>
  )
}

export default Header