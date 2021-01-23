import React from 'react';
import ReactPlayer from 'react-player';
import './Experience.css';

function Experience() {
    return (
        <div className='experience-darkBg'>
            <h1>EXPERIENCE</h1>
            <div className='video-player'>
                <ReactPlayer controls
                    width='900px'
                    height='500px'
                    url='https://www.youtube.com/watch?v=lDECBe_lphU' />
            </div>
        </div>
    );
}

export default Experience;