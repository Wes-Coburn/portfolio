import { Fade } from 'react-awesome-reveal';
// import Button from '@mui/material/Button';
import styles from './Showcase.module.css';

interface Props {
  src: string;
  title: string;
  description: string | Array<string>;
  deployLinkURL: string;
  codeLinkURL: string;
  isVideo?: boolean;
  delay?: number;
}

export default function Showcase({
  src,
  title,
  description,
  deployLinkURL,
  codeLinkURL,
  isVideo,
  delay,
}: Props) {
  return (
    <div className={styles.Showcase}>
      <Fade delay={delay} fraction={0.3} triggerOnce>
        <div className={styles.ShowcaseDescription}>
          <h2>{title}</h2>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            (description as Array<string>).map((string) => (
              <p key={`key:${Math.random().toString(36).slice(2, 7)}`}>
                {string}
              </p>
            ))
          )}
        </div>
        <div className={styles.ShowcaseLinks}>
          <a
            href={deployLinkURL}
            title={`View deployment for ${title}`}
            target="_blank"
            rel="noreferrer"
          >
            View Deployment
          </a>
          <br />
          <a
            href={codeLinkURL}
            title={`View code for ${title}`}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className={styles.ShowcaseContent}>
          {isVideo ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              disablePictureInPicture
              disableRemotePlayback
              playsInline
            >
              <track kind="captions" />
              {title}
            </video>
          ) : (
            <img src={src} alt={title} />
          )}
        </div>
      </Fade>
    </div>
  );
}

Showcase.defaultProps = {
  isVideo: false,
  delay: 0,
};
