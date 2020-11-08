import React from 'react';
import './errorMessage.css';
import img from './1.png';
const ErrorMessage = () => {
    return (
        <div className="error">
            <img src={img} alt='error'></img>
            <p>Ошибка запроса</p>
        </div>
    )
}

export default ErrorMessage;