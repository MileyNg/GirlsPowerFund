import { Container, Row, Col } from "react-bootstrap";

function QuoteImage({ data }) {
  return (
    <Container>
      <Row>
        <Col md={6} className={`quote-text-container ${data.background}`}>
          <div className="quote-text text-align-left">
            {data.text}
            <p className="quote-author text-align-left">{data.author}</p>
          </div>
        </Col>
        <Col md={6} className="quote-image">
          <img src={data.image} alt={data.alt} />
        </Col>
      </Row>
    </Container>
  );
}

export default QuoteImage;
