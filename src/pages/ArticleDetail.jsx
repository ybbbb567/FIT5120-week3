import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Article () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/* Page content */}
      <main className="relative pt-32 pb-10 md:pt-40 md:pb-16">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section>
            {/* Section header */}
            <div className="mw-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-40">
              <h1 className="h1 mb-2" data-aos="fade-up">
                "It hit rock bottom: How Victoria's recycling industry ended up in the dumps"
              </h1>
            </div>
            <div className='text-black'>
              <a href="https://www.theage.com.au/by/chris-vedelago-hveq4" style={{ textDecoration: 'underline' }}>Chris Vedelago</a>
              <p>February 15, 2021 -- 10.06pm</p>
            </div>

            <div className="max-w-xl mx-auto text-center text-black pb-3 md:pb-4">
              <p className="h1 mb-4" data-aos="fade-up">
                "The absolutely critical thing, which no state or federal government has yet committed to, is recycled content in products - packaging, bottles, longer-lasting products. Because if there is no market for this stuff, it's not going to go anywhere."
              </p>
            </div>

          </section>
        </div>
      </main>


      {/*  Site footer */}
      <Footer />
    </div>

  );
}

export default Article;