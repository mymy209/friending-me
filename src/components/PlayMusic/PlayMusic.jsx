import React from 'react';
import styles from './PlayMusic.module.css';

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

const MUSIC = [ 
  {
    name: '7th City Trip',
    url: seventh
  }, {
    name: 'Nostalgia',
    url: nostalgia
  }, {
    name: '12:00 AM',
    url: twelve
  },{
    name: 'i wish it were sunny',
    url: iWish
  },{
    name: 'Late Night Drives',
    url: late
  },{
    name: 'Lazy Feeling (feat. KVG)',
    url: lazy
  },{
    name: 'left without a word',
    url: left
  },{
    name: 'still on my mind',
    url: still
  }, {
    name: 'think i need a nap',
    url: think
  }, {
    name: 'thoughts & dreams',
    url: thoughts
  }
];

class PlayMusic extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    const music = MUSIC[Math.floor(Math.random() * MUSIC.length)];
    this.url = music.url;
    this.state.title = music.name;
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
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p className={styles.album}>DIARY 1</p>
        <div className={styles.space}>
          <button className={styles.button} onClick={this.play}>Play</button>
        </div>
        <div className={styles.space}>
          <button className={styles.button} onClick={this.pause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default PlayMusic;