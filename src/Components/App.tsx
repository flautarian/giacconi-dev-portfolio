import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import exampleResume from "../Models/Resume";
import { useTranslation } from 'react-i18next';
import Experience from './Experience/Experience';
import React, { useContext } from 'react';
import Certifications from './Certifications/Certifications';
import { MainContext } from '../Providers/ContextProvider';

const App = () => {

  const { i18n } = useTranslation(['home']);
  
  const {isdark} = useContext(MainContext);

  return (
    <div className={`App ${isdark ? 'gradient-dark' : 'gradient-light'}`}>
      <Header />
      <HeaderOptions />
      <Avatar img={exampleResume.avatar} name={exampleResume.name} surnames={exampleResume.surnames} description={exampleResume.aboutMe[i18n.language]} />
      <Experience experience={exampleResume.experience} />
      <Certifications certifications={exampleResume.certificates} />
    </div>
  )
}

export default App
