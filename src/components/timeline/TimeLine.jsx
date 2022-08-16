import React from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./TimeLine.css"
import { Posts } from "../../dummyData.js"



export default function TimeLine() {
  return (
      <div className="timeline">
          <div className="timelineWrapper">
              <Share />
              { Posts.map((post) => (
                  <Post post={post} key={ post.id } />
              ))}
          </div>
    </div>
  )
}
