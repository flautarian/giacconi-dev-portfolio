import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import './App.scss';
import resumeJson from '../Models/Resume';
import { useTranslation } from 'react-i18next';
import TimelineCarousel from './TimelineCarousel/TimelineCarousel';
import React, { useContext, useEffect, useState } from 'react';
import SimpleCarousel from './SimpleCarousel/SimpleCarousel';
import { MainContext } from '../Providers/ContextProvider';
import { isMobile } from 'react-device-detect';
import TagsCarousel from './TagsCarousel/TagsCarousel';
import Summary from './Summary/Summary';

const App = () => {

  const { i18n } = useTranslation(['home']);

  const { isdark } = useContext(MainContext);

  return (
    <div className={`App ${isdark ? 'gradient-dark' : 'gradient-light'} background`}>
      <Header
        sectionNames={resumeJson.sections.map(s => s.name[i18n.language])}
        linkedInUrl={resumeJson.linkedIn}
        emailUrl={resumeJson.email}
        githubUrl={resumeJson.github}
        cvUrl={resumeJson.cv} />
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
        img={resumeJson.avatar}
        name={resumeJson.name}
        surnames={resumeJson.surnames}
        description={resumeJson.aboutMe[i18n.language]}
        job={resumeJson.job[i18n.language]}
        linkedInUrl={resumeJson.linkedIn}
        emailUrl={resumeJson.email}
        githubUrl={resumeJson.github}
        cv={resumeJson.cv}
      />
      {
        resumeJson.sections.map((section) => {
          return (
            <div key={section.key}>
              {section.type === "timeline-carousel" && <TimelineCarousel values={section.values} />}
              {section.type === "simple-carousel" && <SimpleCarousel values={section.values} />}
              {section.type === "tags-carousel" && <TagsCarousel values={section.values} />}
              {section.type === "summary" && <Summary img={resumeJson.avatar} />}
            </div>
          );
        })
      }

    </div>
  )
}

export default App
