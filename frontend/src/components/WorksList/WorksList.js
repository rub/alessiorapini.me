import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"

import useWindowSize from "../../hooks/useWindowSize"

import {
  worksWrapper,
  worksListWrapper,
  work,
  workFixed,
  workSlicedTop,
  workSlicedBottom,
} from "./WorksList.module.css"

const WorksList = () => {
  const app = useRef()
  const scrollContainer = useRef()
  const slicedFirstTop = useRef()
  const slicedFirstBottom = useRef()
  const slicedSecondTop = useRef()
  const slicedSecondBottom = useRef()
  const slicedThirdTop = useRef()
  const slicedThirdBottom = useRef()
  const slicedFourthTop = useRef()
  const slicedFourthBottom = useRef()
  const slicedFifthTop = useRef()
  const slicedFifthBottom = useRef()

  // Hook to grab the window size
  const size = useWindowSize()

  useEffect(() => {
    document.body.style.height = `calc(${
      scrollContainer.current.getBoundingClientRect().height
    }px + 20vh)`
  }, [size.height])

  // Configs
  const skewConfigs = useMemo(
    () => ({
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  )

  // Scrolling
  const skewScrolling = useCallback(() => {
    if (!scrollContainer.current) {
      return
    }
    // Set current to the vertical scroll amount
    skewConfigs.current = window.scrollY
    // Set Previous to the previous scroll position
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

    // Variables
    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 40

    // Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, calc(20vh - ${skewConfigs.rounded}px), 0) skewY(${skew}deg)`

    // Sliced text transition on scroll
    const moveSlicedTopText = `translate3d(0, calc(0px - ${
      acceleration * 125
    }px), 0)`
    const moveSlicedBottomText = `translate3d(0, calc(0px + ${
      acceleration * 125
    }px), 0)`

    // Move sliced text on scroll
    slicedFirstTop.current.style.transform = moveSlicedTopText
    slicedFirstBottom.current.style.transform = moveSlicedBottomText
    slicedSecondTop.current.style.transform = moveSlicedTopText
    slicedSecondBottom.current.style.transform = moveSlicedBottomText
    slicedThirdTop.current.style.transform = moveSlicedTopText
    slicedThirdBottom.current.style.transform = moveSlicedBottomText
    slicedFourthTop.current.style.transform = moveSlicedTopText
    slicedFourthBottom.current.style.transform = moveSlicedBottomText
    slicedFifthTop.current.style.transform = moveSlicedTopText
    slicedFifthBottom.current.style.transform = moveSlicedBottomText

    // Loop skew effect
    requestAnimationFrame(() => skewScrolling())
  }, [size.width, skewConfigs])

  // Run scrollrender once page is loaded
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [skewScrolling])

  return (
    <div className={worksWrapper} ref={app}>
      <ul className={worksListWrapper} ref={scrollContainer}>
        <li className={work}>
          <span className={workFixed}>Sanctuary</span>
          <span className={workSlicedTop} ref={slicedFirstTop}>
            Sanctuary
          </span>
          <span className={workSlicedBottom} ref={slicedFirstBottom}>
            Sanctuary
          </span>
        </li>
        <li className={work}>
          <span className={workFixed}>Chubby Bird</span>
          <span className={workSlicedTop} ref={slicedSecondTop}>
            Chubby Bird
          </span>
          <span className={workSlicedBottom} ref={slicedSecondBottom}>
            Chubby Bird
          </span>
        </li>
        <li className={work}>
          <span className={workFixed}>Parallel</span>
          <span className={workSlicedTop} ref={slicedThirdTop}>
            Parallel
          </span>
          <span className={workSlicedBottom} ref={slicedThirdBottom}>
            Parallel
          </span>
        </li>
        <li className={work}>
          <span className={workFixed}>Veracchi Mobili</span>
          <span className={workSlicedTop} ref={slicedFourthTop}>
            Veracchi Mobili
          </span>
          <span className={workSlicedBottom} ref={slicedFourthBottom}>
            Veracchi Mobili
          </span>
        </li>
        <li className={work}>
          <span className={workFixed}>PCB AR</span>
          <span className={workSlicedTop} ref={slicedFifthTop}>
            PCB AR
          </span>
          <span className={workSlicedBottom} ref={slicedFifthBottom}>
            PCB AR
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WorksList
