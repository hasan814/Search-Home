import React from 'react';
import Room from './Room';

const RoomList = ({rooms}) => {
    if(rooms.length === 0){
        return(
            <div className='empty-search'>
                <h3>Unfortunately no rooms match your search</h3>
            </div>
        )
    }
    const newList = rooms.map((item) => {
        return(
            <Room key={item.id} room={item}/>
        )
    })

    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {newList}
            </div>
        </section>
    );
};

export default RoomList;