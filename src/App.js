import React from "react";
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

const App = () => {

    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice()
    }
        , []
    );

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const tempAdvice = response.data.slip.advice
                console.log(tempAdvice);
                setAdvice(tempAdvice);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">
                    {advice}
                </h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>Give me advice</span>
                </button>
            </div>
        </div>
        );
}

export default App;
