/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Fade } from 'react-awesome-reveal';
import styles from './Showcase.module.css';

interface Props {
  src: string;
  title: string;
  description: string;
  linkURL: string;
  delay?: number;
}

export default function Showcase({
  src,
  title,
  description,
  linkURL,
  delay,
}: Props) {
  return (
    <Fade delay={delay} fraction={0.3} triggerOnce>
      <div
        className={styles.Showcase}
        onClick={() => {
          window.open(linkURL, '_blank');
          return false;
        }}
      >
        <p>{title}</p>
        <p>{description}</p>
        <video className={styles.Video} src={src} autoPlay muted loop>
          <track kind="captions" />
          {title}
        </video>
      </div>
    </Fade>
  );
}

Showcase.defaultProps = {
  delay: 0,
};
