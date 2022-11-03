import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { info } from "./Info";

import "./Navbar.scss";

function CustomNav() {

    const links = [
        {
            title: "Me",
            link: "#me",
        },
        {
            title: "Projects",
            link: "#projects",
        },
        {
            title: "Contact",
            link: "#contact",
        },
    ]

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar
            fixed="top"
            expand="lg"
            className={scrolled && "scrolled"}
            position="absolute">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((link, index) => (
                            <Nav.Link href={link.link} key={index} className={'navbar-link'}>{link.title}</Nav.Link>
                        ))}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            {info.socials.map((social, index) => (
                                <a href={social.link} target="_blank" key={index}>
                                    <i class={social.icon} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNav;