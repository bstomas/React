import React from 'react'
import './Header.scss'
import ReactLogo from '../../assets/Images/logo.svg'

function Header() {
    return (
        <section className='header'>
            <img 
            className='logo'
            src={ReactLogo} 
            alt="React logo"
            />
        <div className='h1'>
            <button className='text'>React</button>
            <button className='text'>About</button>
            <button className='text'>Me</button>
        </div>
        </section>
    )
}

export default Header