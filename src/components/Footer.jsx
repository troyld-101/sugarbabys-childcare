import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
	<footer className="bg-dark text-white py-5">
		<Container>
			<Row>
				<Col md={6}>
					<h5>Sugarbaby's Childcare</h5>
					<p>
						919 W 4th St.
						<br />
						Waterloo, IA 50702
						<br />
						sugarbabychildcare@gmail.com
						<br />
						319-223-1268
					</p>
					<p className="text-muted">Located 1 block from Irving Elementary.</p>
				</Col>
				<Col md={6} className="text-md-end">
					<p>© {new Date().getFullYear()} Sugarbaby's Childcare</p>
					<p>Hours: Mon - Fri: 4:00 AM - 6:00 PM</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
