import { Fade } from 'react-awesome-reveal';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer role="contentinfo" className={styles.Footer}>
      <Fade>
        <p>&copy; 2023 Wesley H.G. Coburn</p>
        <a
          href="https://linkedin.com/in/Wes-Coburn"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/Wes-Coburn
        </a>
        <a
          href="https://github.com/Wes-Coburn"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Wes-Coburn
        </a>
      </Fade>
    </footer>
  );
}
