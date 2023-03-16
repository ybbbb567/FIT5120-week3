import React from 'react';

function FeaturesZigzag () {
  return (
    <section>


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-5 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-black">Charts</h2>
            <p className="text-xl text-black">The below bar chart shows that residential waste is the highest amount of waste collected between 2010-2020. If everyone could reuse or recycle properly that amount will reduce in the near future.</p>
          </div>
        </div>

        <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <img className="mx-auto" src="/public/images/Chart.jpg" width="1024" height="504" alt="Hero" />


        </div>

      </div>
      <br /> <br />
    </section>

  );
}

export default FeaturesZigzag;