import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/State/state";


let renderDom = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App addMessage={store.addMessage.bind(store)} newChangeMessage={store.newChangeMessage.bind(store)} addposts={store.addPosts.bind(store)}   newChangePost={store.newChangePost.bind(store)}  state={store.GetState()}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom()
store.subscriber(renderDom)