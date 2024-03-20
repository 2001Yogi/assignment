import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className style={{ position: 'fixed', top: '0px' }}>
                <nav className="navbar navbar-expand-lg" >
                    <div className="container">
                        <Link className="navbar-brand" to="/"><h2 style={{ position: 'fixed', top: '25px', left: '60px' }}><em>SHOPEX</em></h2></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive" >
                            <ul className="navbar-nav ml-auto" >
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/product">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
