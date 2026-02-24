import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = () => (
	<Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
		<Container>
			<Navbar.Brand href="/" className="fw-bold text-primary">
				<h2>Sugarbaby's Childcare</h2>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto align-items-center">
					<Nav.Link href="#about">About Us</Nav.Link>
					<Nav.Link href="#service">Programs</Nav.Link>
					<Nav.Link href="#admissions">Admissions</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
					<Button
						variant="outline-primary"
						href="tel:3192231268"
						className="ms-lg-3"
					>
						Call: (319) 223-1268
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
