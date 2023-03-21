import React from 'react'
import { useTodo } from '../../Contexts/TodoContext';


function Item({todo}) {
    const{ onDestroy, toggleTodo} = useTodo();

    const onChange = (id) => toggleTodo(id);
    

    const onClick = (id) => onDestroy(id)
   
  return (
    <li key={todo.id}  className={todo. completed ? " completed" : ""}> 
            
               
			<div className="view">
				<input className="toggle" type="checkbox"
				checked= {todo. completed} 
                onChange={()=> onChange(todo.id)}  />
                {/* tıklandığında üstü çizili oluyor. */}
				<label > {todo.Text} </label>

				<button  className="destroy"  onClick={()=> onDestroy(todo.id)} ></button>
			</div> 
      {/* button bastığında silme işlemi */}
		
		</li>
  );
}

export default Item