import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./components/State/state";




ReactDOM.render(
  <React.StrictMode>
    <App friend={state.FriendsData} dialogs={state.DialogsData} messages={state.MessagesData} posts={state.DataPosts}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
