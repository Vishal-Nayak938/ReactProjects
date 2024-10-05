
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../Components/header'
import SideBar from '../Components/sideBar'
import Form from '../Components/Form'
import Footer from '../Components/footer'
import PostList from '../Components/PostList'
import { useState } from 'react'
import PostListProvider from '../store/post-list-store'
function App() {
  
  const [selectedTab,setSelectedTab]= useState('Home');



  return  <PostListProvider>
    <div className='AppContainer'>
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></SideBar>
<div className='Content'>
   <Header></Header>
   
    {selectedTab=== 'Create Post' ? <Form></Form> : <PostList></PostList> }
   <Footer></Footer>
   </div>

   </div>

   </PostListProvider>

}

export default App
