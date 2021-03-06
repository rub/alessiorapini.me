import React from "react"

import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

import styles from "./ButtonCursor.module.css"

function map(from, to, value) {
  return to[0] + ((value - from[0]) * (to[1] - to[0])) / (from[1] - from[0])
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/**
 * Button cursor displays a button link to author's portfolio which follows
 * the cursor movement.
 */
const ButtonCursor = () => {
  const wrapper = React.useRef(null)
  const circle = React.useRef(null)
  const circleInner = React.useRef(null)
  const cursorLabel = React.useRef(null)
  const info = React.useRef(null)
  let circleBounds

  const vars = React.useRef({
    mouseX: 0,
    // Ensures that this code does not run unless it's in the browser
    // https://www.gatsbyjs.org/docs/debugging-html-builds/
    newMouseX:
      typeof document !== `undefined`
        ? document.documentElement.clientWidth / 2 - 50
        : 0,
    mouseY: 0,
    // Ensures that this code does not run unless it's in the browser
    // https://www.gatsbyjs.org/docs/debugging-html-builds/
    newMouseY:
      typeof document !== `undefined`
        ? document.documentElement.clientHeight - 326
        : 0,
    circleX: 0,
    circleY: 0,
    dX: 0,
    dY: 0,
    isFollowing: true,
    isInWrapper: true,
    isInsideLink: false,
    isHoveringLink: false,
    curActiveLink: {},
    linkOffsetX: 0,
    linkOffsetY: 0,
    btnOffsetX: 0,
    btnOffsetY: 0,
    curScaleX: 1,
    newScaleX: 1,
  })

  React.useEffect(() => {
    function updateMousePos() {
      if (!wrapper.current) {
        return
      }

      if (vars.current.isInWrapper) {
        window.requestAnimationFrame(() => {
          // Recurse over this same function,
          // as soon as the browser renders the next frame.
          updateMousePos()
        })
        // TODO: Set button cursor opacity to 0.9 here
      } else {
        vars.current.isFollowing = false
        // TODO: Here remove the opacity
      }

      vars.current.circleX =
        vars.current.circleX +
        (vars.current.newMouseX - vars.current.circleX) * 0.15
      vars.current.circleY =
        vars.current.circleY +
        (vars.current.newMouseY - vars.current.circleY) * 0.15

      let newDX = vars.current.circleX - vars.current.newMouseX
      let newDY = vars.current.circleY - vars.current.newMouseY

      let rotation = (Math.atan2(newDY, newDX) * 180) / Math.PI

      let clampedDX = clamp(Math.abs(newDX), 0, 125)
      let clampedDY = clamp(Math.abs(newDY), 0, 125)

      let mappedX = map([0, 125], [0, 0.3], clampedDX)
      let mappedY = map([0, 125], [0, 0.3], clampedDY)

      vars.current.curScaleX +=
        (vars.current.newScaleX - vars.current.curScaleX) * 0.15

      let scaleX = vars.current.curScaleX + Math.min(mappedX + mappedY, 0.7)
      let scaleY =
        vars.current.isInsideLink || vars.current.curScaleX > 1.05
          ? scaleX
          : scaleX + (1 - scaleX)

      circle.current.style.transform = `translate3d(${vars.current.circleX.toFixed(
        2
      )}px, ${vars.current.circleY.toFixed(
        2
      )}px, 0) rotate3d(0, 0, 1, ${rotation}deg) scale3d(${scaleX}, ${scaleY}, 1)`

      cursorLabel.current.style.transform = `translate3d(${vars.current.circleX.toFixed(
        2
      )}px, ${vars.current.circleY.toFixed(2)}px, 0)`

      //CURRENT
      let offsetX = vars.current.isHoveringLink
        ? (vars.current.mouseX -
            (vars.current.curActiveLink.linkBounds.left +
              vars.current.curActiveLink.linkBounds.width / 2)) *
          0.3
        : 0
      let offsetY = vars.current.isHoveringLink
        ? (vars.current.mouseY -
            (vars.current.curActiveLink.linkBounds.top +
              vars.current.curActiveLink.linkBounds.height / 2)) *
          0.3
        : 0

      vars.current.linkOffsetX += (offsetX - vars.current.linkOffsetX) * 0.1
      vars.current.linkOffsetY += (offsetY - vars.current.linkOffsetY) * 0.1

      let newBtnOffsetX = vars.current.isHoveringLink
        ? (vars.current.mouseX -
            (vars.current.curActiveLink.linkBounds.left +
              vars.current.curActiveLink.linkBounds.width / 2)) *
          0.35
        : 0
      let newBtnOffsetY = vars.current.isHoveringLink
        ? (vars.current.mouseY -
            (vars.current.curActiveLink.linkBounds.top +
              vars.current.curActiveLink.linkBounds.height / 2)) *
          0.35
        : 0

      vars.current.btnOffsetX += (newBtnOffsetX - vars.current.btnOffsetX) * 0.1
      vars.current.btnOffsetY += (newBtnOffsetY - vars.current.btnOffsetY) * 0.1
    }

    function snapCursor(e) {
      clearTimeout()
      vars.current.isInsideLink = true
      vars.current.isHoveringLink = true

      vars.current.curActiveLink = {
        linkBounds: e.currentTarget.getBoundingClientRect(),
      }

      vars.current.newScaleX = 0.5 // itemBounds.width / circleBounds.width
      circleInner.current.style.backgroundColor = "rgba(207, 222, 243, 0.5)"
      cursorLabel.current.style.color = "transparent"

      // add new event listener for mouse out
      info.current.addEventListener(
        "mouseleave",
        () => {
          vars.current.newScaleX = 1
          vars.current.isHoveringLink = false
          circleInner.current.style.backgroundColor = "rgba(207, 222, 243, 1)"
          cursorLabel.current.style.color = "inherit"

          setTimeout(() => {
            vars.current.isInsideLink = false
          }, 200)
        },
        { once: true }
      )
    }

    circleBounds = circle.current.getBoundingClientRect()

    wrapper.current.addEventListener("mousemove", e => {
      vars.current.newMouseX = e.clientX - circleBounds.width / 2
      vars.current.newMouseY = e.clientY - circleBounds.height / 2

      vars.current.mouseX = e.clientX
      vars.current.mouseY = e.clientY
    })

    wrapper.current.addEventListener("mouseenter", e => {
      if (vars.current.isFollowing) {
        return
      }
      vars.current.isInWrapper = true
      updateMousePos()
      vars.current.isFollowing = true
    })

    wrapper.current.addEventListener("mouseleave", e => {
      vars.current.isInWrapper = false
    })

    info.current.addEventListener("mouseenter", e => {
      snapCursor(e)
    })

    updateMousePos()
    vars.current.isFollowing = true
  }, [])

  return (
    <div className={styles.ButtonCursorWrapper} ref={wrapper}>
      <a
        href="https://www.behance.net/AlessioRapini"
        target="_blank"
        rel="noopener"
      >
        <div className={styles.ButtonCursor} ref={circle}>
          <div className={styles.ButtonCursorInner} ref={circleInner} />
        </div>
        <div className={styles.ButtonCursorLabel} ref={cursorLabel}>
          <p>Portfolio</p>
        </div>
      </a>
      <a
        href="https://www.behance.net/AlessioRapini"
        target="_blank"
        rel="noopener"
        className={styles.ButtonCursorMobile}
      >
        Portfolio
      </a>
      <div className={styles.info} ref={info}>
        <Header className={styles.homeHeader} />
        <Footer className={styles.homeFooter} />
      </div>
    </div>
  )
}

export default ButtonCursor
