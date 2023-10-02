import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};