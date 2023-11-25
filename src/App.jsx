import React, { useState } from 'react';
import { Steps, Button, Flex,Form } from 'antd';
import StepOne from 'Components/StepOne.jsx';
import StepTwo from 'Components/StepTwo.jsx';
import StepThree from 'Components/StepThree.jsx';
import StepFour from 'Components/StepFour.jsx';
const App = () => {
  const [state, setState] = useState({
    step: 0,
    formData:{}
  });
  const { step,formData } = state;
  const nextStep = () => setState((p) => ({ ...p, step: step + 1 }));
  const prevStep = () => setState((p) => ({ ...p, step: step - 1 }));
  
 
  return (
    <div style={{ width: 1500, margin: 'auto', paddingTop: '3em' }}>
      <div style={{ float: 'right', marginBottom: 20 }}>
        <Flex justify="space-between" gap={12}>
          <Button type="primary" onClick={nextStep}>
            Next
          </Button>
          <Button type="primary" onClick={prevStep}>
            Prev
          </Button>
        </Flex>
      </div>
      <Steps
        current={state.step}
        items={[
          {
            title: 'Start',
          },
          {
            title: 'In Progress',
          },
          {
            title: 'Almost Done ',
          },
          {
            title: 'Finish',
          },
        ]}
      />
      <div style={{marginTop:40}}>
      {
        { 0: <StepOne  />, 1: <StepTwo />, 2: <StepThree />, 3: <StepFour  /> }[
          step
        ]
      }
      </div>
    </div>
  );
};

export default App;
