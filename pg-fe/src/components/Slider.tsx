import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <div className="mt-6">
      <label className="block text-lg text-gray-700 font-medium mb-2">
        Threshold: {value}
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        min="0"
        max="100"
      />
    </div>
  );
};

export default Slider;