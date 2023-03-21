import React,{ createContext,useContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoContext= createContext();

// veriyi sağlayacak provideryapılyoruz
export const TodoProvider =({children}) => {   
    const [filter, setFilter] = useState("all");
    const [todos,setTodos ] = useState([{
        // arry olduğu için [ ] bu şekilde yapıldı.
        id: 1,
        Text:"todo list yapılacak",
        completed: true,
    }
   
]);

const addTodo = (Text)=>
    setTodos((prev)=>[...prev, {id:uuidv4(), completed:false, Text}])
     // yazdıklarımızı ekranda göstermesini yapıyoruz.

    const toggleTodo = (id) =>{
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo)=> todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;
        

        setTodos(cloned_todos);
};
// yazdıklarımzın yapıldı olarak olmasını sağlıyoruz.

const onDestroy = (id) =>{
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo)=> todo.id === id);
    
    cloned_todos.splice(itemIndex,1) // splice yeni bir eleman eklediği gibi eleman silyeme yarıyor.
     setTodos(cloned_todos)
   
 // silme işelemini gerçekleştirriyoruz

  }

// tıkladığında çizik olmasını sağladık ve tıkladığımızda id sine ulaştık 
    const values ={
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        onDestroy,
        filter,
        setFilter,
    };
    // dışara aktarım

    return<TodoContext.Provider value={values}> {children} </TodoContext.Provider>
};

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context=== undefined){
        throw new Error("usetodo  hook todoprovider bileşeni içinde çağrılmalı")
    }
    return context;
};

