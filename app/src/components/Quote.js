import { useTranslation } from "react-i18next";

const Quote = ({ translationKey }) => {
  const { t } = useTranslation();

  return (
    <div className="container quote">
      <h2>{t(translationKey)}</h2>
    </div>
  );
};

export default Quote;
