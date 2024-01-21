import { Fade } from 'react-awesome-reveal';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Showcase from '../Showcase';
import ASSETS from '../../assets';
import ccn from '../../utils/createClassName';

const skills = [
  ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  ['React', 'Redux', 'React-Router'],
  ['Unit Testing', 'Responsive Design', 'GIT', 'TailwindCSS'],
];

interface Project {
  src: string;
  title: string;
  description: Array<string>;
  deployLinkUrl?: string;
  codeLinkUrl?: string;
  viewLinkUrl?: string;
  delay?: number;
  isVideo?: boolean;
}

const webAppProjects: Array<Project> = [
  {
    src: ASSETS.projects.portfolio.screenshot.src,
    title: 'Portfolio (this site)',
    description: [
      'TypeScript, React, Redux, React Router and TailwindCSS',
      'Built with Vite, tested with Vitest and React Testing Library.',
    ],
    codeLinkUrl: 'https://github.com/Wes-Coburn/portfolio',
    delay: 500,
  },
  {
    src: ASSETS.projects.noteTaker.screenshot.src,
    title: 'Note Taker',
    description: [
      'Full-stack note taking app',
      'FRONT-END: TypeScript, TailwindCSS, Redux and React Router',
      'BACK-END: JavaScript, Express, MongoDB and Node',
      'Authentication with JSON Web Tokens',
    ],
    deployLinkUrl: 'https://note-taker-1ej3.onrender.com',
    codeLinkUrl: 'https://github.com/Wes-Coburn/note-taker',
    delay: 500,
  },
  {
    src: ASSETS.projects.mernTemplate.screenshot.src,
    title: 'MERN Template',
    description: [
      'Template for a full-stack MERN app',
      'TypeScript, TailwindCSS, Redux and React Router',
      'Fully supported DarkMode (defaults to system)',
    ],
    deployLinkUrl: 'https://react-static-wo1g.onrender.com/',
    codeLinkUrl: 'https://github.com/Wes-Coburn/template-MERN-app',
    delay: 500,
  },
  {
    src: ASSETS.projects.jammming.screenshot.src,
    title: 'Spotify Client',
    description: [
      'Spotify client',
      'A React app that implements the Spotify API',
    ],
    deployLinkUrl: 'https://wes-coburn-jammmer.netlify.app/',
    codeLinkUrl: 'https://github.com/Wes-Coburn/jammming',
  },
];

const gameProjects: Array<Project> = [
  {
    src: ASSETS.projects.drifterGame.clip.src,
    title: 'Drifter Deckbuilding Game',
    description: [
      'Deckbuilding adventure made with Unity and C#',
      'Independently conceptualized, designed, and developed',
    ],
    deployLinkUrl: 'https://weslex555.itch.io/drifter-deckbuilding-game',
    codeLinkUrl: 'https://github.com/Wes-Coburn/Drifter-Deckbuilding-Game',
    isVideo: true,
  },
  {
    src: ASSETS.projects.drifterSite.screenshot.src,
    title: 'DrifterTheGame.com',
    description: [
      'Static website for the Drifter Deckbuilding Game',
      'Built from scratch with the basics - HTML, CSS, and JavaScript',
      'Uses SCSS for additional styling',
    ],
    deployLinkUrl: 'https://drifterthegame.com/',
    codeLinkUrl: 'https://github.com/Wes-Coburn/drifter-website',
  },
];

/*
const writingProjects: Array<Project> = [
  {
    src: '',
    title: 'Drifter Roleplaying Game',
    description: ['A TTRPG (tabletop roleplaying game)'],
    viewLinkUrl: '',
  },
];
*/

const projectShowcase = ({
  src,
  title,
  description,
  deployLinkUrl,
  codeLinkUrl,
  viewLinkUrl,
  delay,
  isVideo,
}: Project): JSX.Element => {
  return (
    <Showcase
      key={uuidv4()}
      src={src}
      title={title}
      description={description}
      deployLinkUrl={deployLinkUrl}
      codeLinkUrl={codeLinkUrl}
      viewLinkUrl={viewLinkUrl}
      delay={delay}
      isVideo={isVideo}
    />
  );
};

const skillsContainerClassName = ccn([
  'mx-auto w-fit border-4 border-solid border-gray-200 p-3',
  'text-gray-900 shadow-2xl shadow-gray-900 duration-200 hover:shadow-orange-700',
]);

const skillClassName = (isHighlightWord: boolean) => {
  const classNames = [
    'inline p-1 leading-relaxed transition-all duration-300 ease-out',
    'md:text-xl md:leading-loose',
  ];
  if (isHighlightWord) classNames.push(ccn('text-orange-700'));
  return ccn(classNames);
};

export default function Main() {
  const [highlightWord, setHighlightWord] = useState([0, 0]);

  const nextHighlightWord = useCallback(() => {
    setHighlightWord((previous) => {
      let outerIndex = previous[0];
      let innerIndex = previous[1];
      if (innerIndex === skills[outerIndex].length - 1) {
        innerIndex = 0;
        if (outerIndex === skills.length - 1) {
          outerIndex = 0;
        } else {
          outerIndex += 1;
        }
      } else {
        innerIndex += 1;
      }
      return [outerIndex, innerIndex];
    });
    setTimeout(() => nextHighlightWord(), 1200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      nextHighlightWord();
    }, 5000);
  }, [nextHighlightWord]);

  return (
    <main role="main">
      <div className="px-2 text-center text-gray-800">
        <Fade delay={800} triggerOnce>
          <p className="pb-6 pt-12 text-2xl">He is proficient with...</p>
        </Fade>
        <div className={skillsContainerClassName}>
          {useMemo(
            () =>
              skills.map((skillsList, outerIndex) => {
                const output = skillsList.map((skill, innerIndex) => (
                  <li
                    key={uuidv4()}
                    className={skillClassName(
                      highlightWord[0] === outerIndex &&
                        highlightWord[1] === innerIndex,
                    )}
                  >
                    &#x3c;{skill}&#x3e;
                  </li>
                ));
                return (
                  <ul key={uuidv4()} className="mx-auto w-fit">
                    {output}
                  </ul>
                );
              }),
            [highlightWord],
          )}
        </div>
        <Fade delay={1000} triggerOnce>
          <p className="pb-6 pt-12 text-2xl">
            Here are some of his projects...
          </p>
        </Fade>
        <Fade delay={1000} triggerOnce>
          <p className="pb-8 text-4xl font-bold">Web Apps</p>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-12">
        {useMemo(
          () => webAppProjects.map((project) => projectShowcase(project)),
          [],
        )}
      </div>
      <div className="pb-8 pt-12 text-center text-4xl font-bold text-gray-600">
        <Fade triggerOnce>
          <p>Games</p>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-12">
        {useMemo(
          () => gameProjects.map((project) => projectShowcase(project)),
          [],
        )}
      </div>
    </main>
  );
}
