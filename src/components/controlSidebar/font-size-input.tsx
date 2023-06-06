import React from 'react';

interface FontSizeInputProps {
  fontSize: number;
  onFontSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FontSizeInput: React.FC<FontSizeInputProps> = ({ fontSize, onFontSizeChange }) => {
  return (
    <div className="control-sidebar-item">
      <label htmlFor="font-size">Font Size:</label>
      <input
        type="number"
        id="font-size"
        name="font-size"
        value={fontSize}
        onChange={onFontSizeChange}
        min="1"
      />
    </div>
  );
};

export default FontSizeInput;
