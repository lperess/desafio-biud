import React, { useState } from 'react';
import Step1 from '../../components/Step1';
import Step2 from '../../components/Step2';
import Step3 from '../../components/Step3';
import Step4 from '../../components/Step4';
import Step5 from '../../components/Step5';
import Step6 from '../../components/Step6';
import './styles.css';

function Registration() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [wpp, setWpp] = useState('');

  const steps = {
    1: <Step1 setStep={setStep} name={name} setName={setName} />,
    2: <Step2 setStep={setStep} name={name} />,
    3: <Step3 setStep={setStep} setBusiness={setBusiness} />,
    4: <Step4 setStep={setStep} name={name} business={business} />,
    5: <Step5 setStep={setStep} wpp={wpp} setWpp={setWpp} />,
    6: <Step6 name={name} business={business} />,
  };

  return (
    <main id="main-registration">
      {steps[step]}
    </main>
  );
}

export default Registration;
