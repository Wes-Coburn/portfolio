/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Fade } from 'react-awesome-reveal';
import styles from './Showcase.module.css';

interface Props {
  src: string;
  title: string;
  description: string | Array<string>;
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
    <div
      className={styles.Showcase}
      onClick={() => {
        window.open(linkURL, '_blank');
        return false;
      }}
    >
      <Fade delay={delay} fraction={0.3} triggerOnce>
        <h2>{title}</h2>
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          (description as Array<string>).map((string) => (
            <p key={`key:${string}`}>{string}</p>
          ))
        )}
        <video className={styles.Video} src={src} autoPlay muted loop>
          <track kind="captions" />
          {title}
        </video>
      </Fade>
    </div>
  );
}

Showcase.defaultProps = {
  delay: 0,
};
