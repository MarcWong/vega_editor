import React from 'react';

interface AxisLabelColorInputProps {
    color: string;
    onColorChange: (newColor: string) => void;
}

const AxisLabelColorInput: React.FC<AxisLabelColorInputProps> = ({ color, onColorChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onColorChange(e.target.value);
    };

    return (
        <div className="input-group">
            <label>Axis Label Color:</label>
            <input type="color" value={color} onChange={handleChange} />
        </div>
    );
};

export default AxisLabelColorInput;
