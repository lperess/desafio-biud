import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import smartphone from '../images/smartphone.png';
import './styles.css';

function Step5({ setStep, wpp, setWpp }) {
  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      setStep(6);
    }
  };

  return (
    <Fade in>
      <section className="step">
        <img
          src={smartphone}
          alt="smartphone emoji"
          className="emoji"
          width="40px"
        />

        <p className="title">
          Essa experiência acontece toda pelo
          WhatsApp. Por isso, me diz qual o número
          do seu celular?
        </p>

        <p className="sub-title">
          Não se preocupe! Seu número será utilizado
          exclusivamente para que eu demonstre a experiência MIA
        </p>

        <input
          type="text"
          name=""
          id=""
          value={wpp}
          className="name-input"
          onChange={(e) => setWpp(e.target.value)}
          placeholder="Escreva seu WhatsApp"
          onKeyDown={enterHandler}
        />

        <button
          type="button"
          onClick={() => setStep(6)}
          className="base-button next-btn"
        >
          Avançar
        </button>
      </section>
    </Fade>
  );
}

Step5.propTypes = {
  setStep: PropTypes.func.isRequired,
  wpp: PropTypes.string.isRequired,
  setWpp: PropTypes.func.isRequired,
};

export default Step5;
