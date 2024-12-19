import './main.css'
import React from 'react'

function Headers() {
  const logo = 'https://www.venus-eshop.co.kr/images/kcommon/web/images/local/header_logo.png';
  
  return (
    <header className="header">
        <div>
            <img src={logo}/>
        </div>
    </header>
  );
}

export default Headers;
