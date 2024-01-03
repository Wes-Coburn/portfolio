import { Fade } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="pt-16 mt-32 bg-gray-900 text-gray-400 text-xl text-center md:text-2xl"
    >
      <div className="leading-loose">
        <Fade>
          <a
            href="https://linkedin.com/in/Wes-Coburn"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-gray-400"
          >
            linkedin.com/in/Wes-Coburn
          </a>
          <a
            href="https://github.com/Wes-Coburn"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-gray-400"
          >
            github.com/Wes-Coburn
          </a>
          <p className="p-12">&copy; 2023 Wesley H.G. Coburn</p>
        </Fade>
      </div>
    </footer>
  );
}
