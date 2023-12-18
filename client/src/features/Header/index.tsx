import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState<string>(styles.Header);
  const [profileLinkClass, setProfileLinkClass] = useState<string>(
    styles.noPointerEvents,
  );

  setTimeout(() => {
    setHeaderClasses(`${headerClasses} ${styles.HeaderShrink}`);
    setProfileLinkClass(styles.allPointerEvents);
  }, 3500);

  return (
    <header role="banner" className={headerClasses}>
      <Fade delay={500} cascade damping={1} triggerOnce>
        <a
          className={profileLinkClass}
          href="https://www.linkedin.com/in/wes-coburn/"
          title="LinkedIn profile"
          target="_blank"
          rel="noreferrer"
        >
          <h1>Wesley Coburn</h1>
        </a>
        <h2>is a front-end web developer</h2>
        <h3>and this is his portfolio</h3>
      </Fade>
    </header>
  );
}
