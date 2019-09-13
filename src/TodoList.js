import React from 'react';
import Todo from './Component'


export default function TodoList (props) {
    return (
        <TodoList>{props.key} {props.title}</TodoList>
    )
}
