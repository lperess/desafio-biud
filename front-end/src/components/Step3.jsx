import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import briefcase from '../images/briefcase.png';
import hamburger from '../images/hamburger.png';
import pill from '../images/pill.png';
import tshirt from '../images/tshirt.png';
import './styles.css';

function Step3({ setStep, setBusiness }) {
  const handleClick = (business) => {
    setStep(4);
    setBusiness(business);
  };

  return (
    <Fade in>
      <section className="step">
        <img
          src={briefcase}
          alt="smiling emoji"
          className="emoji"
          width="60px"
        />

        <p className="title">
          Vamos supor que você queira otimizar o marketing de uma empresa. Qual seria?
        </p>

        <button
          type="button"
          className="base-button options-btn"
          onClick={() => handleClick('hamburgueria')}
        >
          <img src={hamburger} alt="hamburger emoji" width="15px" />
          <span className="btn-span">Hamburgueria</span>
        </button>

        <button
          type="button"
          className="base-button options-btn"
          onClick={() => handleClick('drogaria')}
        >
          <img src={pill} alt="pill emoji" width="15px" />
          <span className="btn-span">Drogaria</span>
        </button>

        <button
          type="button"
          className="base-button options-btn"
          onClick={() => handleClick('loja de roupas')}
        >
          <img src={tshirt} alt="t-shirt emoji" width="15px" />
          <span className="btn-span">Loja de Roupas</span>
        </button>
      </section>
    </Fade>
  );
}

Step3.propTypes = {
  setStep: PropTypes.func.isRequired,
  setBusiness: PropTypes.func.isRequired,
};

export default Step3;
