import { Container, Row, Col, Card } from 'react-bootstrap';

const Service = () => {
  const Service = [
    { title: "Infants", age: "6 weeks - 12 months", desc: "Focus on sensory development and nurturing care." },
    { title: "Toddlers", age: "1 - 3 years", desc: "Interactive play and early social skill building." },
    { title: "Pre-K", age: "4 - 5 years", desc: "School readiness and foundational literacy." }
  ];

  return (
    <Container id="programs" className="py-5">
      <h2 className="text-center mb-5 fw-bold">Our Programs</h2>
      <Row>
        {Service.map((p, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{p.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{p.age}</Card.Subtitle>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;