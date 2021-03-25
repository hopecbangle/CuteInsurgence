import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {} from 'react-bootstrap';

const AdminLogin = () =>{
    return(
        <div>
            <h1> AdminLogin.js </h1>
            <p><Link to= '/admin/home'>Admin Home</Link></p> 

        </div>
    )
};

export default AdminLogin;