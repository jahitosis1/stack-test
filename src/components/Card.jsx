import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import rooms from '../components/rooms';

const Cards = ({ filter }) => {

  const RoomCard = ({ room }) => {
    return (
      <Link 
        to={`/view-room/${room.id}`}
        className="flex justify-center">
        <div className="hover:ease-in hover:scale-110 duration-300 card w-60 bg-[#235985] shadow-xl hover:brightness-90 border border-primary-700">
          <div className="card-body text-white">
            <div className="border border-accent-700 bg-accent-400 text-white font-bold flex justify-center w-3/4 rounded-xl">{room.type}</div>
            <h2 className="card-title">{room.name}</h2>
            <p>{room.location}</p>
          </div>
        </div>
      </Link>
    );
  };

  const filteredRooms = (rooms) => filter === 'All' ? rooms : rooms.filter(room => room.type === filter);

  const RoomList = ({ rooms }) => {
    return (
      <div className="flex flex-wrap justify-center gap-20">
        {filteredRooms(rooms).map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    );
  };

  RoomCard.propTypes = {
    room: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  };

  RoomList.propTypes = {
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <div>
      <RoomList rooms={rooms} />
    </div>
  );
};

Cards.propTypes = {
  filter: PropTypes.string,
};

export default Cards;
