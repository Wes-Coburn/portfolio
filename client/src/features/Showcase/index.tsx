import { Fade } from 'react-awesome-reveal';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';
import ccn from '../../utils/createClassName';

interface IProps {
  src: string;
  title: string;
  description: string | Array<string>;
  deployLinkUrl?: string;
  codeLinkUrl?: string;
  viewLinkUrl?: string;
  isVideo?: boolean;
  delay?: number;
}

const containerClassName = ccn([
  'max-w-full rounded-md border-4 border-solid border-white',
  'bg-gray-900 shadow-2xl shadow-gray-900 transition-all duration-200 hover:shadow-orange-700',
  'text-center text-gray-100 lg:max-w-[45%]',
]);

const descriptionClassName = ccn([
  'flex min-h-16 flex-col',
  'items-center justify-center px-8 text-left lg:px-12 xl:px-16',
]);

const buttonContainerClassName = ccn`m-6 flex flex-col items-center justify-center gap-3 md:flex-row`;
const buttonClassName = ccn`rounded-lg bg-black p-3 text-white hover:bg-gray-700`;
const mediaContainerClassName = ccn`mx-auto mb-6 max-w-[75%] border-4 border-solid border-white`;

const renderIfExists = (
  linkUrl: string | undefined,
  text: string,
  title: string,
) => {
  if (linkUrl) {
    return (
      <a
        href={linkUrl}
        title={title}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName}
      >
        {text}
      </a>
    );
  }
  return '';
};

export default function Showcase({
  src,
  title,
  description,
  deployLinkUrl,
  codeLinkUrl,
  viewLinkUrl,
  isVideo,
  delay,
}: IProps) {
  return (
    <div className={containerClassName}>
      <Fade delay={delay} fraction={0.3} triggerOnce>
        <div>
          <h2 className="p-3 text-2xl font-bold">{title}</h2>
          <div className={descriptionClassName}>
            <ul className="list-circle">
              {useMemo(() => {
                return typeof description === 'string' ? (
                  <li>{description}</li>
                ) : (
                  (description as Array<string>).map((string) => (
                    <li key={uuidv4()}>{string}</li>
                  ))
                );
              }, [description])}
            </ul>
          </div>
        </div>
        <div className={buttonContainerClassName}>
          {renderIfExists(
            deployLinkUrl,
            'View Deployment',
            `View deployment for ${title}`,
          )}
          {renderIfExists(codeLinkUrl, 'View Code', `View code for ${title}`)}
          {renderIfExists(viewLinkUrl, 'View Project', `View ${title}`)}
        </div>
        <div className={mediaContainerClassName}>
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
  deployLinkUrl: '',
  codeLinkUrl: '',
  viewLinkUrl: '',
  isVideo: false,
  delay: 0,
};
