import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import smilingWithHands from '../images/smilingWithHands.png';
import './styles.css';

function Step2({ setStep, name }) {
  setTimeout(() => {
    setStep(3);
  }, 5000);

  return (
    <Fade in>
      <section className="step">
        <img
          src={smilingWithHands}
          alt="smiling emoji"
          className="emoji"
          width="60px"
        />

        <p className="title">
          Prazer,
          {' '}
          {name}
          !
        </p>

        <p className="text">
          Vou te mostrar o meu jeito de fazer marketing direcionado por dados.
        </p>
      </section>
    </Fade>
  );
}

Step2.propTypes = {
  setStep: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Step2;
