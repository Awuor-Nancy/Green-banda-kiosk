import React from 'react';
import { Link } from 'react-router-dom';
  
const Navbar = () => {
  return (
        
      <div className='NavLinks'>
          <Link exact to='/'>Login</Link>
          <Link to='/products'>Fetchproducts</Link>
          <Link to='/veggies'>Vegetables</Link>
          <Link to='/fruits'>Fruits</Link>

        </div>
  );
};
  
export default Navbar;