/* eslint-disable import/no-absolute-path */
import favIcon from '/logo.svg';
import drifterClip1 from './drifterClip.mp4';

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
    drifter: {
      clip1: {
        src: drifterClip1,
        alt: 'Drifter Deckbuilding Game trailer video',
      },
    },
  },
};

export default ASSETS;
