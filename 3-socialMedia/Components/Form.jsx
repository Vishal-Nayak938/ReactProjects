import { useContext, useRef } from "react"
import { postItem } from "../store/post-list-store"

function Form()
{
  let {addPost}=useContext(postItem)
  let UserIdElement=useRef();
  let TitleElement=useRef();
  let NoOfReactionsElement=useRef();
  let TagsElement=useRef();
  let BodyElement=useRef();

const handleSubmit=(event)=>{
  event.preventDefault();
  const userId=UserIdElement.current.value;
  UserIdElement.current.value=""
  const title=TitleElement.current.value;
  TitleElement.current.value=""
  const NoOfReactions=NoOfReactionsElement.current.value;
  NoOfReactionsElement.current.value=""
  const Tags=TagsElement.current.value.split(" ");
  TagsElement.current.value=""
  const Body=BodyElement.current.value;
  BodyElement.current.value=""

addPost(userId,title,NoOfReactions,Tags,Body)
}

return <>
<form action="" className="create-post" onSubmit={handleSubmit}>
<div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">UserId</label>
    <div className="col-sm-10">
      <input type="text" className="form-control-plaintext Input" placeholder ="Add the User Id..." id="staticEmail" ref={UserIdElement} />
    </div>
  </div>
<div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" className="form-control-plaintext Input" placeholder ="Add the title..." id="staticEmail"  ref={TitleElement}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">NoOfReactions</label>
    <div className="col-sm-10">
      <input type="text" className="form-control-plaintext Input" placeholder ="Enter the number of reactions..." id="staticEmail" ref={NoOfReactionsElement} />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tags</label>
    <div className="col-sm-10">
      <input type="text" className="form-control-plaintext Input" placeholder ="Enter The Tags..." id="staticEmail"  ref={TagsElement}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Body</label>
    <textarea rows="4" className="Input" placeholder="tell me more about it
    "  ref={BodyElement}></textarea>
  </div>
  <div className="button">
  <button className="btn btn-success " >Post</button></div>
  </form>
  </> 
}
export default Form