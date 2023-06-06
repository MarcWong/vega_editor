import React from 'react';

interface ScaleDomainInputProps {
    min: number;
    max: number;
    label: string;
    onDomainChange: (min: number, max: number) => void;
}

const ScaleDomainInput: React.FC<ScaleDomainInputProps> = ({ min, max, label, onDomainChange }) => {
    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDomainChange(Number(event.target.value), max);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDomainChange(min, Number(event.target.value));
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <div>
                <label htmlFor={`${label}-min`}>Min:</label>
                <input
                    type="range"
                    id={`${label}-min`}
                    name={`${label}-min`}
                    value={min}
                    onChange={handleMinChange}
                    step="10"
                    min="-100"
                    max="100"
                />
            </div>
            <div>
                <label htmlFor={`${label}-max`}>Max:</label>
                <input
                    type="range"
                    id={`${label}-max`}
                    name={`${label}-max`}
                    value={max}
                    onChange={handleMaxChange}
                    step="10"
                    min="-100"
                    max="100"
                />
            </div>
        </div>
    );
};

export default ScaleDomainInput;
