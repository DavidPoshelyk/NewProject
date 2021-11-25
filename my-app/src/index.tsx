import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPosts,
    newChange,
    newChangeMessage,
     state,
    subscriber,
} from "./components/State/state";


let renderDom = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App addMessage={addMessage} newChangeMessage={newChangeMessage} addposts={addPosts}  state={state}  newChange={newChange} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom()
subscriber(renderDom)