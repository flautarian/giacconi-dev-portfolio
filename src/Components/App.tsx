import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import './App.scss';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import exampleResume from '../Models/Resume';
import { useTranslation } from 'react-i18next';
import TimelineCarousel from './TimelineCarousel/TimelineCarousel';
import React, { useContext } from 'react';
import SimpleCarousel from './SimpleCarousel/SimpleCarousel';
import { MainContext } from '../Providers/ContextProvider';
import { isMobile } from 'react-device-detect';
import TagsCarousel from './TagsCarousel/TagsCarousel';

const App = () => {

  const { i18n } = useTranslation(['home']);

  const { isdark } = useContext(MainContext);

  return (
    <div className={`App ${isdark ? 'gradient-dark' : 'gradient-light'} background`}>
      <Header sectionNames={exampleResume.sections.map(s => s.name[i18n.language])} />
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
        img={exampleResume.avatar}
        name={exampleResume.name}
        surnames={exampleResume.surnames}
        description={exampleResume.aboutMe[i18n.language]}
        job={exampleResume.job[i18n.language]}
        linkedInUrl={exampleResume.linkedIn} 
        emailUrl={exampleResume.email} 
        githubUrl={exampleResume.github} 
        cv={exampleResume.cv} 
        />
      {
        exampleResume.sections.map((section) => {
          return (
            <div key={section.key}>
              {section.type === "timeline-carousel" && <TimelineCarousel values={section.values} />}
              {section.type === "simple-carousel" && <SimpleCarousel values={section.values} />}
              {section.type === "tags-carousel" && <TagsCarousel values={section.values} />}
              {section.type === "dropdown" && <></>}
            </div>
          );
        })
      }

    </div>
  )
}

export default App
