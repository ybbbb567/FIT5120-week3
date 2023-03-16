import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Bin from '../partials/Bin';
import Footer from '../partials/Footer';


function Waste () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className="relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page section */}
            <Bin />
            <Footer />

          </div>

        </section>

      </main>


    </div>
  );
}

export default Waste;