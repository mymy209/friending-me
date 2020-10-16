import React from 'react';
import {Link} from 'react-router-dom';
import PlayMusic from '../../components/PlayNostalgia/PlayNostalgia';
import ChillGif from '../../components/ChillGif/ChillGif';

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

function ChillPage() {
    let music = MUSIC[Math.floor(Math.random() * MUSIC.length)];

    return (
        <div>
            <h1>Chill</h1>
            <ChillGif />
            <PlayMusic />
            <Link onClick={() => window.open('https://soundcloud.com/tanookidaniel', '_blank')}>MUSIC REF</Link>
        </div>
    );
}

export default ChillPage; 