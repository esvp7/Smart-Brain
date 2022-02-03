import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.jpg';

const Logo = () => {

return (

   <div className='center ml4 mt0'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
       <div className="Tilt-inner">
       <img alt='Brain'src={Brain}/></div>
    </Tilt>
   </div>
		
		);
}

export default Logo;