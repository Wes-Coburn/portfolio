import { Fade } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-32 bg-gray-900 pt-16 text-center text-xl text-gray-400 md:text-2xl"
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
          <a
            href="mailto:wgcoburn@outlook.com"
            className="text-gray-200 hover:text-gray-400"
          >
            wgcoburn@outlook.com
          </a>

          <p className="p-12">&copy; 2023 Wesley H.G. Coburn</p>
        </Fade>
      </div>
    </footer>
  );
}
