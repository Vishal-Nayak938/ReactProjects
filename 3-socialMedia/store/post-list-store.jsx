import { Children, createContext, useReducer } from "react";
export const postItem=createContext({
    postList:[],addInitialPosts:()=>{},
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currPostList,action)=>{

    let newPostList=currPostList;
    if(action.type==='DELETE_ITEM'){
        newPostList=currPostList.filter(post=>post.id !== action.payload.postId)
    }
else if(action.type==='ADD_ITEM'){
    newPostList=[action.payload,...currPostList]
}
else if(action.type==='ADD_INITIAL_POSTS')
{
newPostList=action.payload.posts;
}
return newPostList
}

const PostListProvider=({children})=>{

const [postList,dispatchPostList]=useReducer(postListReducer,[])
// console.log(postList)
const addPost=(userId,title,NoOfReactions,Tags,Body)=>{
dispatchPostList({
    type:"ADD_ITEM",
    payload:{
        id:Date.now(),
        title:title,
        body:Body,
        reactions:NoOfReactions,
        userId:userId,
        tags:Tags
    }
})
}
const addInitialPosts=(posts)=>{

dispatchPostList({
    type:'ADD_INITIAL_POSTS',
    payload:{
        posts,
    }
})
}

const deletePost=(postId)=>{
    dispatchPostList({
        type:"DELETE_ITEM",
        payload:{
            postId,
        },
    })

}

return <postItem.Provider value={{
    postList:postList,
    addPost:addPost,
    addInitialPosts,
    deletePost:deletePost,
}}>{children}</postItem.Provider>
}

export default PostListProvider