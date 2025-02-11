import { Container } from "react-bootstrap";

function ImageText({ imageSrc, imageAlt }) {
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
    </Container>
  );
}

export default ImageText;
