import React from 'react';
import './forum.css';
import axios from 'axios';
import { fetchPosts ,gettAllMessage }  from "../../features/forum.slice"
import { useDispatch , useSelector } from 'react-redux';
import { useState ,useEffect } from 'react';

function Forum() {

    const [newPost, setNewPost] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(gettAllMessage)
    // const handleAddPost = () => {
    //     dispatch(addPost(newPost));
    //     setNewPost('');
    //   };

      useEffect (()=> {
        dispatch(fetchPosts())
      },[])
      console.log(posts);
   
    
const handleAddPost = async(e)=> {
    e.preventDefault()
    // const response = await axios.post('https://raketa.madagascar.webcup.hodi.host/forum/post', {
    //   id_user : 5,
    //   message : newPost,
    //   date_creation: "2023-05-01T20:00:00.000Z"
    // });
    // return response.data;
    setNewPost('');
    console.log(newPost);
  };
  
   
  return (
    <div className="forum-container">
        <section className='section-top'>
            <form className="forum-form">
            <input type="text" placeholder="Contenu" value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
            <button type="submit" onClick={(e)=>handleAddPost(e)}>Publier</button>
        </form>
        </section>
        <section className='section-bottom'>
        {posts.map((post, index) => {
            return (
                <div key={index} className='card-forum'>
                    <div className="card-left">
                        <span>{index}</span>
                    </div>
                    <div className='card-right'> 
                        <p>{post.forum.message}</p>
                    </div>
                    
                </div>
            )
        })

        }
        </section>
      
      
    </div>
  );
}

export default Forum;
