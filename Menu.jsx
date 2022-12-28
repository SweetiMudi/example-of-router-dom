import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  
    return(
     <>
        <NavLink exact activeClassName="active_class" to="/">ABOUT US</NavLink> <br/>
        <NavLink exact activeClassName="active_class" to="/contact">CONTACT</NavLink> <br/>
     </>
    )
    };
export default Menu;



/* it will reload the page
import React from 'react';

const Menu = () => {
  
    return(
     <>
     <nav class="nav flex-column">
         <a class="nav-link active" aria-current="page" href="/">About</a><br/>
         <a class="nav-link" href="/contact">Contact</a><br/>
         <a class="nav-link" href="/*"></a>
        
     </nav>
     </>
    )
    };
export default Menu;
*/
