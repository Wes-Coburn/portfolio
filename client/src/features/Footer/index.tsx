import { Fade } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="my-12 text-2xl text-center leading-loose"
    >
      <Fade>
        <a
          href="https://linkedin.com/in/Wes-Coburn"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400"
        >
          linkedin.com/in/Wes-Coburn
        </a>
        <a
          href="https://github.com/Wes-Coburn"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400"
        >
          github.com/Wes-Coburn
        </a>
        <p>&copy; 2023 Wesley H.G. Coburn</p>
      </Fade>
    </footer>
  );
}
