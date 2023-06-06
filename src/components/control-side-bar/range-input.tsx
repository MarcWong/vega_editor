import React, { useState } from 'react';

interface RangeInputProps {
    min: number;
    max: number;
    step: number;
    label: string;
    initialValue: number;
    onValueChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ min, max, step, label, initialValue, onValueChange }) => {
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onValueChange(newValue);
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input type="range" id={label} name={label} min={min} max={max} step={step} value={value} onChange={handleValueChange} />
        </div>
    );
};

export default RangeInput;
