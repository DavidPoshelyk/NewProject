import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Header/Header";
import {Header} from "./components/Header/Header";
import {Contents} from "./components/Contents/Contents";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {Messages} from "./components/Messages/Messages";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";




function App() {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/contents' component={Contents}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/friends' component={Friends}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
