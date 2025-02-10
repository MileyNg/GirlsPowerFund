import { Container, Row, Col } from "react-bootstrap";

function TextImage({ data }) {
  return (
    <Container className={`text-image-container ${data.background}`}>
      <Row className="content-container">
        <Col md={7} className="text-section">
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <div className="redirect-buttons">
            <a href={data.href} rel="noopener noreferrer">
              {data.buttonText}
            </a>
          </div>
        </Col>
        <Col md={5} className="image-section">
          <img src={data.image} alt={data.alt} />
        </Col>
      </Row>
    </Container>
  );
}

export default TextImage;
