import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
export default function HomePage(){
    return(
        <>
            <Hero  title="Awsome Food" max="true">
                <Link to = "/products" className="main-link" style={{margin:"2rem"}}>Our Products</Link>
            </Hero>

        </>
    );
}