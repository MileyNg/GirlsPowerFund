import { useTranslation } from "react-i18next";
import { Container} from "react-bootstrap";

const Quote = ({ translationKey }) => {
  const { t } = useTranslation();

  return (
    <Container className="quote">
      <h2>{t(translationKey)}</h2>
    </Container>
  );
};

export default Quote;
