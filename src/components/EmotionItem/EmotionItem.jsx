import React from 'react';

function EmotionItem(props) {
    return (
        <button 
            value={props.emotion} 
            onClick={props.handleClick}
        >
            <img src={props.EMOTIONS[props.emotion].pic} alt="emotion"/>
        </button>
    )
}


export default EmotionItem;