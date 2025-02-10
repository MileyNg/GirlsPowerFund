import { Container } from "react-bootstrap";

const Quote = ({ text, background }) => {
  return (
    <Container className={`quote ${background}`}>
      <h2>{text}</h2>
    </Container>
  );
};

export default Quote;
