import React from 'react'
import { useTodo } from '../../Contexts/TodoContext';
import Item from './Item';

let filtered = null;

function List() {
    const {todos,filter} =useTodo();

    filtered = todos;

    if(filter !== "all"){  // burada filtreleme işlemi yapıyoruz. hepsini göster all basıldığında
      filtered = todos.filter((todo)=>  
      filter === "active"    // filter active ise false olanları göster değilse ise tru olanları göster yaptık
      ? todo.completed === false 
      : todo.completed === true   );
    }
    
  return (
    <ul className="todo-list">
       {filtered.map((todo)=>( 
		<Item key={todo.id} todo={todo}	/>
             
             ))}
		</ul>
  );
}

export default List