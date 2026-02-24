import { Container, Button } from "react-bootstrap";

const Hero = () => (
    <div className="bg-light p-5 rounded-lg m-3 text-center">
        <Container>
           <h1 className="display-4 fw-bold">Sugarbaby's Childcare</h1>
      <p className="lead">
        Providing a safe, nurturing environment just one block from Irving Elementary in Waterloo.
      </p>
      <Button variant="primary" size="lg" href="#contact">
        Schedule a Tour
      </Button> 
        </Container>
        </div>
);

export default Hero;