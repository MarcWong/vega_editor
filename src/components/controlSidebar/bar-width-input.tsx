import React from 'react';

interface BarWidthInputProps {
    width: number;
    onWidthChange: (width: number) => void;
}

const BarWidthInput: React.FC<BarWidthInputProps> = ({ width, onWidthChange }) => {
    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onWidthChange(Number(event.target.value));
    };

    return (
        <div className="input-group">
            <label htmlFor="bar-width-slider">Bar Width</label>
            <input
                type="range"
                id="bar-width-slider"
                min="1"
                max="20"
                step="1"
                value={width}
                onChange={handleWidthChange}
            />
            <output>{width}</output>
        </div>
    );
};

export default BarWidthInput;
