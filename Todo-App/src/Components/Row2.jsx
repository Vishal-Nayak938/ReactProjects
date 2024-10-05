import TodoItem from "./todoItem";

function Row2({todoI})
{

  
    return <>
    {todoI.map(items => <TodoItem todoName={items.name} todoDate={items.date} ></TodoItem>)}
    
    </>
    
   
  
}

export default Row2;