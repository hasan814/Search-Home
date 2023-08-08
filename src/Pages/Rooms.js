import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import RoomContainer from '../Components/RoomContainer';


const Rooms = () => {
    return (
        <div>
            <Hero className='roomsHero'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </div>
    );
};

export default Rooms;