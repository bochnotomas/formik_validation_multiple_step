import React, { useState } from 'react';

import StepOne from './Form/StepOne';
import StepTwo from './Form/StepTwo';
import StepThree from './Form/StepThree';

function App() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      apiRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const apiRequest = (data) => {
    console.log('Form Submitted.', data);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return <div>{steps[currentStep]}</div>;
}

export default App;
