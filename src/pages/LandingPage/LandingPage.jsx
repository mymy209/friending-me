import React from 'react';
import Advice from '../../components/Advice/Advice';
import './LandingPage.css';

const LandingPage = (props) => {
  let display = props.user ?
    <div>
      <h1>WELCOME, {props.user.name}</h1>
      <Advice />
    </div>
    :
    <div>
            <h1>Friending-Me</h1>
            <div class="landingPageCardContainer">
              <div class="landingPageCard fade-in">
                <p>Come swing by and take a break.</p> 
                <p>It's easy to niglect yourself when life gets crazy and plows over you.</p>
                <p>This a private space where you can open up to yourself.</p>
                <p>How are you feeling? Do you want to set any goals?</p>
                <p>Or if you're tired, you can just chill while listening to some lofi music.</p>
                <p>Wouldn't hurt to become friends with yourself, right?</p>
                <p>So go ahead and give yourself a try, and welcome to Friending-Me.</p>
              </div>
            </div>
      </div>;

  return (
    <div>
      {display}
    </div>
  );
};

export default LandingPage;