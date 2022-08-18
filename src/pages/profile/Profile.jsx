import React, { useState, useEffect } from 'react'
import "./Profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from "axios"
import { useParams } from 'react-router-dom'


export default function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    //ユーザー情報をオブジェクト形式で管理
    const [user, setUser] = useState({});
    //URLパラメータwp取得するhook
    const username = useParams().username;

    //ユーザー情報取得のAPIを叩く
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data);
        };
        console.log(user);
        fetchUser();
    }, []);


  return (
    <>
        <Topbar />
        <div className="profile">
              <Sidebar />
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                          <img src={user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg" />
                          <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="profileUserImg" />
                      </div>
                      <div className="profileInfo">
                          <h4 className="profileInfoName">{ user.username }</h4>
                          <span className="profileInfoDesc">{ user.desc }</span>
                      </div>
                  </div>
                  <div className="profileRightBottom">
                    <TimeLine username={username} />
                    <Rightbar user={user} />
                  </div>
              </div>
        </div>
    </>
  )
}
