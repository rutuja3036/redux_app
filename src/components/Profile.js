import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
     const user= useSelector((state) => state.user.value);
     const themecolor= useSelector((state) => state.theme.value);
    
    return (
        <div style = {{ color:themecolor}}>
            <h1>Profile Page</h1>
            <p> Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.name}</p>
        </div>
    );
}

export default Profile;
