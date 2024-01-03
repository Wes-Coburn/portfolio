import { Fade } from 'react-awesome-reveal';
import Showcase from '../Showcase';
import ASSETS from '../../assets';

const skills = [
  ['html', 'css', 'javascript', 'typescript'],
  ['react', 'redux', 'react-router'],
  ['unit testing', 'responsive design', 'GIT', 'TailwindCSS'],
];

export default function Main() {
  return (
    <main role="main">
      <div className="text-center px-2">
        <Fade delay={800} triggerOnce>
          <p className="py-8 text-2xl">He is proficient with...</p>
        </Fade>
        <Fade delay={500} cascade damping={0.2} triggerOnce>
          {skills.map((skillsList) => {
            const output = skillsList.map((skill) => (
              <li key={`key:${skill}`} className="inline text-xl pr-2">
                &#x3c;{skill}&#x3e;
              </li>
            ));
            return <ul key={`key:${skillsList}`}>{output}</ul>;
          })}
        </Fade>
        <Fade delay={1000} triggerOnce>
          <p className="text-2xl pt-12 pb-6">
            Here are some of his projects...
          </p>
        </Fade>
        <Fade delay={1000} triggerOnce>
          <p className="text-3xl pb-8 font-bold">Web Apps</p>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-12">
        <Showcase
          src={ASSETS.projects.noteTaker.screenshot.src}
          title="Note Taker"
          description={[
            'A full-stack MERN app',
            'Implementation of the MERN template (see next)',
          ]}
          deployLinkURL="https://note-taker-1ej3.onrender.com"
          codeLinkURL="https://github.com/Wes-Coburn/note-taker"
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.mernTemplate.screenshot.src}
          title="MERN Template"
          description={[
            'Template for a full-stack MERN app (MongoDB + Express + React + Node)',
          ]}
          deployLinkURL="https://react-static-wo1g.onrender.com/"
          codeLinkURL="https://github.com/Wes-Coburn/template-MERN-app"
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.jammming.screenshot.src}
          title="Spotify Client"
          description={['A React app', 'Implements the Spotify API']}
          deployLinkURL="https://wes-coburn-jammmer.netlify.app/"
          codeLinkURL="https://github.com/Wes-Coburn/jammming"
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.drifterSite.screenshot.src}
          title="DrifterTheGame.com"
          description={['A static website for the Drifter Deckbuilding Game']}
          deployLinkURL="https://drifterthegame.com/"
          codeLinkURL="https://github.com/Wes-Coburn/drifter-website"
        />
      </div>
      <div className="text-center text-3xl pt-12 pb-8 font-bold">
        <Fade>
          <p>Games</p>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-12">
        <Showcase
          src={ASSETS.projects.drifterGame.clip.src}
          title="Drifter Deckbuilding Game"
          description={['A game made with C# and the Unity game engine']}
          deployLinkURL="https://weslex555.itch.io/drifter-deckbuilding-game/download/ieuEK3_ASTYEBXAEJ7w7_HcubBCo2jCDl6Et2K_F"
          codeLinkURL="https://github.com/Wes-Coburn/Drifter-Deckbuilding-Game"
          isVideo
        />
      </div>
    </main>
  );
}
