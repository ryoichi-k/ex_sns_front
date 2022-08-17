import { MoreVert } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import "./Post.css"
import axios from "axios"

// import { Users } from "../../dummyData.js"

export default function Post({ post }) {
    //画像パス
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    //いいね
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)


    const [user, setUser] = useState({});

    //useEffect第２引数を空にすることでマウント時に１回だけ呼ばれるようになる
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users/${post.userId}`);
            setUser(response.data);
        };
        console.log(user);
        fetchUser();
    }, []);

    //いいね数の増減
    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="postProfileImg" />
                        <span className="postUserName">{ user.username }</span>
                        <span className="postDate">{post.date}</span>
                </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
          </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                        <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className="likeIcon" onClick={() => handleLike()}/>
                        <span className="postLikeCounter">{ like }人がいいねを押しました！</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}:コメント</span>
                </div>
            </div>
        </div>
      </div>
  )
}
