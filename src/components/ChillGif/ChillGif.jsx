import React from 'react';

const GIF = [
    "https://i.imgur.com/w1Otex8.gif",
    "https://i.imgur.com/CdhGyAk.gif",
    "https://i.imgur.com/zcstwfr.gif",
    "https://i.imgur.com/MzIuigq.gif",
    "https://i.imgur.com/YUGsLhc.gif",
    "https://i.imgur.com/gmeZlYR.gif",
    "https://i.imgur.com/19dq9h9.gif",
    "https://i.imgur.com/vww9aM2.gif",
    "https://i.imgur.com/9lD9H2N.gif",
    "https://i.imgur.com/VFmYViO.gif",
    "https://i.imgur.com/NEfhbjE.gif",
    "https://i.imgur.com/T1hDM7h.gif"
]

function ChillGif() {
    let gif = GIF[Math.floor(Math.random() * GIF.length)];
    return (
        <img width="450" src={gif} alt="gif"/>
    )
}

export default ChillGif;