import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Service/PlayerService/AuthContext';

const AgentDashboard = () => {
  const [futsalData, setFutsalData] = useState({
    name: '',
    contact: '',
    price: Array.from({ length: 16 }, () => ''),
    image: null,
  });

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFutsalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePriceChange = (index, value) => {
    setFutsalData((prevData) => ({
      ...prevData,
      price: prevData.price.map((p, i) => (i === index ? value : p)),
    }));
  };

  const handleImageChange = (e) => {
    setFutsalData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('localhost:5000/futsals/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(futsalData),
      });
  
      if (response.ok) {
        // Successfully sent data to the backend
        navigate('/schedule');
      } else {
        // Handle errors if needed
        console.error('Failed to send data to the backend');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Futsal Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={futsalData.name}
                onChange={handleChange}
                required
              />
              
            </Form.Group>
            <Form.Group controlId="contact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contact"
                value={futsalData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* <Form.Label>Price per Hour</Form.Label>
            {futsalData.price.map((price, index) => (
              <Form.Group key={index}>
                <Form.Control
                  type="number"
                  min="0"
                  name={`price[${index}]`}
                  value={price}
                  onChange={(e) => handlePriceChange(index, e.target.value)}
                  required
                /> */}
              {/* </Form.Group> */}
            
            {/* <Form.Group controlId="image">
              <Form.Label>Futsal Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />  </Form.Group> */}
            {/* Add other form groups here */}
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default AgentDashboard;
