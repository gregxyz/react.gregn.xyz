import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import resolveConfig from 'tailwindcss/resolveConfig';
import styles from './Hero.module.scss';
import gsap from '../../global/gsap';
import { theme } from '../../tailwind.config.js';

const tailwindConfig = resolveConfig(theme);

const Hero = (blok) => {
  const reveal1 = useRef(null);
  const reveal2 = useRef(null);
  const reveal3 = useRef(null);
  const socials = useRef(null);
  const heroTitle = useRef(null);
  const heroTagline = useRef(null);
  const viewProjectsBtn = useRef(null);

  useEffect(() => {
    const screenLg = window.matchMedia(`(min-width: ${ tailwindConfig.theme.screens.lg })`).matches;
    const timeline = gsap.timeline();
    timeline.to(reveal1.current, {
      width: '100%',
      duration: 0.8,
      ease: 'cubicEaseSlowMiddle',
    })
      .to(reveal2.current, {
        width: '100%',
        duration: 0.8,
        ease: 'cubicEaseSlowMiddle',
      }, '-=0.4')
      .to(reveal3.current, {
        width: '100%',
        duration: 0.8,
        ease: 'cubicEaseSlowMiddle',
      }, '-=0.4')
      .set([reveal1.current, reveal2.current, reveal3.current], {
        left: 'auto',
      })
      .to(reveal1.current, {
        width: screenLg ? '50vw' : '21vw',
        duration: 0.8,
        ease: 'cubicEaseSlowMiddle',
      })
      .to(reveal2.current, {
        width: screenLg ? '35vw' : '16vw',
        duration: 0.8,
        ease: 'cubicEaseSlowMiddle',
      }, '-=0.4')
      .to(reveal3.current, {
        width: '10vw',
        duration: 0.8,
        ease: 'cubicEaseSlowMiddle',
      }, '-=0.4')
      .to(heroTitle.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.3,
          ease: 'cubicEaseSlowMiddle',
          axis: 'y',
        },
      }, '-=1')
      .to(socials.current, {
        opacity: 1,
        duration: 0.6,
      }, '-=0.6')
      .to(heroTagline.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }, '-=0.6')
      .to(viewProjectsBtn.current.children, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          ease: 'power3.in',
          axis: 'x',
        },
      }, '-=0.5')
      .set(viewProjectsBtn.current, {
        zIndex: 60,
        pointerEvents: 'auto',
      });
  });

  return (
    <section className={styles.hero}>
      {blok.content.socialLinks
      && (
        <ul
          ref={socials}
          className="socials absolute top-0 left-0 flex opacity-0 pt-6 pl-6 lg:pl-20 lg:pt-10"
        >
          {blok.content.socialLinks.map((social) => (
            <li
              key={social._uid}
              className="mr-5 text-lilac font-leon transition-colors ease-in-out duration-300 hover:text-primary"
            >
              <a
                rel="noreferrer"
                target="_blank"
                href={social.link.url}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col items-center px-6 lg:flex-row lg:px-20">
        <div className="flex-shrink-0 relative z-20 lg:w-3/5">
          <h1
            ref={heroTitle}
            className={` ${ styles['hero-title'] } text-3xl font-heading font-bold text-primary mb-2 lg:text-3.5vw`}
            dangerouslySetInnerHTML={{ __html: blok.content.title }}
          />
          <p
            ref={heroTagline}
            className={styles['hero-tagline']}
            dangerouslySetInnerHTML={{ __html: blok.content.description }}
          />
        </div>
      </div>
      <button
        type="button"
        ref={viewProjectsBtn}
        className={styles['view-projects-btn']}
      >
        <div>v</div><div>i</div><div>e</div><div>w</div> <div>p</div><div>r</div><div>o</div><div>j</div><div>e</div><div>c</div><div>t</div><div>s</div>
      </button>
      <div ref={reveal1} className={` ${ styles.reveal } ${ styles['reveal-1'] } bg-sky `} />
      <div ref={reveal2} className={` ${ styles.reveal } ${ styles['reveal-2'] } bg-cream `} />
      <div ref={reveal3} className={` ${ styles.reveal } ${ styles['reveal-3'] } bg-pink `} />
    </section>
  );
};

Hero.propTypes = {
  blok: PropTypes.shape({
    component: PropTypes.string,
  }),
};

export default Hero;
