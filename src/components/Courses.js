import React from 'react';
import './Courses.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Courses({
    lightBg = false,
    lightText = true,
    lightTextDesc = true,
    description = 'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
    buttonLabel = 'Join Now',
    img = 'images/img-4.jpg',
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
                                <div className='top-line'>Course #1</div>

                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    Barre3
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    Barre3 is a full-body balanced workout combining strength conditioning, cardio, and mindfulness. Our mission—and the driving factor behind every move we do in class—is to teach people to be balanced in body and empowered from within
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
                                <img src='images/Barre3.jpg' alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                            <div className='home__hero-img-wrapper'>
                                <img src='images/Zumba.jpg' alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>Course #2</div>

                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    Zumba
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    Zumba is a fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness.Zumba is an aerobic activity that can count toward the amount of aerobic activity recommended for most healthy adults by the Department of Health and Human Services.
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

                    </div>
                </div>
            </div>
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
                                <div className='top-line'>Course #3</div>

                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    Crossfit
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    CrossFit workouts are based on functional movements. These movements reflect elements of gymnastics, weightlifting, running, rowing, and endurance to increase overall fitness and athletic performance. Considering life’s core movements, CrossFit develops fitness, strength, and skill through constantly varied functional movements performed at high intensity.
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
                                <img src='images/Crossfit.jpg' alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;