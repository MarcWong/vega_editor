import React from 'react';

interface SliderInputProps {
    value: number;
    label: string;
    onValueChange: (value: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({ value, label, onValueChange }) => {
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(Number(event.target.value));
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input
                type="range"
                id={label}
                name={label}
                value={value}
                onChange={handleValueChange}
                step="0.1"
                min="0.1"
                max="1.0"
            />
        </div>
    );
};

export default SliderInput;
