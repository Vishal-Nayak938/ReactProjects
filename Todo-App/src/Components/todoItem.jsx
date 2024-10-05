

function TodoItem({todoName,todoDate})
{
    return <>
     <div class="row">

    <div class="col-4" >   {todoName}  </div>
    <div class="col-4"> {todoDate} </div>
    <div class="col-2">
    <button type="button" className="btn btn-dark">Delete</button>
   </div>
   </div>
    </>
}
export default TodoItem;