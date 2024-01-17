/* eslint-disable import/no-absolute-path */
import favIcon from '/logo.svg';
import portfolioScreenshot from './images/portfolioScreenshot.png';
import noteTakerScreenshot from './images/noteTakerScreenshot.png';
import mernTemplateScreenshot from './images/mernTemplateScreenshot.png';
import jammmingScreenshot from './images/jammmerScreenshot.png';
import drifterGameClip from './images/drifterGameClip.mp4';
import drifterSiteScreenshot from './images/drifterSiteScreenshot.png';

const ASSETS = {
  app: {
    logos: {
      favIcon: {
        src: favIcon,
        alt: 'app logo',
      },
    },
  },
  projects: {
    portfolio: {
      screenshot: {
        src: portfolioScreenshot,
        alt: 'Portfolio site',
      },
    },
    noteTaker: {
      screenshot: {
        src: noteTakerScreenshot,
        alt: 'Note Taker app',
      },
    },
    mernTemplate: {
      screenshot: {
        src: mernTemplateScreenshot,
        alt: 'MERN Template app',
      },
    },
    jammming: {
      screenshot: {
        src: jammmingScreenshot,
        alt: 'Spotify client app',
      },
    },
    drifterGame: {
      clip: {
        src: drifterGameClip,
        alt: 'Drifter Deckbuilding Game trailer video',
      },
    },
    drifterSite: {
      screenshot: {
        src: drifterSiteScreenshot,
        alt: 'Drifter Deckbuilding Game website',
      },
    },
  },
};

export default ASSETS;
