import React from "react";


export interface Todo {
    id: string;
    title: string;
    description: string;
};

interface Context {
    todos: Todo[];
    addTask: (title: string, description: string) => void;
};

const TodoContext = React.createContext<Context>({
    todos: [],
    addTask: (title: string, description: string) => {}
});

export default TodoContext;
