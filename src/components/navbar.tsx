import { Component, ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export class NavBar extends Component<{}, {}>{
    render(): ReactNode {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="home">All-In-one WFH Kit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Schedule</Nav.Link>
                            <Nav.Link href="yoga">Yoga Videos</Nav.Link>
                            <Nav.Link href="workout">Workout Videos</Nav.Link>
                            <Nav.Link href="social">Social Space</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}