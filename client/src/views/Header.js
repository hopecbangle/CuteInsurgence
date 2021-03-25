import React from 'react';
import {navigate, Link} from '@reach/router';

const Header = () =>{
    return(
        <div style= {{display: "flex", flexFlow: "row nowrap", justifyContent: "space-around", alignContent: "baseline", border: "3px solid black"
        }}>
            <p><Link to= '/aboutus'>About Us</Link></p>
            <p><Link to= '/cuteinsurgence'>Home</Link></p> 
            <h1>Cute Insurgence!</h1>
            <p><Link to= '/admin/login'>Admin</Link></p> 
        </div>
    )
};

export default Header;