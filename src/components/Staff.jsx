import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Staff = () => {
	const credentials = [
		"DHS Background Checks (Local & Federal)",
		"CPR & First Aid Certified",
		"Universal Precautions Training",
		"Mandatory Child Abuse Reporting",
		"10 Hours Yearly Continuing Education",
		"Health, Safety, and Ethics Training",
	];

	return (
		<Container id="staff" className="py-5">
			<Row className="align-items-center">
				{/* Left Side: Professional Summary */}
				<Col lg={7} className="mb-4 mb-lg-0">
					<h6 className="text-secondary text-uppercase fw-bold mb-2">
						Our Professionals
					</h6>
					<h2 className="display-6 fw-bold mb-4">The Sugarbaby's Team</h2>
					<p className="lead text-muted">
						The staff of Sugarbaby's Childcare meets all requirements of the
						Department of Human Services (DHS). Our educators are not just
						caregivers; they are trained professionals dedicated to your child's
						safety and growth.
					</p>
					<p>
						Upon employment, every staff member is provided with comprehensive
						staff and family handbooks and signs a formal agreement to uphold
						our center's high standards and policies.
					</p>
				</Col>

				{/* Right Side: Credentials Box */}
				<Col lg={5}>
					<div className="p-4 bg-light rounded-4 shadow-sm border-start border-4 border-primary">
						<h5 className="fw-bold mb-3">Safety & Training Standard</h5>
						<ListGroup variant="flush" className="bg-transparent">
							{credentials.map((item, idx) => (
								<ListGroup.Item
									key={idx}
									className="bg-transparent border-0 ps-0 d-flex align-items-center"
								>
									<span className="me-2 text-success">✔</span> {item}
								</ListGroup.Item>
							))}
						</ListGroup>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Staff;
