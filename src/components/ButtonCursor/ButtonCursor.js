import React from "react"

import styles from "./ButtonCursor.module.css"

function map(from, to, value) {
  return to[0] + ((value - from[0]) * (to[1] - to[0])) / (from[1] - from[0])
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

const ButtonCursor = () => {
  const wrapper = React.useRef(null)
  const circle = React.useRef(null)
  const text = React.useRef(null)
  let circleBounds

  const vars = React.useRef({
    mouseX: 0,
    newMouseX: 0,
    mouseY: 0,
    newMouseY: 0,
    circleX: 0,
    circleY: 0,
    dX: 0,
    dY: 0,
    inWrapper: false,
    preventCursorMovement: false,
    curScaleX: 1,
    newScaleX: 1,
  })

  function updateMousePos() {
    if (vars.current.inWrapper) {
      window.requestAnimationFrame(() => {
        updateMousePos()
      })
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
    let scaleY = vars.current.curScaleX > 1.05 ? scaleX : scaleX + (1 - scaleX)

    circle.current.style.transform = `translate3d(${vars.current.circleX.toFixed(
      2
    )}px, ${vars.current.circleY.toFixed(
      2
    )}px, 0) rotate3d(0, 0, 1, ${rotation}deg) scale3d(${scaleX}, ${scaleY}, 1)`

    text.current.style.transform = `translate3d(${vars.current.circleX.toFixed(
      2
    )}px, ${vars.current.circleY.toFixed(2)}px, 0)`
  }

  React.useEffect(() => {
    circleBounds = circle.current.getBoundingClientRect()

    wrapper.current.addEventListener("mousemove", e => {
      vars.current.newMouseX = e.clientX - circleBounds.width / 2
      vars.current.newMouseY = e.clientY - circleBounds.height / 2

      vars.current.mouseX = e.clientX
      vars.current.mouseY = e.clientY
    })

    wrapper.current.addEventListener("mouseenter", e => {
      vars.current.inWrapper = true

      updateMousePos()
    })

    wrapper.current.addEventListener("mouseleave", e => {
      vars.current.inWrapper = false
    })
  }, [])

  return (
    <div className={styles.ButtonCursorWrapper} ref={wrapper}>
      <div className={styles.ButtonCursor} ref={circle}>
        <div className={styles.ButtonCursorInner} />
      </div>
      <div className={styles.ButtonCursorText} ref={text}>
        <p>Portfolio</p>
      </div>
    </div>
  )
}

export default ButtonCursor
