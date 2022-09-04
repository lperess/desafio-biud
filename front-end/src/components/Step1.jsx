import React from 'react';
import PropTypes from 'prop-types';
import wave from '../images/wave.png';
import './styles.css';

function Step1({ setStep, name, setName }) {
  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      setStep(2);
    }
  };

  return (
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

      <button
        type="button"
        onClick={() => setStep(2)}
        className="base-button next-btn"
      >
        Avançar
      </button>
    </section>
  );
}

Step1.propTypes = {
  setStep: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default Step1;
