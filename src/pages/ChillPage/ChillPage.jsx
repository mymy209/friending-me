import React from 'react';
import {Link} from 'react-router-dom';
import PlayMusic from '../../components/PlayNostalgia/PlayNostalgia';
import ChillGif from '../../components/ChillGif/ChillGif';


function ChillPage() {
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