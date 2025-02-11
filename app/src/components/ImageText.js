import { Container, Row, Col } from "react-bootstrap";

function ImageText({ data }) {
  return (
    <Container className={`text-image-container ${data.background}`}>
      <Row className="content-container flex-column-reverse flex-md-row">
        <Col md={6} className={`image-section ${data.borderImage}`}>
          <img src={data.image} alt={data.alt} />
        </Col>
        <Col md={6} className="text-section">
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <div className="redirect-buttons">
            <a href={data.href} rel="noopener noreferrer">
              {data.buttonText}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageText;
