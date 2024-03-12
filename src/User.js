import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function User() {
    const {id}  = useParams();
    console.log(id)
    return (  
        <div>
            <h1>User {id}</h1>
            <Navbar/>
        </div>

    );
}
export default User;