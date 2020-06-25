import React, { useState, useEffect } from 'react';
    const Todo = ({ setHasCookie, removeCookie }) => {
        const [ todos, setTodos ] = useState(null);
        useEffect(() => {
            const abortController = new AbortController();
            const signal = abortController.signal;
            const getAllTodoApi = () => {
                return new Promise((resolve, reject) => {
                    fetch('/todos', {
                        signal: signal,
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json'
                    }
                    })
                        .then(res => resolve(res.json()))
                        .catch(err => reject(err));
                    });
                    };
                const onTodoLoad = async () => {
                    try {
                        const response = await getAllTodoApi();
                        if (response.error === 'token expired') {
                            setHasCookie(false);
                        } else {
                        setTodos(response.todos);
                        }
                    } catch (err) {
                    console.log(err);
                    }
                };
            if (!todos) {
            onTodoLoad();
            }
            return () => {
            abortController.abort();
            }
        }, [ todos, setHasCookie ]);
        return (
            <div>
                <h2>
                Todo
                    <button
                        type="button"
                        onClick={removeCookie}
                    >
                        logout
                    </button>
                </h2>
            <ul>
                {todos && (
                    todos.map(todo => (
                        <li key={todo._id}>
                            <span>{todo.content}</span>
                            <span>{todo.created_at}</span>
                            <input
                            type="checkbox"
                            value={todo.complete}
                            />
                        </li>
                    ))
                )}
                </ul>
            </div>
        );
    };
export default Todo;
