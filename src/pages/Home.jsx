import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Footer from '../partials/Footer';


function Home () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="growgrow" color='#34fc16'>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesZigZag />
        <Footer />

      </main>


    </div>
  );
}

export default Home;