import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import MainSection from './containers/MainSection'
import SideBar from './containers/SideBar'

import MobileHeader from  './components/MobileHeader'
import FooterPlayer from './components/FooterPlayer'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <div>
      <MobileHeader />
      <div className="flex relative">
        <SideBar />
        <MainSection   />
        <FooterPlayer  />
      </div>
    </div>
      
    </BrowserRouter>
  </div>
  );
}

export default App;
