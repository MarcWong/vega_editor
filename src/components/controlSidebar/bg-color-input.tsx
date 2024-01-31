// BackgroundColorInput.js
import React from 'react';

interface BackgroundColorInputProps {
    color: string;
    onColorChange: (color: string) => void;
}

const BackgroundColorInput: React.FC<BackgroundColorInputProps> = ({ color, onColorChange }) => {
    return (
        <div>
            <label htmlFor="background-color">Background Color:</label>
            <input
                type="color"
                id="background-color"
                name="background-color"
                value={color}
                onChange={event => onColorChange(event.target.value)}
            />
        </div>
    );
};

export default BackgroundColorInput;