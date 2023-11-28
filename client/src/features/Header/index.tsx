import { Fade } from 'react-awesome-reveal';
import styles from './Header.module.css';

export default function Header() {
  setTimeout(() => {
    const header = document.getElementsByTagName('header');
    header[0].style.minHeight = '20vh';
  }, 3500);

  return (
    <header role="banner" className={styles.Header}>
      <Fade delay={500} cascade damping={1} triggerOnce>
        <h1>Wesley Coburn</h1>
        <h2>is a front-end web developer</h2>
        <h3>and this is his portfolio</h3>
      </Fade>
    </header>
  );
}
