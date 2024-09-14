import React, { useState, useEffect, useRef } from 'react';

const KeybindTest: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isTypingAreaActive, setIsTypingAreaActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingAreaRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setInputValue('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTypingAreaClick = () => {
    setIsTypingAreaActive(true);
  };

  const handleTypingAreaBlur = () => {
    setIsTypingAreaActive(false);
  };

  return (
    <div className="mt-8 flex justify-between space-x-4 p-4 border rounded-md bg-gray-100">
      {/* Small input area */}
      <div className="flex-grow">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type here..."
        />
      </div>

      {/* Tiny typing area */}
      <div
        ref={typingAreaRef}
        tabIndex={0}
        onClick={handleTypingAreaClick}
        onBlur={handleTypingAreaBlur}
        className={`w-24 h-12 flex items-center justify-center border rounded cursor-pointer ${
          isTypingAreaActive ? 'bg-blue-200' : 'bg-gray-300'
        }`}
      >
        {isTypingAreaActive ? 'Active' : 'Click Me'}
      </div>
    </div>
  );
};

export default KeybindTest;