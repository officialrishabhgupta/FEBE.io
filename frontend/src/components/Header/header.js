import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

const Header =()=>(
    <div className="header">
        <div className="options">
            <Link className="option" to='./odi'>
                <h2>ODI</h2>
            </Link>
            <Link className="option" to='./bats'>
                <h2>BATTING</h2>
            </Link>
            <Link className="option" to='./fields'>
                <h2>FIELDING</h2>
            </Link>
        </div>
    </div>
)

export default Header;