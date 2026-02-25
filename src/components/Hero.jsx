import { Container, Button } from "react-bootstrap";
import heroBg from "../pics/Shug4.avif"; // Change Shug1 to whichever pic is best for the top!

const Hero = () => (
	<div
		className="position-relative text-center bg-light py-5 px-3 text-center"
		style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			padding: "120px 0",
			color: "white",
		}}
	>
		<Container>
			<h1 className="display-4 fw-bold text-white mb-3">
				Sugarbaby's Childcare
			</h1>
			<p className="lead mb-4 text-light">
				Providing a safe, nurturing environment just one block from Irving
				Elementary in Waterloo.
			</p>
			<Button variant="primary" size="lg" href="#contact" className="shadow">
				Schedule a Tour
			</Button>
		</Container>
	</div>
);

export default Hero;
