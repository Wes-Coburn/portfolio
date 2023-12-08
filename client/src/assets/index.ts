/* eslint-disable import/no-absolute-path */
import favIcon from '/logo.svg';
import noteTakerScreenshot from './noteTakerScreenshot.png';
import drifterGameClip from './drifterGameClip.mp4';
import drifterSiteScreenshot from './drifterSiteScreenshot.png';

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
