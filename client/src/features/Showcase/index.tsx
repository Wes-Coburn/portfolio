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
          {/* 
          <Button
            href={deployLinkURL}
            target="_blank"
            variant="contained"
            size="large"
            color="inherit"
          >
            Deployment
          </Button>
          <Button
            href={codeLinkURL}
            target="_blank"
            variant="contained"
            size="large"
            color="inherit"
          >
            Code
          </Button>
          */}
          <a href={deployLinkURL} target="_blank" rel="noreferrer">
            Deployment
          </a>
          <br />
          <a href={codeLinkURL} target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
        <div className={styles.ShowcaseContent}>
          {isVideo ? (
            // controlsList="noFullScreen" // seems to have no effect
            <video src={src} autoPlay muted loop>
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
