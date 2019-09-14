import React from 'react'

const Animation = props => {

    return (
        <div className='homepage-how-gif'>
            <video 
                autoPlay
                loop
                playsInline
                src={props.src}
                poster={props.poster}
                className={props.className}
                id={props.id}
            >
            </video>
        </div>
    )
};

export default Animation;
