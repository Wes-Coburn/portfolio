import { Fade } from 'react-awesome-reveal';
import { v4 as uuidv4 } from 'uuid';
import Showcase from '../Showcase';
import ASSETS from '../../assets';

const skills = [
  ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  ['React', 'Redux', 'React-Router'],
  ['Unit Testing', 'Responsive Design', 'GIT', 'TailwindCSS'],
];

interface Project {
  src: string;
  title: string;
  description: Array<string>;
  deployLinkURL: string;
  codeLinkURL: string;
  delay?: number;
  isVideo?: boolean;
}

const webAppProjects: Array<Project> = [
  {
    src: ASSETS.projects.noteTaker.screenshot.src,
    title: 'Note Taker',
    description: [
      'Lightweight note taking app',
      'FRONT-END: TypeScript, TailwindCSS, Redux and React-Router',
      'BACK-END: JavaScript, Express, MongoDB and Node',
      'Authentication using JSON Web Tokens',
    ],
    deployLinkURL: 'https://note-taker-1ej3.onrender.com',
    codeLinkURL: 'https://github.com/Wes-Coburn/note-taker',
    delay: 500,
  },
  {
    src: ASSETS.projects.mernTemplate.screenshot.src,
    title: 'MERN Template',
    description: [
      'Template for a full-stack MERN app',
      'TypeScript, TailwindCSS, Redux and React-Router',
      'Fully supported DarkMode (defaults to system)',
    ],
    deployLinkURL: 'https://react-static-wo1g.onrender.com/',
    codeLinkURL: 'https://github.com/Wes-Coburn/template-MERN-app',
    delay: 500,
  },
  {
    src: ASSETS.projects.jammming.screenshot.src,
    title: 'Spotify Client',
    description: [
      'Spotify client',
      'A React app that implements the Spotify API',
    ],
    deployLinkURL: 'https://wes-coburn-jammmer.netlify.app/',
    codeLinkURL: 'https://github.com/Wes-Coburn/jammming',
    delay: 500,
  },
  {
    src: ASSETS.projects.drifterSite.screenshot.src,
    title: 'DrifterTheGame.com',
    description: [
      'Static website for the Drifter Deckbuilding Game (see Games)',
    ],
    deployLinkURL: 'https://drifterthegame.com/',
    codeLinkURL: 'https://github.com/Wes-Coburn/drifter-website',
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
    deployLinkURL: 'https://weslex555.itch.io/drifter-deckbuilding-game',
    codeLinkURL: 'https://github.com/Wes-Coburn/Drifter-Deckbuilding-Game',
    isVideo: true,
  },
];

const projectShowcase = ({
  src,
  title,
  description,
  deployLinkURL,
  codeLinkURL,
  delay,
  isVideo,
}: Project): JSX.Element => {
  return (
    <Showcase
      key={uuidv4()}
      src={src}
      title={title}
      description={description}
      deployLinkURL={deployLinkURL}
      codeLinkURL={codeLinkURL}
      delay={delay}
      isVideo={isVideo}
    />
  );
};

export default function Main() {
  return (
    <main role="main">
      <div className="px-2 text-center text-gray-700">
        <Fade delay={800} triggerOnce>
          <p className="pb-6 pt-12 text-2xl">He is proficient with...</p>
        </Fade>
        <div className="mx-auto w-fit border-4 border-solid border-gray-200 p-3 text-gray-900">
          <Fade delay={500} cascade damping={0.4} triggerOnce>
            {skills.map((skillsList) => {
              const output = skillsList.map((skill) => (
                <li
                  key={uuidv4()}
                  className="inline p-1 leading-relaxed md:text-xl md:leading-loose"
                >
                  &#x3c;{skill}&#x3e;
                </li>
              ));
              return (
                <ul key={uuidv4()} className="mx-auto w-fit">
                  {output}
                </ul>
              );
            })}
          </Fade>
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
        {webAppProjects.map((project) => projectShowcase(project))}
      </div>
      <div className="pb-8 pt-12 text-center text-4xl font-bold text-gray-600">
        <Fade triggerOnce>
          <p>Games</p>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-12">
        {gameProjects.map((project) => projectShowcase(project))}
      </div>
    </main>
  );
}
