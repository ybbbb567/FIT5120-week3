import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Bin () {
  const navigate = useNavigate()
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
       
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4 text-black">Waste Category</h2>
          </div>
          {/* Different color bins */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* Garden Waste Bin */}
            <div className="flex flex-col h-full p-6 bg-green-400" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <span className="text-lg text-black grow"><b>Garden Waste</b></span>
                </div>
              </div>
              <blockquote className="text-base text-black grow">Your food and garden waste bin(green lid) is for food scraps, garden prunings and some organic material. The bin is collected every week.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <Link to="/rankOfGreen" className="text-black-600 hover:text-gray-200 transition duration-150 ease-in-out">See the rank of Garden Waste</Link>
              </div>
            </div>

            {/* Recycling Bin */}
            <div className="flex flex-col h-full p-6 bg-yellow-400" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <span className="text-lg text-black grow"><b>Recycling</b></span>
                </div>
              </div>
              <blockquote className="text-base text-black grow">Your recycling bin (yellow lid) is for common household packaging items typically bought at a supermarket and found in your kitchen, bathroom or laundry.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <Link to="/rankOfYellow" className="text-black-600 hover:text-gray-200 transition duration-150 ease-in-out">See the rank of Recycling</Link>
              </div>
            </div>

            {/* Landfill Bin */}
            <div className="flex flex-col h-full p-6 bg-red-500" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <span className="text-lg text-black grow"><b>Landfill</b></span>
                </div>
              </div>
              <blockquote className="text-base text-black grow">Your landfill bin(red lid) is for any items that cannot be recycled through your recycling bin, food and garden waste bin or other recycling services.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <Link to="/rankOfRed" className="text-black-600 hover:text-gray-200 transition duration-150 ease-in-out">See the rank of Landfill</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Bin;