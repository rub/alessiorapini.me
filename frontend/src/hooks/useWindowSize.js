import { useState, useEffect } from "react"

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  function debounce(fn, ms) {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }

  useEffect(() => {
    const handleResize = debounce(
      () =>
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        }),
      2000
    )

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
