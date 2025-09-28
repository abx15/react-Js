import React from 'react'
import { useState } from 'react'


const Profile = () => {

    const [profile, setProfile] = useState({
        name: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };


    return (
        <div>
            <h2>User Profile</h2>

            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name='name' value={profile.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Age: </label>
                <input type="number" name='age' value={profile.age} onChange={handleChange} />
            </div>

            <h3>Profile Information</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    )
}

export default Profile
