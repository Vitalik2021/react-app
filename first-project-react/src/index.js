import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LeftTab from "./components/LeftTab";
import Header from "./components/Header";
import Main from "./components/Main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <Header/>
        <Main/>
        <LeftTab/>


    </React.StrictMode>
);

