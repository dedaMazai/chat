import React from 'react';
import Routes from '../routes';
import {useAuth} from '../../hooks/auth.hook';
import {AuthContext} from '../context/AuthContext';
import io from 'socket.io-client';

import './app.css';


function App () {
    const { token, login, logout, userId } = useAuth();
    const socket = io();
    // const isAuthenticated = !!token;
    const isAuthenticated = true;
    return (
        <AuthContext.Provider value={ { token, login, logout, userId, isAuthenticated } }>
            <Routes isAuthenticated={ isAuthenticated }/>
        </AuthContext.Provider>
    )
}

export default App