import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



export type TypeDialogsItemData = {
    id: string
    name: string
}
let DialogsItemData:Array<TypeDialogsItemData> = [
    {id: "1", name: 'Kiriil'},
    {id: "2", name: 'vitali'},
    {id: "3", name: 'Andrey'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
    {id: "4", name: 'Pavel'},
]
export  type  TypeMessagesData ={
    messages: string
}
let MessagesData: Array<TypeMessagesData>= [
    { messages:"hhjyibi"},
    { messages:"hbuvuy"},
    { messages:"jhbiyvi"},
    { messages:"hbiyvy"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"},
    { messages:"hhjyibi"}
]
export type TypeDataItem = {
    item: boolean,
    like: number,
    info: string
}
let DataPosts: Array<TypeDataItem> = [
    {item: false, like: 8, info: 'vgvgvktuv'},
    {item: true, like: 1, info: 'kbibib'},
    {item: false, like: 10, info: 'jhvbyvyiv'},
    {item: true, like: 88, info: 'it kamasutra'},
    {item: false, like: 908, info: 'React Dom'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={DialogsItemData} messages={MessagesData} posts={DataPosts}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
