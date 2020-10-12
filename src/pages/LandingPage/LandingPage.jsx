import React from 'react';
import Advice from '../../components/Advice/Advice';
import Steps from '../../components/Steps/Steps';

const LandingPage = (props) => {
  let display = props.user ?
    <div>
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
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