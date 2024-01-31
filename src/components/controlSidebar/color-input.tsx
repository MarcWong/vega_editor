// color-input.tsx

import React from 'react';

interface ColorInputProps {
  color: string;
  lineId?: string;
  comfortLevel?: string;
  onColorChange: (color: string, entity?: string, comfortLevel?: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ color, lineId, comfortLevel, onColorChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(event.target.value, lineId, comfortLevel);
  };

  return (
    <div>
      <label>
        Color for {lineId || comfortLevel}:
        <input type="color" value={color} onChange={handleChange} />
      </label>
    </div>
  );
};

export default ColorInput;
