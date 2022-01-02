import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import LoginButton from './LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
function Header() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Skikend</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>

                    {isAuthenticated? <LogoutButton /> : <LoginButton /> }
                    
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
