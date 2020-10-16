import React from 'react';
import Advice from '../../components/Advice/Advice';
import Steps from '../../components/Steps/Steps';

const LandingPage = (props) => {
  let display = props.user ?
    <div>
      <h1>WELCOME, {props.user.name}</h1>
      <Advice />
    </div>
    :
    <div>
        <Steps />
    </div>;

  return (
    <div>
      {display}
    </div>
  );
};

export default LandingPage;