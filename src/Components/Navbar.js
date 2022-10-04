import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
            <p>The Meal</p>
            <nav className='list'>
                <a href='/home/'>Home</a>
                <a href='/categories/'>Categories</a>
                <a href='/random/'>Random</a>
            </nav>
    </div>
    
  )
}

export default Navbar