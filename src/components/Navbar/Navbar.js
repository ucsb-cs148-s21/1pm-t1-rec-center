import React, {Component} from 'react';
import { Button } from '../Button';
import {MenuItems} from "./MenuItem"
import './Navbar.css'


class Navbar extends Component {
    state = {on: false}

    handleClick = () => {
        this.setState({on: !this.state.on})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Rec Cen<i className="fas fa-dumbbell"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.on ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.on ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.label}    
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar