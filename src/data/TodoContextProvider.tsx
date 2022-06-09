import { useState } from "react";
import TodoContext, { Todo } from "./todo-context";

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([{
        id: 'c1',
        title: 'First great daily note',
        description: "Awesome new note",
        // goals = []
    }]); // initially empty, but can have some initialized data
    
    const addTask = (title: string, description: string) => {
        const newTodo: Todo = {
            id: Math.random().toString(),
            title,
            description,
            //goals: []
        }

        //setnotes([...notes, newNote]); // Could do this, but may update wrong snapshot of context data
        setTodos((curTodos) => {
            return curTodos.concat(newTodo);
        });
    };

    return <TodoContext.Provider value={{
        todos,
        addTask
    }}>{props.children}</TodoContext.Provider>
};

export default TodoContextProvider;
