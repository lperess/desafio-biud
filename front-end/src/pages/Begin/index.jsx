import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import logo from './icon-biud.svg';

function Begin() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="bg" />
      <div className="container">
        <img className="logo" src={logo} alt="Logo da BIUD" />
        <h2 className="heading">
          Melhor do que eu escrever um monte de coisa sobre a
          {' '}
          <span className="BIUD">BIUD</span>
          , é você viver a experiência!
        </h2>
        <button
          type="button"
          className="start-btn"
          onClick={() => navigate('/registration')}
        >
          <span>Começar</span>
        </button>
      </div>
    </main>
  );
}

export default Begin;
