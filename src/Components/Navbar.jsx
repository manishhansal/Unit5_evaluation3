import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: black;
    font-size: 25px;
`

export const Navbar = () => {
    return (
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
        </div>
    )
}
