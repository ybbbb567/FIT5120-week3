import '~antd/dist/antd.js';
import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Waste from './pages/Waste';
import RankOfRed from './pages/RankOfRed'
import RankOfGreen from './pages/RankOfGreen';
import RankOfYellow from './pages/RankOfYellow';
import RankOfPurple from './pages/RankOfPurple';

function App () {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/rankOfGreen" element={<RankOfGreen />} />
        <Route path="/rankOfYellow" element={<RankOfYellow />} />
        <Route path="/rankOfRed" element={<RankOfRed />} />
        <Route path="/rankOfPurple" element={<RankOfPurple />} />
      </Routes>
    </>
  );
}

export default App;
