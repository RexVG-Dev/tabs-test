import React from 'react';
import {Nav} from 'react-bootstrap';

const Home = () => {
  return(
    <div>
      <h2>Desarrollo de tablas</h2>
      <p>Proyecto realizado con React, donde muestra la creación de tablas mediante dos aproches</p>
      <p>Contacto: 
        <Nav.Link href="https://www.linkedin.com/in/rexvargasgodinez/">Linkedin</Nav.Link>
        <Nav.Link href="https://github.com/TyrannusRex">Github</Nav.Link>
      </p>
    </div>
  );
}

export default Home;