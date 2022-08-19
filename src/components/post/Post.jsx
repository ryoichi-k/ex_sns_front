import { MoreVert } from '@mui/icons-material'
import React, { useState, useEffect, useContext } from 'react'
import "./Post.css"
import axios from "axios"
// import {format} from "timeago.js"
// import { Link } from '@mui/material'
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

// import { Users } from "../../dummyData.js"

export default function Post({ post }) {
    //画像パス
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    //いいねの状態管理
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    //ユーザー情報をオブジェクト形式で管理
    const [user, setUser] = useState({});

    //下記のように書くと名前をcurrentUserに変更できて重複を回避できる
    const { user: currentUser } = useContext(AuthContext);

    //ユーザー情報取得のAPIを叩く
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId, user]);

    //いいね数の増減
    const handleLike = async () => {
        try {
            //いいねのAPIを叩く
            await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                    <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                            <img src={
                                user.profilePicture
                                ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="postProfileImg" />
                    </Link>
                    <span className="postUserName">{ user.username }</span>
                    <span className="postDate">{post.createdAt}</span>
                </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
          </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
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
