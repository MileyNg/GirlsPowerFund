import { Container, Row, Col } from "react-bootstrap";

function TextLeft({ data }) {
  return (
    <Container className={`text-image-container ${data.background}`}>
      <Row className="content-container">
        <Col md={8} className="text-section">
          <h1>{data.title}</h1>
          <p>{data.text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TextLeft;
