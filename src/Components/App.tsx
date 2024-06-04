import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import './App.css';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import exampleResume from "../Models/Resume";
import { useTranslation } from 'react-i18next';
import Experience from './Experience/Experience';
import React from 'react';
import Certifications from './Certifications/Certifications';

const App = () => {

  const { i18n } = useTranslation(['home']);

  return (
    <div className="App">
      <Header />
      <HeaderOptions />
      <Avatar img={exampleResume.avatar} name={exampleResume.name} surnames={exampleResume.surnames} description={exampleResume.aboutMe[i18n.language]} />
      <Experience experience={exampleResume.experience}/>
      <Certifications certifications={exampleResume.certificates}/>
    </div>
  )
}

export default App
