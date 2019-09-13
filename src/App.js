import React from 'react';
import Todo from "./Component"
import './App.css';

function App() {
  const goods = [
    {id:1, complited:false,title:"Buy milk"},
    {id:2, complited:false,title:"Buy cookies"},
    {id:3, complited:false,title:"Buy bred"},
    {id:4, complited:false,title:"Buy meet"}
  ]
  return (
    
      <Todo goods ={goods} />
  );
}

export default  App;