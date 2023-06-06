import React from 'react';

interface AxisLabelSizeInputProps {
    size: number;
    onSizeChange: (newSize: number) => void;
}

const AxisLabelSizeInput: React.FC<AxisLabelSizeInputProps> = ({ size, onSizeChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSizeChange(Number(e.target.value));
    };

    return (
        <div className="input-group">
            <label>Axis Label Size:</label>
            <input type="number" value={size} min="1" max="50" onChange={handleChange} />
        </div>
    );
};

export default AxisLabelSizeInput;
