import React from 'react';

//music
import seventh from '../../sounds/7th City Trip.mp3';
import nostalgia from '../../sounds/Nostalgia.mp3';
import twelve from '../../sounds/12_00 AM.mp3';
import iWish from '../../sounds/i wish it were sunny.mp3';
import late from '../../sounds/Late Night Drives.mp3';
import lazy from '../../sounds/Lazy Feeling (feat. KVG).mp3';
import left from '../../sounds/left without a word.mp3';
import still from '../../sounds/still on my mind.mp3';
import think from '../../sounds/think i need a nap.mp3';
import thoughts from '../../sounds/thoughts & dreams.mp3';

const MUSIC = [seventh, nostalgia, twelve, iWish, late, lazy, left, still, think, thoughts];

class PlayMusic extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = MUSIC[Math.floor(Math.random() * MUSIC.length)];
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    // this.audio.onended = this.handleEnd;
    return (
      <div>
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

export default PlayMusic;