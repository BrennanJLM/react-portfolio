import React, { useState } from 'react';
import Modal from '../Modal';

const Portfolio = ({ category }) => {
 
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'HTML CSS Git Challenge: Code Refactor',
      description: 'Refractor code to meet accessibility standards'
    },
    {
      name: 'Advanced CSS Challenge: Professional Portfolio',
      description: 'Initial portfolio created with using just CSS, and HTMl'
    },
    {
      name: 'Server-Side APIs Challenge: Weather Dashboard',
      description: 'A weather dashboard that queries a weather API'
    },
    {
      name: 'Interactive Front-End Project',
      description: 'A webpage that allows you to access conversion rates, weather and time change in specific destination'
    },
    {
      name: 'Node.js Challenge: Professional README Generator',
      description: 'Create a README file, using Node.js'
    },
    {
      name: 'SQL Challenge: Employee Tracker',
      description: 'Create tables and rows to keep track and update employees'
    },
    
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    
  };

  return (
    <div>
    
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
