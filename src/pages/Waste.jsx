import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Bin from '../partials/Bin';


function Waste () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page section */}
            <Bin />

          </div>

        </section>

      </main>


    </div>
  );
}

export default Waste;