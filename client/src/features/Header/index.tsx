import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

const fullHeight = 'h-dvh';

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState<string>(
    `${fullHeight} flex flex-col justify-center items-center bg-gray-900 text-white text-center transition-all duration-[3000ms] lg:flex-row`,
  );

  useEffect(() => {
    setTimeout(() => {
      setHeaderClasses((headers) => {
        const headersArr = headers.split(' ');
        const newHeaders = headersArr.filter((h) => h !== fullHeight);
        newHeaders.push('h-[30dvh]');
        return newHeaders.join(' ');
      });
    }, 3500);
  }, []);

  return (
    <header role="banner" className={headerClasses}>
      <Fade delay={500} cascade damping={1} triggerOnce>
        <a
          href="https://www.linkedin.com/in/wes-coburn/"
          title="LinkedIn profile"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-5xl px-5 py-2 hover:text-gray-400 md:text-6xl lg:text-5xl xl:text-6xl">
            Wesley Coburn
          </h1>
        </a>
        <h2 className="text-xl px-5 py-2 md:text-2xl xl:text-3xl">
          is a front-end web developer
        </h2>
        <h3 className="text-xl px-5 py-2 md:text-2xl xl:text-3xl">
          and this is his portfolio
        </h3>
      </Fade>
    </header>
  );
}
