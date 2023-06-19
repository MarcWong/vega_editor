import React, { useState } from 'react';

interface SelectInputProps {
    options: string[];
    label: string;
    selectedOption: string;
    onOptionSelect: (option: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, label, selectedOption, onOptionSelect }) => {
    const [value, setValue] = useState(selectedOption);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onOptionSelect(newValue);
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <select id={label} name={label} value={value} onChange={handleOptionChange}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default SelectInput;
