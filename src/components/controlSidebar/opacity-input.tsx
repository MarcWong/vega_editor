import React from 'react';

interface OpacityInputProps {
    opacity: number;
    onOpacityChange: (opacity: number) => void;
  }
  
  const OpacityInput: React.FC<OpacityInputProps> = ({ opacity, onOpacityChange }) => {
    return (
      <div>
        <label htmlFor="opacity-input">Bar Opacity:</label>
        <input 
          id="opacity-input" 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={opacity} 
          onChange={(e) => onOpacityChange(Number(e.target.value))} 
        />
      </div>
    );
  };

  export default OpacityInput;

  