import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Room from './Room';


class FeatureRooms extends Component {
    static contextType = RoomContext
  render() {
    let {loading, featuredRooms: rooms} = this.context
    rooms = rooms.map((room) => {
        return(
            <Room key={room.id} room={room}/>
        )
    })
    return (
        <section className='featured-rooms'>
            <Title title='featured rooms'/>
            <div className="featured-rooms-center">
                {loading ? <h1>Loading ...</h1> : rooms}
            </div>
        </section>
    )
  }
}


export default FeatureRooms