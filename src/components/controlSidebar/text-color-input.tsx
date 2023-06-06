// TextColorInput.js
import React from 'react';

interface TextColorInputProps {
    color: string;
    onColorChange: (color: string) => void;
}

const TextColorInput: React.FC<TextColorInputProps> = ({ color, onColorChange }) => {
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onColorChange(event.target.value);
    };

    return (
        <div className="input-group">
            <label htmlFor="text-color-input">Text Color</label>
            <input
                type="color"
                id="text-color-input"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default TextColorInput;

