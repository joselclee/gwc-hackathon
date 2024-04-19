// import React, { useState, useEffect } from 'react';

// import Header from '../components/Header'
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import jsonData from '../data/dataset.json';

// const Calendar = () => {
//   return (
//     <div>
//         <Header />
//         <GridExample/>
//     </div>
//   )
// }

// function GridExample() {
//   return (
//     // <Row xs={1} md={4} className="g-4">
//     //   {Array.from({ length: 20 }).map((_, idx) => (
//     //     <Col key={idx}>
//     //       <Card>
//     //         <Card.Img variant="top" src="holder.js/100px160" />
//     //         <Card.Body>
//     //           <Card.Title>{jsonData.event['event-name']}</Card.Title>
//     //           <Card.Text>
//     //           {jsonData.event['start-time']} <br/><br/>
//     //             This is a longer card with supporting text below as a natural
//     //             lead-in to additional content. This content is a little bit
//     //             longer.
//     //           </Card.Text>
//     //         </Card.Body>
//     //       </Card>
//     //     </Col>
//     //   ))}
//     // </Row>
    
//   );
// }

// export default Calendar;

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header  from '../components/Header';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/dataset.json')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="Home">
        <Header/>
      {events.map(event => (
        <Card key={event.id}>
          <Card.Body>
            <Card.Title>{event['event-name']}</Card.Title>
            <Card.Text>
              Start Time: {event['start-time']}<br />
              End Time: {event['end-time']}<br />
              Location: {event.location}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Calendar;