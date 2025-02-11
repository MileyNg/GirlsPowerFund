import { Container, Row, Col } from "react-bootstrap";

function ImageQuote({ data }) {
  return (
    <Container>
      <Row>
        <Col md={6} className="quote-image">
          <img src={data.image} alt={data.alt} />
        </Col>
        <Col md={6} className={`quote-text-container-2 ${data.background}`}>
          <div className="quote-text-2 text-align-left">
            {data.text}
            <p className="quote-author text-align-left">{data.author}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageQuote;
