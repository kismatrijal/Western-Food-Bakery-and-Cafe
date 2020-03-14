import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.jpg";

export default function Navbar() {
<<<<<<< HEAD
    return (<ProductConsumer>
        {   
            value=>{
                const { cartItems, handleCart}= value
                return <NavWrapper>
                    <div className="nav-main">
                        <img className="nav-logo" src = {logo} alt="Western Food Bakery  cafe" />                          
                              
                        <Link className="test" style={{ textDecoration: 'none' }} to="/">Home</Link>
                        <Link style={{ textDecoration: 'none', color:'black' }} to ="/products">Product</Link> 
                        <Link style={{ textDecoration: 'none', color:'black' }} to="/about">About</Link> 
                        <Link style={{ textDecoration: 'none', color:'black' }} to ="/contact">Contact</Link>                                                                                                                                                                                                                                    
                            
                            <div style={{ color: '#5fb7ea' }}>
                                <Link to="/cart"><FaCartPlus className="nav-icon" onClick={handleCart}/> </Link>
                                
                                <div className="cart-item">
                                    {cartItems}
                                </div>    
                            </div>
                     </div>
                 </NavWrapper>
            }
        }
=======
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleCart } = value;
        return (
          <NavWrapper>
            <div
              id="navb-container"
              className="navbar navbar-light bg-grey fixed-top"
            >
              <div className="container">
                <a id="navb-brand" className="navbar-brand" href="/root">
                  <img
                    className="nav-logo d-inline-block align-top"
                    src={logo}
                    alt="Western Food Bakery  cafe"
                  />
                  <span className="navb-logo-text">
                    Western Foods and Bakery Cafe
                  </span>
                </a>

                <ul className="nav">
                  <Link
                    className="test nav-link"
                    style={{ textDecoration: "none" }}
                    to="/home"
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/products"
                  >
                    Product
                  </Link>
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <div>
                    <FaCartPlus
                      className="nav-icon"
                      onClick={handleCart}
                    ></FaCartPlus>
                    <div className="cart-item">{cartItems}</div>
                  </div>
                </ul>
              </div>
            </div>
          </NavWrapper>
        );
      }}
>>>>>>> ba0a8c4645e30052bec6ef21de93f957aefccf27
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .test :hover {
    color: red;
  }
`;
