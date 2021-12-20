import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Redux";


let renderDom = (state: any) => {

    ReactDOM.render(
        <React.StrictMode>
            <App  dispatch={store.dispatch.bind(store)}  state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderDom(state)
})