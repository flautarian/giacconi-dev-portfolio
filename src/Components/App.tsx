import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import exampleResume from '../Models/Resume';
import { useTranslation } from 'react-i18next';
import TimelineCarousel from './TimelineCarousel/TimelineCarousel';
import React, { useContext } from 'react';
import SimpleCarousel from './SimpleCarousel/SimpleCarousel';
import { MainContext } from '../Providers/ContextProvider';
import { Section } from '../Models/Resume';

const App = () => {

  const { i18n } = useTranslation(['home']);

  const { isdark } = useContext(MainContext);

  return (
    <div className={`App ${isdark ? 'gradient-dark' : 'gradient-light'}`}>
      <Header sectionNames={exampleResume.sections.map(s=>s.name[i18n.language])} />
      <HeaderOptions />
      <Avatar img={exampleResume.avatar} name={exampleResume.name} surnames={exampleResume.surnames} description={exampleResume.aboutMe[i18n.language]} job={exampleResume.job[i18n.language]} />
      {
        exampleResume.sections.map((section) => {
          return (
            <div key={section.key}>
              {section.type === "timeline-carousel" && <TimelineCarousel values={section.values} />}
              {section.type === "simple-carousel" && <SimpleCarousel values={section.values} />}
              {section.type === "dropdown" && <></>}
            </div>
          );
        })
      }

    </div>
  )
}

export default App
