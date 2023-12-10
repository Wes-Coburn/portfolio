/* eslint-disable import/no-absolute-path */
import favIcon from '/logo.svg';
import mernTemplateScreenshot from './images/mernTemplateScreenshot.png';
import noteTakerScreenshot from './images/noteTakerScreenshot.png';
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
    mernTemplate: {
      screenshot: {
        src: mernTemplateScreenshot,
        alt: 'MERN App template',
      },
    },
    noteTaker: {
      screenshot: {
        src: noteTakerScreenshot,
        alt: 'Note Taker app',
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
