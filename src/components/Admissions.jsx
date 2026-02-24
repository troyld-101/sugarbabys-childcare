import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Admissions = () => {
	return (
		<Container id="admissions" className="py-5">
			<Row className="justify-content-center">
				<Col lg={8}>
					<hr className="my-5" />

					{/* Policy Section */}
					<div className="policy-content">
						<h2 className="display-6 fw-bold mb-4 text-primary">
							Admissions Policy
						</h2>
						<p className="h4 mt-5 mb-3">
							Sugarbaby's Childcare admits children 2 years of age through 12
							years of age without regard to race, sex, or religion. We do not
							discriminate based on special needs as long as a safe, supportive
							environment can be provided for the child. Parents are welcome at
							any time unless restricted by court order.
						</p>

						<h3 className="h4 fw-bold mt-5 mb-3">Supervision</h3>
						<p className="h4 mt-5 mb-3">
							No child will be left unsupervised while attending the program.
							Staff will directly supervise all children at all times, even when
							the children are sleeping. Caregivers will regularly count
							children to always confirm the safe whereabouts of every child.
						</p>
					</div>

					{/* Quote Section */}
					<div className="text-center mb-5">
						<h4 className="fst-italic text-muted mb-3">
							"Education is the most powerful weapon which you can use to change
							the world."
						</h4>
						<p className="fw-bold">— Nelson Mandela</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Admissions;
