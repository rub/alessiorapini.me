import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  buttonCursorWrapper,
  buttonCursor,
  buttonCursorInner,
  mainWrapper,
} from './CustomCursor.module.css';

function map(from, to, value) {
  return to[0] + ((value - from[0]) * (to[1] - to[0])) / (from[1] - from[0]);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ButtonCursor({ children }) {
  const wrapper = React.useRef(null);
  const circle = React.useRef(null);
  const circleInner = React.useRef(null);
  // const info = React.useRef(null);
  let circleBounds;

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
  });

  useEffect(() => {
    function updateMousePos() {
      if (!wrapper.current) {
        return;
      }

      if (vars.current.isInWrapper) {
        window.requestAnimationFrame(() => {
          // Recurse over this same function,
          // as soon as the browser renders the next frame.
          updateMousePos();
        });
        // TODO: Set button cursor opacity to 0.9 here
      } else {
        vars.current.isFollowing = false;
        // TODO: Here remove the opacity
      }

      vars.current.circleX +=
        (vars.current.newMouseX - vars.current.circleX) * 0.15;
      vars.current.circleY +=
        (vars.current.newMouseY - vars.current.circleY) * 0.15;

      const newDX = vars.current.circleX - vars.current.newMouseX;
      const newDY = vars.current.circleY - vars.current.newMouseY;

      const rotation = (Math.atan2(newDY, newDX) * 180) / Math.PI;

      const clampedDX = clamp(Math.abs(newDX), 0, 125);
      const clampedDY = clamp(Math.abs(newDY), 0, 125);

      const mappedX = map([0, 125], [0, 0.3], clampedDX);
      const mappedY = map([0, 125], [0, 0.3], clampedDY);

      vars.current.curScaleX +=
        (vars.current.newScaleX - vars.current.curScaleX) * 0.15;

      const scaleX = vars.current.curScaleX + Math.min(mappedX + mappedY, 0.7);
      const scaleY =
        vars.current.isInsideLink || vars.current.curScaleX > 1.05
          ? scaleX
          : scaleX + (1 - scaleX);

      circle.current.style.transform = `translate3d(${vars.current.circleX.toFixed(
        2
      )}px, ${vars.current.circleY.toFixed(
        2
      )}px, 0) rotate3d(0, 0, 1, ${rotation}deg) scale3d(${scaleX}, ${scaleY}, 1)`;

      // Current
      const offsetX = vars.current.isHoveringLink
        ? (vars.current.mouseX -
            (vars.current.curActiveLink.linkBounds.left +
              vars.current.curActiveLink.linkBounds.width / 2)) *
          0.3
        : 0;
      const offsetY = vars.current.isHoveringLink
        ? (vars.current.mouseY -
            (vars.current.curActiveLink.linkBounds.top +
              vars.current.curActiveLink.linkBounds.height / 2)) *
          0.3
        : 0;

      vars.current.linkOffsetX += (offsetX - vars.current.linkOffsetX) * 0.1;
      vars.current.linkOffsetY += (offsetY - vars.current.linkOffsetY) * 0.1;

      const newBtnOffsetX = vars.current.isHoveringLink
        ? (vars.current.mouseX -
            (vars.current.curActiveLink.linkBounds.left +
              vars.current.curActiveLink.linkBounds.width / 2)) *
          0.35
        : 0;
      const newBtnOffsetY = vars.current.isHoveringLink
        ? (vars.current.mouseY -
            (vars.current.curActiveLink.linkBounds.top +
              vars.current.curActiveLink.linkBounds.height / 2)) *
          0.35
        : 0;

      vars.current.btnOffsetX +=
        (newBtnOffsetX - vars.current.btnOffsetX) * 0.1;
      vars.current.btnOffsetY +=
        (newBtnOffsetY - vars.current.btnOffsetY) * 0.1;
    }

    // function snapCursor(e) {
    //   clearTimeout();
    //   vars.current.isInsideLink = true;
    //   vars.current.isHoveringLink = true;

    //   vars.current.curActiveLink = {
    //     linkBounds: e.currentTarget.getBoundingClientRect(),
    //   };

    //   vars.current.newScaleX = 0.5; // itemBounds.width / circleBounds.width
    //   circleInner.current.style.backgroundColor = 'rgba(204, 255, 40, 0.5)';

    //   // add new event listener for mouse out
    //   info.current.addEventListener(
    //     'mouseleave',
    //     () => {
    //       vars.current.newScaleX = 1;
    //       vars.current.isHoveringLink = false;
    //       circleInner.current.style.backgroundColor = 'rgba(204, 255, 40, 0.5)';

    //       setTimeout(() => {
    //         vars.current.isInsideLink = false;
    //       }, 200);
    //     },
    //     { once: true }
    //   );
    // }

    circleBounds = circle.current.getBoundingClientRect();

    wrapper.current.addEventListener('mousemove', (e) => {
      vars.current.newMouseX = e.clientX - circleBounds.width / 2;
      vars.current.newMouseY = e.clientY - circleBounds.height / 2;

      vars.current.mouseX = e.clientX;
      vars.current.mouseY = e.clientY;
    });

    wrapper.current.addEventListener('mouseenter', () => {
      if (vars.current.isFollowing) {
        return;
      }
      vars.current.isInWrapper = true;
      updateMousePos();
      vars.current.isFollowing = true;
    });

    wrapper.current.addEventListener('mouseleave', () => {
      vars.current.isInWrapper = false;
    });

    updateMousePos();
    vars.current.isFollowing = true;
  }, []);

  return (
    <div className={buttonCursorWrapper} ref={wrapper}>
      <div className={buttonCursor} ref={circle}>
        <div className={buttonCursorInner} ref={circleInner} />
      </div>
      <div className={mainWrapper}>{children}</div>
    </div>
  );
}

ButtonCursor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonCursor;
