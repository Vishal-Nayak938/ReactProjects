// import {AiFillDelete} from 'react-icons/ai'
import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { postItem } from "../store/post-list-store";
const Post=({post})=>{

   let {deletePost}= useContext(postItem)

    return <>
    <div className="card extra" style={{width: '20rem',backgroundColor:'aqua'}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
   onClick={()=>deletePost(post.id)}
   >
   <RiDeleteBin5Line />
</span>
    </h5>
    <p className="card-text">{post.body}</p>

    {post.tags.map(tag=><span class="badge text-bg-primary tag" key={tag}>{tag}</span>)}
    <div class="alert alert-dark AlertMy" role="alert">{`Likes : ${post.reactions.likes} | Dislikes : ${post.reactions.dislikes}`}</div>
  </div>
</div>
    </>
}

export default Post