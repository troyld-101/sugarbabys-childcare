import React, { useState } from "react"; // Added useState hook
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
	// State to track if the message was sent successfully
	const [status, setStatus] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);

		// Sending data to Formspree
		const response = await fetch("https://formspree.io/f/xaqdabvg", {
			method: "POST",
			body: data,
			headers: { Accept: "application/json" },
		});

		if (response.ok) {
			setStatus("SUCCESS");
			form.reset();
		} else {
			setStatus("ERROR");
		}
	};

	return (
		<Container id="contact" className="py-5">
			<Row>
				{/* Left Side: Contact Form */}
				<Col md={6} className="mb-4">
					<h2 className="display-6 fw-bold mb-4 text-primary">Get In Touch</h2>
					<p>Have questions about enrollment? Send us a message.</p>

					{/* Feedback Messages */}
					{status === "SUCCESS" && (
						<Alert variant="success">Thanks! Your message has been sent.</Alert>
					)}
					{status === "ERROR" && (
						<Alert variant="danger">
							Oops! There was a problem. Please try again.
						</Alert>
					)}

					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Parent Name</Form.Label>
							{/* Added 'name' attributes for Formspree to read */}
							<Form.Control
								type="text"
								name="name"
								placeholder="Enter your name"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="name@example.com"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" name="message" rows={3} required />
						</Form.Group>
						<Button variant="primary" type="submit">
							Send Message
						</Button>
					</Form>
				</Col>

				{/* Right Side: Map & Info */}
				<Col md={6}>
					<h2 className="display-6 fw-bold mb-4 text-primary">Visit Us</h2>
					<p>
						<strong>Sugarbaby's Childcare</strong>
						<br />
						915 W 4th St, Waterloo, IA 50702
					</p>

					<div className="ratio ratio-16x9 shadow-sm rounded">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.8359218080614!2d-92.3484279!3d42.4950854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e048ebc4664c7d%3A0xc3f173872895690b!2s919%20W%204th%20St%2C%20Waterloo%2C%20IA%2050702!5e0!3m2!1sen!2sus!4v1700000000000"
							allowFullScreen=""
							loading="lazy"
							title="Sugarbaby's Location"
							style={{ border: 0 }}
						></iframe>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
