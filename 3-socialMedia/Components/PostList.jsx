import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import {postItem} from '../store/post-list-store'
import WelcomeMessage from "./WelcomeMess"
import LoadingSpinner from "./LoadingSpinner"
const PostList=()=>{
   const {postList,addInitialPosts}= useContext(postItem)
   const [fetching,setFetching]=useState(true)

  useEffect(()=>{
   setFetching(true)
   const controller=new AbortController();
   const signal=controller.signal;

      fetch('https://dummyjson.com/posts',{signal})
   .then(res=>res.json())
   .then(data=>{
      addInitialPosts(data.posts)
      setFetching(false)
   });

return ()=>{//return when this componenet is dying 
   console.log('Cleaning Up useEffect...')
   controller.abort();
}

   },[])  
return <>
{fetching && <LoadingSpinner/>}
{!fetching && postList.length === 0 && <WelcomeMessage /> }
{!fetching && postList.map((po)=><Post key={po.id} post={po}/>)}


</>

}

export default PostList