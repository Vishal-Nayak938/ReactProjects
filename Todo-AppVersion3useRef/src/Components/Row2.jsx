import TodoItem from "./todoItem";
import { useContext } from "react";
import { TodoItemsName } from "../store/todo-items-store";

function Row2()
{
    const {item}=useContext(TodoItemsName)


    return <>
    {item.map(items=> 
    <TodoItem key={items.todoName} todoName={items.todoName} todoDate={items.todoTarik} ></TodoItem>)}
   
    
    </>
    
   
  
}

export default Row2;