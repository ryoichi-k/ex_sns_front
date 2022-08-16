import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
      <div className="rightbar">
          <div className="rightbarWrapper">
              <div className="evevtContainer">
                  <img src="./assets/star.png" alt="" className="starImg" />
                  <span className="eventText">
                      <b>フォロワー限定</b>イベント開催中！
                  </span>
              </div>
              <img src="assets/ad.jpeg" alt="" className="eventImg" />
              <h4 className="rightbarTitle">オンラインの友達</h4>
              <ul className="rightbarFriendList">
                  <li className="rightbarFriend">
                      <div className="rightbarProfileImgContainer">
                          <img src="./assets/person/1.jpeg" alt="" className="rightbarProfileImg" />
                          <span className="rightbarOnline"></span>
                      </div>
                      <span className="rightbarUsername">kano rrr</span>
                  </li>
                  <li className="rightbarFriend">
                      <div className="rightbarProfileImgContainer">
                          <img src="./assets/person/2.jpeg" alt="" className="rightbarProfileImg" />
                          <span className="rightbarOnline"></span>
                      </div>
                      <span className="rightbarUsername">tanaka</span>
                  </li>
              </ul>
              <p className="promotionTitle">プロモーション</p>
              <img src="./assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg"/>
              <p className="promotionName">ショッピング</p>
              <img src="./assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg"/>
              <p className="promotionName">カーショップ</p>
              <img src="./assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg"/>
              <p className="promotionName">会社</p>
          </div>
    </div>
  )
}
