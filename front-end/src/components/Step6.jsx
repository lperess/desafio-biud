import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Fade } from '@mui/material';
import wowface from '../images/wowface.png';
import iphone from '../images/iphone.png';
import './styles.css';

function Step6({ name, business }) {
  const navigate = useNavigate();

  return (
    <Fade in>
      <section className="step">
        <img
          src={wowface}
          alt="wowface emoji"
          className="emoji"
          width="60px"
        />

        <p className="title">
          Prontinho,
          {' '}
          {name}
          !
        </p>

        <p className="text">
          A experiência MIA que vai fazer sua
          {' '}
          {business}
          {' '}
          decolar começará nos próximos minutos
          em seu WhatsApp.
        </p>

        <button
          type="button"
          className="base-button recommendation-btn"
        >
          <img src={iphone} width="40px" alt="iphone 13 pro max" />
          <span className="btn-span">
            Indique um amigo e concorra a um iPhone 13 Pro Max
          </span>
        </button>

        <button
          type="button"
          className="finish-btn"
          onClick={() => navigate('/')}
        >
          Finalizar
        </button>
      </section>
    </Fade>
  );
}

Step6.propTypes = {
  name: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired,
};

export default Step6;
