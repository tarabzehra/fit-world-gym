import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our EPIC Gym Facilities!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/color-darbell-plates.jpg'
                            text='we provide range of DUMBELLS starting from 1kg to 70kg'

                        />
                        <CardItem
                            src='images/sauna.jpg'
                            text='having a luxury SAUNA is great oppurtunity! dont miss it.'

                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/changing-room.jpg'
                            text='keep your belongings safe in our LOCKER + CHANGING room'

                        />
                        <CardItem
                            src='images/machines.jpg'
                            text='Experience worldclass FITNESS EQUIPMENTS in your own town'

                        />
                        <CardItem
                            src='images/treadmill.jpg'
                            text='dont miss the oppurtunity to enjoy losing your weight on our electric TREADMILLS '

                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;