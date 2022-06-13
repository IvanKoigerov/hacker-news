import React from 'react'
import { Link } from 'react-router-dom'

import logo from './icon.svg'
import reload from './reload.svg'
import classes from './Header.module.css'

const Header = () => {
   return (
      <header className={classes.header}>
         <Link to="/">
            <div className={classes.headerLogo}>

               <img src={logo} alt="" />
               <h1>FOX NEWS</h1>

            </div>
         </Link>
         <button className={classes.reload}><img src={reload} alt="" /></button>
      </header>
   )
}

export default Header;

