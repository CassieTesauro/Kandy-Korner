import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/locations">Our Lokations</Link>
            </li> 
            <li className="navbar_item active">
                <Link className="navbar_link" to="/products">Our Kandies</Link>
            </li> 
            <li className="navbar_item active">
                <Link className="navbar_link" to="/employees">Employees</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/customers">Kustomers</Link>
            </li>
        </ul>
    )
}