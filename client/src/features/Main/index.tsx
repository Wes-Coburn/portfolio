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
          src={ASSETS.projects.noteTaker.screenshot.src}
          title="Note Taker app"
          description={['A full-stack MERN app', 'Next line', 'Next line']}
          linkURL="https://google.com/"
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
          linkURL="https://drifterthegame.com/"
          isVideo
          delay={500}
        />
        <Showcase
          src={ASSETS.projects.drifterSite.screenshot.src}
          title="DrifterTheGame.com"
          description={[
            'A static website for the Drifter Deckbuilding Game',
            'Next line',
            'Next line',
          ]}
          linkURL="https://drifterthegame.com/"
        />
      </div>
    </main>
  );
}
