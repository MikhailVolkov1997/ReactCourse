import React from 'react';
import TodoList from "./TodoList"
export default function Todo (goods) {
  
    return (
        <div>
        <h1>React</h1>
        <div>
       {  goods.goods.map((el,index) => {
            return <TodoList key={goods.id} title={goods.title} />
        } )}
        </div>
        </div>

    )
}