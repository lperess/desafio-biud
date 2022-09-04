import React from 'react';
import PropTypes from 'prop-types';
import rocket from '../images/rocket.png';
import './styles.css';

function Step4({ name, business, setStep }) {
  setTimeout(() => {
    setStep(5);
  }, 6000);

  return (
    <section className="step">
      <img
        src={rocket}
        alt="rocket emoji"
        className="emoji"
        width="60px"
      />

      <p className="title">
        Legal,
        {' '}
        {name}
        !
      </p>

      <p className="text">
        A partir de agora você vai embarcar nessa
        experiência comigo e descobrir como utilizo
        a minha inteligência para impactar nos
        resultados da sua
        {' '}
        {business}
        .
      </p>
    </section>
  );
}

Step4.propTypes = {
  setStep: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired,
};

export default Step4;
