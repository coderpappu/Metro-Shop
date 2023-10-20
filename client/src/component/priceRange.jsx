
import React from 'react';
import 'tailwindcss/tailwind.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

function PriceRangeSlider() {
  const [value, setValue] = React.useState({
    min: 0, // minimum value
    max: 1000 // maximum value
  });

  const handlePriceChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-4">
      <InputRange
        minValue={0}
        maxValue={1000}
        value={value}
        onChange={handlePriceChange}
        formatLabel={(value) => `$${value}`} // optional: format label
        
      />
      <button className='py-[8px] hover:opacity-80 transition-[0.3s] font-medium px-[20px] bg-black text-white mt-[30px] ml-[150px]'>Filter</button>
    </div>
  );
}

export default PriceRangeSlider;
