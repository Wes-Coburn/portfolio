import { Fade } from 'react-awesome-reveal';
import Showcase from '../Showcase';
import ASSETS from '../../assets';
import styles from './Main.module.css';

export default function Main() {
  const skills = [
    'html',
    'css',
    'javascript',
    'typescript',
    'react',
    'redux',
    'react-router',
  ];

  return (
    <main role="main" className={styles.Main}>
      {/* Skills */}
      <div className={styles.Skills}>
        <Fade delay={800} triggerOnce>
          <p>He is proficient with...</p>
        </Fade>
        <Fade delay={500} cascade damping={0.2} triggerOnce>
          <ul>
            {skills.map((skill) => (
              <li key={`key:${skill}`}>&#x3c;{skill}&#x3e;</li>
            ))}
          </ul>
        </Fade>
      </div>
      <div className={styles.ProjectsIntro}>
        <Fade delay={1000} triggerOnce>
          <p>Here are some of his projects...</p>
        </Fade>
      </div>
      <div className={styles.Projects}>
        {/* Projects */}
        <Showcase
          src={ASSETS.projects.mernTemplate.screenshot.src}
          title="MERN App Template"
          description={[
            'Template for a MERN app',
            'Includes Redux and React-Router',
            'Next line',
          ]}
          deployLinkURL="https://react-static-wo1g.onrender.com"
          codeLinkURL="https://github.com/Wes-Coburn/template-MERN-app"
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.noteTaker.screenshot.src}
          title="Note Taker app"
          description={['A full-stack MERN app', 'Next line', 'Next line']}
          deployLinkURL="https://note-taker-1ej3.onrender.com"
          codeLinkURL="https://github.com/Wes-Coburn/note-taker"
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.drifterGame.clip.src}
          title="Drifter Deckbuilding Game"
          description={[
            'A game made with C# and the Unity game engine',
            'Next line',
            'Next line',
          ]}
          deployLinkURL="https://weslex555.itch.io/drifter-deckbuilding-game/download/ieuEK3_ASTYEBXAEJ7w7_HcubBCo2jCDl6Et2K_F"
          codeLinkURL="https://github.com/Wes-Coburn/Drifter-Deckbuilding-Game"
          isVideo
        />
        <Showcase
          src={ASSETS.projects.drifterSite.screenshot.src}
          title="DrifterTheGame.com"
          description={[
            'A static website for the Drifter Deckbuilding Game',
            'Next line',
            'Next line',
          ]}
          deployLinkURL="https://drifterthegame.com/"
          codeLinkURL="https://github.com/Wes-Coburn/drifter-website"
        />
      </div>
    </main>
  );
}
