import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

const fullHeight = 'min-h-dvh';

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState<string>(
    `${fullHeight} p-6 flex flex-col justify-around items-center bg-gray-900 text-white transition-all duration-[3000ms] lg:flex-row`,
  );

  useEffect(() => {
    setTimeout(() => {
      setHeaderClasses((headers) => {
        const headersArr = headers.split(' ');
        const newHeaders = headersArr.filter((h) => h !== fullHeight);
        newHeaders.push('min-h-[30dvh]');
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
          <h1 className="text-5xl hover:text-gray-400 md:text-6xl lg:text-5xl xl:text-7xl">
            Wesley Coburn
          </h1>
        </a>
        <h2 className="text-xl md:text-2xl xl:text-3xl">
          is a front-end web developer
        </h2>
        <h3 className="text-xl md:text-2xl xl:text-3xl">
          and this is his portfolio
        </h3>
      </Fade>
    </header>
  );
}
