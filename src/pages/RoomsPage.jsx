import { useParams } from 'react-router-dom';
import rooms from '../components/rooms';

const RoomsPage = () => {

  const { data } = useParams();
  console.log(rooms)

  const room = rooms.find(room => room.id === parseInt(data));

  return (
    <div>
      <h1>Room Page</h1>
      {room ? (
        <div>
          <h2>{room.name}</h2>
          <p>Location: {room.location}</p>
          <p>Type: {room.type}</p>
          {/* Display other room details as needed */}
        </div>
      ) : (
        <p>Room not found</p>
      )}
    </div>
  );
}

export default RoomsPage;
