import React, { useState, useEffect } from 'react';

interface KeybindsProps {
  onChange: (key: string) => void; // Handler to receive the selected keybind
  isClosed: boolean;
}

const Keybinds: React.FC<KeybindsProps> = ({ onChange, isClosed }) => {
  const [isKeybindActive, setIsKeybindActive] = useState<boolean>(false);
  const [keybind, setKeybind] = useState<string>('');

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isKeybindActive) {
      event.preventDefault(); // Prevent default action of the key
      const key = event.key;
      if (key.length === 1 && key.match(/[a-z]/i)) {
        setKeybind(key.toLowerCase());
        onChange(key.toLowerCase()); // Notify parent component about the change
      } else {
        setKeybind(key);
        onChange(key); // Notify parent component about the change
      }
    }
  };

  const handleMouseClick = (event: MouseEvent) => {
    if (isKeybindActive) {
      event.preventDefault(); // Prevent default action of the click
      if (event.button === 0) {
        setKeybind('Left Mouse Button');
        onChange('Left Mouse Button');
      } else if (event.button === 2) {
        setKeybind('Right Mouse Button');
        onChange('Right Mouse Button');
      }
    }
  };

  useEffect(() => {
    if (isKeybindActive) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('mousedown', handleMouseClick);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseClick);
    };
  }, [isKeybindActive]);

  return (
    <div className="mt-8 p-4 border rounded-md bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Keybinds</h2>
        <p>{isClosed ? 'Hand is closed' : 'Hand is open'}</p>
        <label className="flex items-center space-x-3">
          <span className="text-gray-700">Enable Keybind:</span>
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={isKeybindActive}
            onChange={() => setIsKeybindActive(!isKeybindActive)}
          />
        </label>
      </div>

      <div className={`p-4 border rounded ${isKeybindActive ? 'bg-white cursor-pointer' : 'bg-gray-300'}`}>
        <p className="text-gray-800 text-lg mb-2">Click to select a keybind:</p>
        <div className={`p-3 text-center border rounded-md ${isKeybindActive ? 'bg-gray-50' : ''}`}>
          {isKeybindActive ? (keybind || 'Press any key or click a mouse button...') : keybind || 'No keybind set'}
        </div>
      </div>
    </div>
  );
};

export default Keybinds;