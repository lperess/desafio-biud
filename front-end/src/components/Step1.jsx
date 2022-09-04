import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import wave from '../images/wave.png';
import './styles.css';

function Step1({ setStep, name, setName }) {
  const [invalidName, setInvalidName] = useState(false);

  const validateName = () => {
    if (name.length > 1) {
      setStep(2);
    } else {
      setInvalidName(true);
    }
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      validateName();
    }
  };

  const invalidNameElement = (
    <span className="sub-title">
      O nome deve ter pelo menos 2 caracteres
    </span>
  );

  return (
    <Fade in>
      <section className="step">
        <img
          src={wave}
          alt="waving hands emoji"
          className="emoji"
          width="60px"
        />

        <p className="title">Como você quer ser chamado?</p>

        <input
          type="text"
          name=""
          id=""
          value={name}
          className="name-input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Escreva seu nome"
          onKeyDown={enterHandler}
        />

        {invalidName && invalidNameElement}

        <button
          type="button"
          onClick={validateName}
          className="base-button next-btn"
        >
          Avançar
        </button>
      </section>
    </Fade>
  );
}

Step1.propTypes = {
  setStep: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default Step1;
