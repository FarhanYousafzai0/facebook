import React from 'react';
import { marketDataItems } from './marketItemsData'; // Adjust the path if needed

const MarketListing = () => {
  return (
    <div className='flex-1 p-5 w-full h-full text-black '>
      <h3 className='font-bold text-2xl xl:text-3xl mb-6'>Today's Picks</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {marketDataItems.map((item) => (
          <div
            key={item.id}
            className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-48 object-cover'
            />
            <div className='p-4 flex-1 flex flex-col justify-between'>
              <div>
                <h4 className='text-lg font-semibold'>{item.name}</h4>
                <p className='text-green-600 font-bold'>${item.price}</p>
                <p className='text-sm text-gray-500'>{item.location}</p>
              </div>

              <button
                className='mt-4 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full text-sm font-medium transition-colors duration-300'
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketListing;
