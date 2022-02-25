import React, { useState } from 'react';

import './app.css';
import Navbar from './components/navbar/Navbar.jsx';
import Card from './components/card/Card';

const App = () => {

    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');

    return (
        <div className='container'>
            {user ? (
                <>
                    <Navbar />
                    <Card />
                    <span className='userName'>{user}</span>
                </>
            ) : (
                <div className='login'>
                    <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
                    <button onClick={() => setUser(username)} >Login</button>
                </div>

            )}
            
        </div>
    );
}

export default App;
