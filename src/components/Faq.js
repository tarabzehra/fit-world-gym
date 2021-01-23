import React from 'react';
import './Faq.css';

function Faq() {
    return (
        <div className='faq-container'>
            <h1>FAQS</h1>
            <div className='faq1'>
                <p className='question'>Q:How do I join Fitworld GYM?</p>
                <p>A:It’s a really simple registration process
                and it’s all handled here on our website or
                via kiosks located at the entrance to our gym.
                Joining Fitworld will take you 5 minutes tops!
                There are no contracts so you don't have to flip through lots of pages while standing at the reception desk area
                     (as we don't have that either)! All you need is some basic personal details like name, address, email and mobile phone number and then your bank card for payment.</p>
            </div>
            <div className='faq2'>
                <p className='question'>Q:What equipment is available at Fitworld?</p>
                <p>A:We literally have 100’s of pieces of equipment. From mutiple cardio machines such as treadmills, steppers, stairmasters, cross trainers and rowers, to a wide variety of resistance machines for every body part. We boast the best free weights areas, full of olympic bars, muti racks, benches, squat racks, bumper plates and lots of dumbbells. The heaviest dumbbell is 60 kg.</p>
            </div>
            <div className='faq3'>
                <p className='question'>Q:Is there a suana and changing room available at Fitworld?</p>
                <p>A:Yes we have seperate male and female changing rooms with saunas in each for added comfort. We provide showers and lockers inside the changing rooms. Members use the lockers only when in the building and a padlock is required for locking. You can bring your own or we sell padlocks in our vending machines. Shower gels or shampoo are not provided in the showers.</p>
            </div>
        </div>
    );
}

export default Faq;