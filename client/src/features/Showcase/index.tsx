import { Fade } from 'react-awesome-reveal';
// import Button from '@mui/material/Button';

interface Props {
  src: string;
  title: string;
  description: string | Array<string>;
  deployLinkURL: string;
  codeLinkURL: string;
  isVideo?: boolean;
  delay?: number;
}

const buttonClasses =
  'inline-block p-3 m-1 my-3 bg-gray-900 rounded-lg text-white hover:bg-gray-700';

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
    <div className="max-w-[500px] text-center rounded-md border-solid border-4 border-gray-900 hover:border-gray-400">
      <Fade delay={delay} fraction={0.3} triggerOnce>
        <div>
          <h2 className="p-3 text-2xl font-bold">{title}</h2>
          <div className="p-10 h-16 flex flex-col justify-center">
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
        </div>
        <div>
          <a
            href={deployLinkURL}
            title={`View deployment for ${title}`}
            target="_blank"
            rel="noreferrer"
            className={buttonClasses}
          >
            View Deployment
          </a>
          <a
            href={codeLinkURL}
            title={`View code for ${title}`}
            target="_blank"
            rel="noreferrer"
            className={buttonClasses}
          >
            View Code
          </a>
        </div>
        <div>
          {isVideo ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
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
