import React from 'react';
import Logo from '../assets/NAVTECNOME.png';

const Header = () => {
  return(
    <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <a href='#'>
              <img src={Logo} alt=""></img>
            </a>
          </div>
        </div>
    </header>
  )
};

export default Header;
