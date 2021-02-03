import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import * as Fa from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container flex">
                <div className="logo">
                    <NavLink to="/">
                        <h2 className="logo-name">iPiano</h2>
                    </NavLink>
                </div>
                <ul className="nav-items flex">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="lessons">Lessons</NavLink>
                    </li>
                </ul>

                <ul className="social flex">
                    <li className="social-link facebook">
                        <a href="!#" >
                            <Fa.FaFacebook size="28" />
                        </a>
                    </li>
                    <li className="social-link instagram">
                        <a href="!#" >
                            <Fa.FaInstagram size="28" />
                        </a>
                    </li>
                    <li className="social-link twitter">
                        <a href="!#" >
                            <Fa.FaTwitter size="28" />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Footer
