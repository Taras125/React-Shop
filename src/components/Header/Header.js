import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ cartItems }) => {
    return (
        <header className="header">
            <div>
                <h1 >
                    <Link to='/' className="logo" >
                        React Shop
                    </Link>
                </h1>
            </div>
            <div className="header_links">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/cart' className="cart">
                            <span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/126/126083.png"
                                    alt="icon"
                                    width="30px"
                                    height="30px"
                                />
                            </span>
                            <span className="cart_total">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header
