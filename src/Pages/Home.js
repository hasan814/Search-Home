import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeatureRooms from '../Components/FeatureRooms';



const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeatureRooms />
        </div>
    );
};

export default Home;