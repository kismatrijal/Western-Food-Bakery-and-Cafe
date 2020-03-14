import React from 'react';
import {FaCartPlus} from 'react-icons/fa';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import logo from '../images/logo.png';

export default function Navbar() {
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
    </ProductConsumer>
    );
}

const NavWrapper = styled.nav`
    position:-webkit-sticky;
    position:sticky;
    top:0;
    width:100%;
    padding:1rem 1.5rem;
    background: var(--mainGrey);
    border-bottom:3px solid var(--primaryColor);
    z-index:1;
    .test :hover{
        color:red;
    }
`;
   