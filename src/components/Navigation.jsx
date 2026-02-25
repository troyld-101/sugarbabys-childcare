import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = () => (
	<Navbar
		bg="white"
		expand="lg"
		sticky="top"
		className="shadow-sm"
		collapseOnSelect
	>
		<Container>
			<Navbar.Brand href="/" className="fw-bold text-primary">
				<h1>Sugarbaby's Childcare</h1>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto align-items-center">
					<Nav.Link href="#about" eventKey="1">
						About Us
					</Nav.Link>
					{/*<Nav.Link href="#service" eventKey="2">
						Programs
					</Nav.Link>*/}
					<Nav.Link href="#admissions" eventKey="3">
						Admissions
					</Nav.Link>
					<Nav.Link href="#contact" eventKey="4">
						Contact
					</Nav.Link>
					<Button
						variant="outline-primary"
						href="tel:319-223-1268"
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
