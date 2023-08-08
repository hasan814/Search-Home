import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { RoomConsumer } from '../Context';
import { withRoomConsumer } from '../Context';

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if(loading){
        return <h1>Loading ...</h1>
    }
    return(
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer);





// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import { RoomConsumer } from '../Context';


// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value =>{
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <h1>Loading ...</h1>
//                 }
//                 return(
//                     <div>
//                         Hello from rooms Container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     );
// };


// export default RoomContainer;