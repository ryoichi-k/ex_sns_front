import React, { useState, useEffect, useContext } from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./TimeLine.css"
import axios from "axios"
import { AuthContext } from "../../state/AuthContext"

export default function TimeLine({ username }) {
    const [posts, setPosts] = useState([]);

    const { user, dispatch } = useContext(AuthContext);

    //propsで渡されたusernameがあれば自身の投稿のみを表示、なければ全てを表示
    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
            ? await axios.get(`/posts/profile/${username}`)
            : await axios.get(`/posts/timeline/${user._id}`);//ホームの場合、全員の投稿を表示
            // postsにmongodbの投稿内容が格納
            setPosts(
                response.data.sort((post1, post2) => {
                return new Date(post2.createdAt) - new Date(post1.createdAt);
            }))
        };
        fetchPosts();
        //プロフィールの時とホームの時の両方で発火
    }, [username, user._id]);

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
