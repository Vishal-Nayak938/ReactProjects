import TodoItem from "./todoItem";

function Row2({todoI, onDeleteButton})
{
    
    return <>
    {todoI.map(items=> 
    <TodoItem key={items.todoName} todoName={items.todoName} todoDate={items.todoTarik} deleteClick={onDeleteButton}></TodoItem>)}
   
    
    </>
    
   
  
}

export default Row2;