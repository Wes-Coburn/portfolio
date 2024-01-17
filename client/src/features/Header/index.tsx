import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import ccn from '../../utils/createClassName';

const expandClassName = ccn`min-h-dvh`;
const shrinkClassName = ccn`min-h-[5dvh]`;

const headerClassName = ccn([
  expandClassName,
  'flex flex-col items-center justify-center bg-gray-900 p-8 shadow-md shadow-gray-900',
  'text-center text-gray-300 transition-all duration-[3000ms] lg:flex-row',
]);

const h1ClassName = ccn`text-4xl text-gray-100 duration-200 hover:text-gray-400 md:text-5xl xl:text-6xl`;
const h2ClassName = ccn`py-6 text-xl md:text-2xl lg:px-8 lg:py-0 xl:px-12 xl:text-3xl`;
const h3ClassName = ccn`text-xl md:text-2xl xl:text-3xl`;

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState<string>(headerClassName);

  useEffect(() => {
    setTimeout(() => {
      setHeaderClasses((className) => {
        const classNameArr = className.split(' ');
        const newClassName = classNameArr.filter((c) => c !== expandClassName);
        newClassName.push(shrinkClassName);
        return newClassName.join(' ');
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
          <h1 className={h1ClassName}>Wesley Coburn</h1>
        </a>
        <h2 className={h2ClassName}>is a front-end web developer</h2>
        <h3 className={h3ClassName}>and this is his portfolio</h3>
      </Fade>
    </header>
  );
}
