import React from 'react';
import './Home.css';
import { Login } from './Login';
import { Register } from './Register';

export function HomePage(){
    return (
        <div className="home-page">
            <Login/>
        </div>
    );
}
