import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>TRAINERS</h1>

                    <div className='pricing__container'>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-6.jpg' />
                                <h4>THOMAS JONES</h4>
                                <h2>Head Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>8 year experience</li>
                                    <li>Physical education degree from australia</li>
                                    <li>3000 per month</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-7.jpg' />
                                <h4>WILL SMITH</h4>
                                <h2>Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>2 year experience</li>
                                    <li>professional training from canada</li>
                                    <li>2000 per month</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-8.jpg' />
                                <h4>JOEY SIMPSON</h4>
                                <h2>Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>3 year experience</li>
                                    <li>internatinal certified</li>
                                    <li>2500 per month</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='pricing__container'>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-9.jpg' />
                                <h4>MARTHA PARK</h4>
                                <h2>Head Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>7 year experience</li>
                                    <li>internatinal certified in boxing and yoga</li>
                                    <li>10,000 per month</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-10.jpg' />
                                <h4>ANA HILLS</h4>
                                <h2>Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>3 year experience</li>
                                    <li>trained from USA in weigth lifting</li>
                                    <li>2000 per month</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <img className="my_image" src='images/newface-2.jpg' />
                                <h4>SARA BROWN</h4>
                                <h2>Trainer</h2>
                                <ul className='pricing__container-features'>
                                    <li>4 year experience</li>
                                    <li>internatinal certified</li>
                                    <li>4000 per month</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Pricing;