// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import Carousel from 'react-bootstrap/Carousel';
// import './Homepage.css';

// const Homepage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('/dataset.json')
//       .then(response => response.json())
//       .then(data => setEvents(data));
//   }, []);

//   return (
//     <div className="Home">
//       <Header />
//       <div className="featured">
//         Featured Events
//       </div>
//       <div className="carousel-container">
//         {events.map(event => (
//           <Carousel key={event.id}>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://source.unsplash.com/1600x900/?csun"
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>{event['event-name']}</h3>
//                 <p>
//                   Start Time: {event['start-time']}<br />
//                   End Time: {event['end-time']}<br />
//                   Location: {event.location}
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';

const Homepage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/dataset.json')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="Home">
      <Header />
      <div className="featured">
        Featured Events
      </div>
      <div className="carousel-container">
        <Carousel>
          {events.map(event => (
            <Carousel.Item key={event.id}>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/1600x900/?event"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{event['event-name']}</h3>
                <p>
                  Start Time: {event['start-time']}<br />
                  End Time: {event['end-time']}<br />
                  Location: {event.location}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Homepage;