import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";
import Services from "../components/HomePage/Services";
export default function HomePage() {
  return (
    <>
      <Hero title="Quality Food" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
