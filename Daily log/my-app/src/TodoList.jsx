import React, { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';


const initialTodos = [
    { id: 1, text: '犬の散歩', completed: false },
    { id: 2, text: '猫の散歩', completed: false },
    { id: 3, text: '牛の散歩', completed: true },
    { id: 4, text: '鳥の散歩', completed: false },
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
            <TodoForm />
        </List>
    );
}
