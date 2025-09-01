import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import './App.scss';
import resume from '../Models/Resume';
import { useTranslation } from 'react-i18next';
import TimelineCarousel from './TimelineCarousel/TimelineCarousel';
import React, { useContext, useEffect } from 'react';
import SimpleCarousel from './SimpleCarousel/SimpleCarousel';
import { MainContext } from '../Providers/ContextProvider';
import { isMobile } from 'react-device-detect';
import TagsCarousel from './TagsCarousel/TagsCarousel';
import Summary from './Summary/Summary';

const App = () => {

  const { i18n } = useTranslation(['home']);

  const { isdark } = useContext(MainContext);
  
  useEffect(() => {
    const r = document.querySelector(':root') as HTMLElement | null;
    r?.style.setProperty("--dark-color-start", resume.backgroundLights["darkColorStart"]);
    r?.style.setProperty("--dark-color-end", resume.backgroundLights["darkColorEnd"]);
    r?.style.setProperty("--light-color-start", resume.backgroundLights["lightColorStart"]);
    r?.style.setProperty("--light-color-end", resume.backgroundLights["lightColorEnd"]);
  }, []);

  return (
    <div className={`App ${isdark ? 'gradient-dark' : 'gradient-light'} background`}>
      <Header
        sectionNames={resume.sections.map(s => s.name[i18n.language])}
        linkedInUrl={resume.linkedIn}
        emailUrl={resume.email}
        githubUrl={resume.github}
        cvUrl={resume.cv[i18n.language]} />
      {!isMobile &&
        <>
          {Array.from(Array(100).keys()).map((n, $index) => (
            <div key={`particle-${$index}`} className="circle-container">
              <div className="circle">
              </div>
            </div>
          ))}
        </>
      }
      <Avatar
        img={resume.avatar}
        name={resume.name}
        surnames={resume.surnames}
        description={resume.aboutMe[i18n.language]}
        job={resume.job[i18n.language]}
        linkedInUrl={resume.linkedIn}
        emailUrl={resume.email}
        githubUrl={resume.github}
        cv={resume.cv[i18n.language]}
      />
      {
        resume.sections.map((section) => {
          return (
            <div key={section.key}>
              {section.type === "timeline-carousel" && <TimelineCarousel values={section.values} backgroundLights={section.backgroundLights}/>}
              {section.type === "simple-carousel" && <SimpleCarousel values={section.values} backgroundLights={section.backgroundLights}/>}
              {section.type === "tags-carousel" && <TagsCarousel values={section.values} backgroundLights={section.backgroundLights}/>}
              {section.type === "summary" && <Summary img={resume.avatar} linkedInUrl={resume.linkedIn} backgroundLights={section.backgroundLights}/>}
            </div>
          );
        })
      }

    </div>
  )
}

export default App
