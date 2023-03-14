import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Rubbish () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="growgrow" color='#34fc16'>
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>


        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <form className="w-full lg:w-1/2">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                    <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="rubbish name" aria-label="rubbish name" />
                    <Link to="/rubbish" className="btn text-purple-600 bg-yellow-400 hover:bg-white shadow">Search</Link>
                  </div>
                </form>
              </div>

              <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <label style={{ color: 'black' }}>Cardboard is belong to <span style={{ color: 'lightgreen' }}>recycling rubbish</span></label>
              </div>

              <div style={{ background: 'lightgrey', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                <div style={{ color: 'black' }}>How to dispose of waste</div>
                <div style={{ color: 'black', marginTop: '50px' }}>some content here</div>
              </div>

              <div style={{ background: 'lightgrey', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                <div style={{ color: 'black' }}>Time required for degradation</div>
                <div style={{ color: 'black', marginTop: '50px' }}>5 years</div>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form className="w-full lg:w-1/2">
                  <div className="flex flex-wrap -mx-3">
                  </div>

                </form>


              </div>

            </div>
          </div>
        </section>
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );


}

export default Rubbish;


