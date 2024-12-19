import './main.css'
import React from 'react'
import Mainbanner from './Mainbanner';
import Bestitems from './Bestitems';
import Submenu from './Submenu';
import { isMobile } from 'react-device-detect';

function Body() {
  return (
    <>
        <div className='body'>

            <Mainbanner/>
            { isMobile ? <Submenu/> : <></> }            
            <Bestitems/>        
            
        </div>
    </>
  );
}

export default Body;
