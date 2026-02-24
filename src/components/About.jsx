import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
	return (
		<Container className="py-5" id="about">
			<Row className="align-items-center">
				{/* Image Column */}
				<Col md={6} className="mb-4 mb-md-0">
					<Image
						src="./src/pics/Shug1.avif"
						alt="Sugarbaby's Childcare Facility"
						rounded
						fluid
						shadow
					/>
				</Col>

				{/* Text Column */}
				<Col md={6}>
					<h1 className="display-5 fw-bold mb-3">About Sugarbaby’s</h1>
					<p className="h4 mt-5 mb-3 text-muted">
						The purpose of Sugarbaby's Childcare is ...
					</p>
					<p className="h5 mt-5 mb-3">
						<section>
							To provide quality childcare in a pleasant, nurturing environment
							in which each child feels loved and secure. I strive for a balance
							of ages so that children can learn, accept, and appreciate the
							diversity of each age and stage of group. I offer a variety of
							daily activities that will enhance the social, emotion, physical
							and intellectual development of each child in other words hands on
							experience children learn best to promote positive self-concept by
							allowing each child to express, explore and share their
							experiences with us!
						</section>
					</p>
					<p className="h5 mt-5 mb-3">
						From our flexible hours to our specialized curriculum for different
						age groups, we’ve designed our center to support the busy lives of
						local parents while never compromising on the quality of care.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
