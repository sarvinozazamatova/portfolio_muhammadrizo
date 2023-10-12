import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <React.Fragment>
            <div className="Navbar">
            <div className='naw'>
                    <NavLink  to={"/"}>Home</NavLink>
                    </div>
                    <div className='aboutNav'>
                    <NavLink to={"/about"}>About</NavLink>
                     </div>
                    <div className='contactNav'>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
        
        
           
            </div>
        </React.Fragment>
     )
}
 
export default Navbar;
