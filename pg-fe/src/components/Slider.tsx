import React, { ChangeEvent, useState } from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const [manualInput, setManualInput] = useState(value.toFixed(1));

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
    setManualInput(newValue.toFixed(1));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (newValue === '') {
      newValue = '50';
    }

    if (/^\d*\.?\d{0,1}$/.test(newValue)) {
      setManualInput(newValue);
      onChange(parseFloat(newValue));
    }
  };

  const handleInputBlur = () => {
   
    const roundedValue = parseFloat(manualInput).toFixed(1);
    setManualInput(roundedValue);
    onChange(parseFloat(roundedValue));
  };

  return (
    <div className="mt-6 relative">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <input
          type="range"
          min="0"
          max="100"
          step="1" 
          value={value}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4F46E5 ${value}%, #D1D5DB ${value}%)`
          }}
        />
      </div>

      <div
        className="absolute flex items-center justify-center text-white font-bold bg-blue-600 rounded-full"
        style={{ 
          left: `calc(${value}% - 1.5rem)`, 
          width: '3rem', 
          height: '3rem',
          top: '-1.5rem' 
        }}
      >
        {value}
      </div>

      <div className="mt-2 flex justify-center">
        <input
          type="text"
          value={manualInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-16 p-1 text-center border rounded"
          placeholder="0.0"
        />
      </div>

      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default Slider;