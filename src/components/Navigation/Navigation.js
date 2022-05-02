// React imports
import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './Navigation.css'

const Navigation = () => {

    const scrollToHome = () => {
        window.scrollTo( { top: 0, behavior: 'smooth' } )
    }

    const scrollToAbout = () => {
        window.scrollTo( { top: 750, behavior: 'smooth' } )
    }

    const scrollToCalendar = () => {
        window.scrollTo( { top: 1610, behavior: 'smooth' } )
    }

    const scrollToTeam = () => {
        window.scrollTo( { top: 2400, behavior: 'smooth' } )
    }

    const scrollToResources = () => {
        window.scrollTo( { top: 3500, behavior: 'smooth' } )
    }

    return (
        <header className='topBarContainer'>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=K2D:wght@100;200;300&display=swap" rel="stylesheet"></link>
                <div className='heading'>
                   <div className='menuItem' onClick={scrollToHome}>
                        <NavLink className='menuItemText' to='/'>
                            HOME
                        </NavLink>
                   </div>
                   <div className='menuItem' onClick={scrollToAbout}>
                        <NavLink className='menuItemText' to='/'>
                            ABOUT
                        </NavLink>
                   </div>
                   <div className='menuItem' onClick={scrollToCalendar}>
                        <NavLink className='menuItemText' to='/'>
                            CALENDAR
                        </NavLink>
                   </div>
                   <div className='menuItem' onClick={scrollToTeam}>
                        <NavLink className='menuItemText' to='/'>
                            TEAM
                        </NavLink>
                   </div>
                   <div className='menuItem' onClick={scrollToResources}>
                        <NavLink className='menuItemText' to='/'>
                            RESOURCES
                        </NavLink>
                   </div>
            </div>
        </header>
    )
}

export default Navigation;
