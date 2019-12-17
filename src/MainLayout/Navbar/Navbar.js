import React from 'react'
import classes from './Navbar.module.css'
import cs from 'classnames'
import gS from '../../assets/bootstrap.module.css'
import { Link, NavLink } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const navbar = () => {
    let navbarStyle = cs(gS.navbar, gS['navbar-expand-sm'], gS['bg-mid-gray'], gS['fixed-top'], classes.NavPanel)
    let buttonStyle = cs(gS['nav-link'], classes.NavItemH)
    return (


        <nav className={navbarStyle}>
            <ul className={gS['navbar-nav'], gS.nav}>
                <li className={gS['nav-item']}><HashLink className={buttonStyle} to='/#Home'>Home</HashLink></li>
                <li className={gS['nav-item']}><HashLink className={buttonStyle} to='/#Projects'>Projects</HashLink></li>
                <li className={gS['nav-item']}><HashLink className={buttonStyle} to='/#About'>About</HashLink></li>
                <li className={gS['nav-item']}><HashLink className={buttonStyle} to='/#Contact'>Contact</HashLink></li>
                <li className={gS['nav-item']}><HashLink className={buttonStyle} to='/blog'>Blog</HashLink></li>
            </ul>
        </nav>
    )
}
export default navbar
//