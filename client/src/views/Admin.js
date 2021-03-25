import React from 'react';
import PostForm from '../components/PostForm';
import AllSubmissions from '../components/AllSubmissions';


const Admin = () =>{
    return(
        <div>
            <h1>Views/Admin.js</h1>
                <div style= {{display: "flex", flexFlow: "row nowrap", justifyContent: "space-around", alignContent: "baseline", border: "3px solid black"
                }}>
                    
                    <PostForm />
                    <hr/>
                    <AllSubmissions />
                </div>
        </div>
    )
};

export default Admin;