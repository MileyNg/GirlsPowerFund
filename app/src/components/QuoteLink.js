import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const QuoteLink = ({ data }) => {
  return (
    <Container className="quote-link text-align-left">
      <h5>{data.text}</h5>

      <a
        href={data.href}
        rel="noopener noreferrer"
      >
        {data.linkText} <FaArrowRight />
      </a>
    </Container>
  );
};

export default QuoteLink;
