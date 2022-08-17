import React, { useState, useEffect } from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./TimeLine.css"
import axios from "axios"

// import { Posts } from "../../dummyData.js"



export default function TimeLine({ username }) {
    const [posts, setPosts] = useState([]);


    //propsで渡されたusernameがあれば自身の投稿のみを表示、なければ全てを表示
    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
            ? await axios.get(`/posts/profile/${username}`)
            : await axios.get("/posts/timeline/62f98fb2bf45a1203e8d3be6");
            // postsにmongodbの投稿内容が格納
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

  return (
      <div className="timeline">
          <div className="timelineWrapper">
              <Share />
              { posts.map((post) => (
                  <Post post={post} key={ post._id } />
              ))}
          </div>
    </div>
  )
}
