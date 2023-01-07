import React from 'react'
import './navbar.css';
import Link from 'next/link'

export const Navbar = () => {
    let list=['all','HTML' , 'css' , 'javaScript', 'React']
  return (
    <div className="navbar">
        <h3 className='heading'>Navbar</h3>
        <div className='list'>
            <Link to='/'>All</Link>
            <Link to="/html">HTML</Link>
            <Link to='/css'>CSS</Link>
            <Link to='/javascript'>JavaScript</Link>
            <Link to='/react'>React</Link>
        </div>
    </div>
  )
}
