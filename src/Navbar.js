import React from 'react';
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
  return (
        
      <div className='Navlinks'>
          <NavLink to='/products' activeStyle>Fetchproducts</NavLink>
          <NavLink to='/veggies' activeStyle>Vegetables</NavLink>
          <NavLink to='/fruits' activeStyle>Fruits</NavLink>
          <NavLink to='/' activeStyle>Login</NavLink>

        </div>
  );
};
  
export default Navbar;