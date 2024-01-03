import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

const fullHeight = 'h-dvh';

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState<string>(
    `${fullHeight} flex flex-col justify-center items-center bg-black text-white text-center transition-all duration-[3000ms] md:flex-row`,
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
          <h1 className="text-5xl md:text-7xl px-5 py-2">Wesley Coburn</h1>
        </a>
        <h2 className="text-2xl px-5 py-2">is a front-end web developer</h2>
        <h3 className="text-2xl px-5 py-2">and this is his portfolio</h3>
      </Fade>
    </header>
  );
}
