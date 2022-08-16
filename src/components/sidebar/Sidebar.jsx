import { Home, Search, Notifications, MessageRounded, Bookmark, Person, Settings } from "@mui/icons-material"
import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <Home className="sidebarIcon" />
                      <span className="sidebarListItemText">ホーム</span>
                  </li>
                  <li className="sidebarListItem">
                      <Search className="sidebarIcon" />
                      <span className="sidebarListItemText">検索</span>
                  </li>
                  <li className="sidebarListItem">
                      <Notifications className="sidebarIcon" />
                      <span className="sidebarListItemText">通知</span>
                  </li>
                  <li className="sidebarListItem">
                      <MessageRounded className="sidebarIcon" />
                      <span className="sidebarListItemText">メッセージ</span>
                  </li>
                  <li className="sidebarListItem">
                      <Bookmark className="sidebarIcon" />
                      <span className="sidebarListItemText">ブックマーク</span>
                  </li>
                  <li className="sidebarListItem">
                      <Person className="sidebarIcon" />
                      <span className="sidebarListItemText">プロフィール</span>
                  </li>
                  <li className="sidebarListItem">
                      <Settings className="sidebarIcon" />
                      <span className="sidebarListItemText">設定</span>
                  </li>
              </ul>
              <hr className="sidebarHr" />
              <ul className="sidebarFriendList">
                  <li className="sidebarFriend">
                      <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg"
                      />
                  <span className="sidebarFriendName">kano</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg"
                      />
                  <span className="sidebarFriendName">tanaka</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg"
                      />
                  <span className="sidebarFriendName">sato</span>
                  </li>
              </ul>
        </div>
    </div>
  )
}
