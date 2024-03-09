import { useContext, useEffect } from "react"
import Post from "./Post"
import {PostList as PostListData} from "../../store/posts-list-store"
import DeletPostConfirm from "./deletPostConfirm"
import Welcomemessage from "./welcomemessage"
import { IoIosRefresh } from "react-icons/io";
import Spinner from "../loading/spinner"

const PostLists = ({results,onDataFetch}) => {
  const {postList,isDelete,fetchPost,isSpinner,setSpinner}= useContext(PostListData);
  useEffect(()=>{
   // setSpinner(true);
    console.log('spinner')
    if(results.length>0){
    fetchPost(results);
    
    }
  },[])
  
  return (
    <>
    {isDelete && <DeletPostConfirm setIsDelete={() => { }} />}
    {isSpinner&&<Spinner/>}

     {postList.map((obj)=> <Post key={obj.post_id} post={obj}/>)}
     {/* {fetchPost(results)} */}
     <button onClick={(e)=>onDataFetch()} type="button" class="btn btn-primary d-flex align-items-center mx-auto" style={{gap:'5px'}}>
  <IoIosRefresh />
  Refresh Page
</button>
    </>
  )
}

export default PostLists
