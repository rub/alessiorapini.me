import React from "react"
import {
  workTitleWrapper,
  workNavTitle,
  workTitleFixed,
  workTitleSlicedTop,
  workTitleSlicedBottom,
} from "./WorkTitle.module.css"

export default WorkTitle = ({ title, slicedTopRef, slicedBottomRef }) => {
  return (
    <div className={workTitleWrapper}>
      <h1 className={workNavTitle}>{title}</h1>
      {/* <span className={workTitleSlicedTop} ref={slicedTopRef}>
        {title}
      </span>
      <span className={workTitleSlicedBottom} ref={slicedBottomRef}>
        {title}
      </span> */}
    </div>
  )
}
