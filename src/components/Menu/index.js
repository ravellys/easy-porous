import React from 'react'
import Logo from '../../assets/img/banner.PNG'
import "./Menu.css"

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}
                alt="Logo da easyPorous"/>
            </a>
            <a className="ButtonLink" href="/">New Post</a>
        </nav>
    ) 
}

export default Menu