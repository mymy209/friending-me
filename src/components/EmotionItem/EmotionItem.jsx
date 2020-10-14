import React from 'react';

function EmotionItem(props) {
    return (
    <button><img src={props.EMOTIONS[props.emotion].pic} alt="emotion"/></button>
    )
}


export default EmotionItem;