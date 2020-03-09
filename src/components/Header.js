import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png"

export default function Header(){
    return <header className= "header" >
        <img src ={logo} alt="Western Food Bakery  Cafe logo" className="logo"/>
        <nav>
            <ul>
                <div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to ="/products">Product</Link>
                    </li>
                </div>
                <div>
                   {/* for further login 
                    <li>
                        <Link to ="/cart"> Login</Link>
                    </li>
                   */} 
                    <li>
                        <Link to="cart"></Link>
                    </li>
                </div>
            </ul>
        </nav>
    </header>;
}

       