import React from 'react';
import {Link} from 'react-router-dom';

function ChillPage() {
    return (
        <div>
            <h1>Chill</h1>
            <Link onClick={() => window.open('https://soundcloud.com/tanookidaniel', '_blank')}>MUSIC REF</Link>
        </div>
    );
}

export default ChillPage; 