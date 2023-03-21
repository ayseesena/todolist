import React from 'react'
import { useTodo } from './Contexts/TodoContext';

function ContentFooter() {
    const {todos,filter,setFilter,setTodos} = useTodo();
    
    const clearCompleted = ()=> {
        setTodos((prev)=> prev.filter((todo)=> !todo.completed))
    } // clearCompleted fonksiyonu oluşturduk.
    //yapılanları silme işlemi yapıyoruz.
    
  return (
    <footer  className="footer">
		
   
    <span className="todo-count">
        <strong >{todos.length} </strong>
        item {todos.length > 1 &&  "s"} left

        {/* burada kaç tane yapılması gereken görevin olduğunu yazıyoruz. item 1 tane olduğu tek olduğunu 1 den büyükse items yapıyoruz */}
    </span>

    
    <ul className="filters">
        <li>
            <a href="/#"
            onClick={()=> setFilter("all")
            }
            className={filter === `all` ? "selected" : ""}>all</a>
            {/* class verirken bir koşula göre verilmesi gerekiyor */}
        
        </li>
        <li>
            <a href="/#"
            onClick={()=> setFilter("active")
            }
            className={filter === `active` ? "selected" : ""}
               >Active</a>
        </li>
        <li>
            <a href="/#"
            onClick={()=> setFilter("completed")
            }
            className={filter === `completed` ? "selected" : ""}
                >Completed</a> 
                {/* filter kısmının kutularına tıklanır hal aldırdık */}
        </li>
    </ul>
  
    <button  className="clear-completed" onClick={()=> clearCompleted()} > Clear completed </button>
</footer>
  );
}

export default ContentFooter