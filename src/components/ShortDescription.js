import React from 'react';
import './ShortDescription.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function ShortDescription({
    lightBg = false,
    topLine = 'Introduction',
    lightText = true,
    lightTextDesc = true,
    headline = 'Fit World Gym',
    description = 'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
    buttonLabel = 'Join Now',
    img = 'images/9Round.jpg',
    alt = 'Credit Card',
    imgStart = ''
}) {
    return (
        <>
            <div
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>

                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <div className="mybtn">
                                    <Button className='btn'
                                        buttonStyle='btn--outline'
                                        buttonSize='btn--large'
                                        Link="./sign-up">
                                        {buttonLabel}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShortDescription;