import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Link as ScrollLink } from 'react-scroll'

import logo from '../assets/img/btklogo.png'

const Navigation = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    React.useEffect(() => {
        return () => {
            window.addEventListener("resize", handleResize);
        };
    });

    if (windowWidth > 992) {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="sticky-top navigation py-4">
                    <Container>
                        <Link to="/" className="navbar-brand"><img src={logo} width="100px" height="auto" /></Link>
                        <Nav className="mb-auto nav">
                            <ScrollLink to="slider__section" className="nav-link mr-2">Home</ScrollLink>
                            <ScrollLink to="about__section" className="nav-link mr-2">About Me</ScrollLink>
                            <ScrollLink to="portfolio__section" className="nav-link mr-2">Portfolio</ScrollLink>
                            <ScrollLink to="services__section" className="nav-link mr-2">Services</ScrollLink>
                            <ScrollLink to="experience__section" className="nav-link mr-2">Experience</ScrollLink>
                            <ScrollLink to="footer__section" className="btn__contact btn__anime btn nav-link px-4">Contact Me</ScrollLink>
                        </Nav>
                    </Container>
                </Navbar>
            </>)
    }
    else {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand={false} className="fixed-top py-2 navigation__mobile">
                    <Container>
                        <Link to="/" className="navbar-brand"><img src={logo} width="100px" height="auto" /></Link>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            className="canvas__body"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo} width="30%" height="auto" /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="canvas__nav">
                                <Nav className="me-auto">
                                    <ScrollLink to="slider__section" className="nav-link mb-4 mx-3">Home</ScrollLink>
                                    <ScrollLink to="about__section" className="nav-link mb-4 mx-3">About Me</ScrollLink>
                                    <ScrollLink to="portfolio__section" className="nav-link mb-4 mx-3">Portfolio</ScrollLink>
                                    <ScrollLink to="services__section" className="nav-link mb-4 mx-3">Services</ScrollLink>
                                    <ScrollLink to="experience__section" className="nav-link mb-4 mx-3">Experience</ScrollLink>
                                    <ScrollLink to="/contact" className="nav-link mb-4 mx-3 btn__contact">Connect with Me</ScrollLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Navigation;