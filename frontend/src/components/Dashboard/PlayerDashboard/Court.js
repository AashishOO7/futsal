import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Court = () => {
  const [futsalList, setFutsalList] = useState([]);

  useEffect(() => {
    // Fetch futsal data from the backend and update futsalList state
  }, []);

  return (
    <div className="container">
      <h1>Court Listings</h1>
      <div className="row">
        {futsalList.map((futsal) => (
          <div className="col-md-4 mb-4" key={futsal.id}>
            <Card>
              <Card.Img variant="top" src={futsal.image_url} />
              <Card.Body>
                <Card.Title>{futsal.name}</Card.Title>
                <Card.Text>Contact: {futsal.contact}</Card.Text>
                <Card.Text>
                  Price per Hour:{' '}
                  {futsal.price.map((price, index) => (
                    <span key={index}>{price} </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Court;
