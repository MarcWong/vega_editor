import React, { useState } from 'react';

interface ColorInputProps {
    label: string;
    initialColor: string;
    onColorChange: (color: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ label, initialColor, onColorChange }) => {
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
        onColorChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input
                type="color"
                id={label}
                name={label}
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ColorInput;
