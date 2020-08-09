import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <header>
                <div className="Logo">
                    <img id="logoImg" src="https://cdn.dribbble.com/users/234141/screenshots/3064376/falcon_logo1.jpg"
                         alt="logo"/>
                    <p id="logoName">FalcoN</p>
                </div>
                <div className="HeaderNavBar">
                    <ul className="HeaderNavList">
                        <li id="List"><Link id="NavList" to="/">Home</Link></li>
                        <li id="List"><Link id="NavList" to="/news">News</Link></li>
                        <li id="List"><Link id="NavList" to="/about">About us</Link></li>
                        <li id="List"><Link id="NavList" to="/video">Video</Link></li>
                        <li><Link id="NavListSignIn" to="/login">Login</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;