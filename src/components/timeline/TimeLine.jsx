import React from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./TimeLine.css"

export default function TimeLine() {
  return (
      <div className="timeline">
          <div className="timelineWrapper">
              <Share />
              <Post />
          </div>
    </div>
  )
}
