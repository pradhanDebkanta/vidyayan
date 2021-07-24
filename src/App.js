import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import WhyCoding from './components/whyCoding/WhyCoding';
import Testimonals from './components/testimonals/Testimonal';
import LearningPath from './components/learningPath/LearningPath';
import HowWork from './components/howWork/HowWork';
import Footer from './components/footer/Footer';
import './App.css';

const App=()=>{
  return(
    <div className="App">
      <Navbar/>
      <Home/>
      <WhyCoding/>
      <Testimonals/>
      <LearningPath/>
      <HowWork/>
      <Footer/>
    </div>
  );
};

export default App;