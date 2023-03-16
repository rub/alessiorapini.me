import React, { useRef, useState, useEffect } from 'react';
import LinkGlassEfx from '../LinkGlassEfx/LinkGlassEfx';
import SplitIcon from '../SplitIcon/SplitIcon';
import {
  about,
  overlay,
  contentWrapper,
  content,
  paragraph,
  bigger,
  highlighted,
  learnMore,
  socialLinks,
  socialLink,
  socialIcon,
  copyright,
} from './About.module.css';

function About() {
  const overlayRef = useRef(null);
  const textInnerRef = useRef(null);
  const [increaseScrollValue, setIncreaseScrollValue] = useState(0);
  const [decreaseScrollValue, setDecreaseScrollValue] = useState(100);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    setTextHeight(textInnerRef.current?.offsetHeight || 0);
    const handleResize = () =>
      setTextHeight(textInnerRef.current?.offsetTop || 0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight - textHeight;
      const scrollPosition = window.pageYOffset;
      const percentage = (scrollPosition / maxScroll) * 100;
      setIncreaseScrollValue(Math.min(Math.max(0, percentage), 100));
      setDecreaseScrollValue(Math.max(Math.min(100, 100 - percentage), 0));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textHeight]);

  useEffect(() => {
    const requestRef = requestAnimationFrame(() => {
      // eslint-disable-next-line no-unused-expressions
      overlayRef.current &&
        (overlayRef.current.style.clipPath = `polygon(0 0, ${increaseScrollValue}% 0, ${increaseScrollValue}% 25%, 0 25%, 0 50%, ${decreaseScrollValue}% 50%, ${decreaseScrollValue}% 25%, 100% 25%, 100% 50%, ${increaseScrollValue}% 50%, ${increaseScrollValue}% 75%, 0 75%, 0 100%, ${decreaseScrollValue}% 100%, ${decreaseScrollValue}% 75%, 100% 75%, 100% 100%, 0 100%)`);
    });
    return () => cancelAnimationFrame(requestRef);
  }, [increaseScrollValue, decreaseScrollValue]);

  return (
    <div className={about}>
      <div className={overlay} ref={overlayRef} />
      <div className={contentWrapper}>
        <div className={content} ref={textInnerRef}>
          <p className={paragraph}>
            Hello there!
            <br />
            It&apos;s great to meet you!
          </p>
          <p className={`${paragraph} ${bigger}`}>
            My name is <span className={highlighted}>Alessio Rapini</span>, and
            I&apos;m an{' '}
            <span className={highlighted}>experienced UX designer</span> with a
            diverse interdisciplinary background and a deep empathy for people.
          </p>
          <p className={paragraph}>
            As the Lead Designer at{' '}
            <LinkGlassEfx
              to="https://evonove.it/"
              isInline
              newTab
              label="Evonove"
            />
            , I work closely with a team of engineers, and I&apos;m responsible
            for{' '}
            <span className={highlighted}>
              crafting the user experience of web and mobile applications
            </span>
            . I&apos;m also involved in creating and evolving{' '}
            <span className={highlighted}>Design Systems</span>. My design
            approach is always human-centric, taking into account both
            users&apos; needs and business goals.
          </p>
          <p className={paragraph}>
            Throughout my career, I&apos;ve also developed UIs using modern
            technology stacks. As a{' '}
            <span className={highlighted}>designer who can also code</span>,
            I&apos;m able to{' '}
            <span className={highlighted}>
              interact with engineers at a deep level
            </span>
            , bridging the gap between creativity and feasibility.
          </p>
          <p className={paragraph}>
            In recent years, I&apos;ve been working mostly as a vendor UX
            designer and UI engineer on{' '}
            <span className={highlighted}>United Nations projects</span>.
            Collaborating with cross-functional, multicultural, and highly
            skilled teams, I&apos;m involved in impactful services that align
            with both user needs and the UN mission. Through my work, I&apos;ve
            been helping to improve the lives of people around the world and
            contribute to a better future. This experience has sharpened my
            collaboration and problem-solving skills, allowing me to approach
            design challenges with creativity and strategic thinking.
          </p>
          <div className={learnMore}>
            <p className={paragraph}>You can learn more on:</p>
            <ul className={socialLinks}>
              <li className={socialLink}>
                <SplitIcon
                  className={socialIcon}
                  url="https://www.linkedin.com/in/alessiorapini/"
                  name="linkedin"
                  description="View my Linkedin profile"
                  openInNewTab
                />
              </li>
              <li className={socialLink}>
                <SplitIcon
                  className={socialIcon}
                  url="https://www.behance.net/AlessioRapini"
                  name="behance"
                  description="View my Behance profile"
                  openInNewTab
                />
              </li>
              <li className={socialLink}>
                <SplitIcon
                  className={socialIcon}
                  url="https://github.com/rub"
                  name="github"
                  description="View my Github profile"
                  openInNewTab
                />
              </li>
            </ul>
          </div>
          <p className={paragraph}>
            Or drop me an{' '}
            <LinkGlassEfx
              to="mailto:hello@alessiorapini.me"
              isInline
              email
              label="email"
            />
            . Let&apos;s chat!
          </p>
          <p className={copyright}>Designed and built by Alessio Rapini</p>
        </div>
      </div>
    </div>
  );
}

export default About;
