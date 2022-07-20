import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'A list of projects i have completed',
    },
    { name: 'Resume', description: 'My resume' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}        
      </main>
    </div>
  );
  
}

export default App;
