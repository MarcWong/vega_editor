import React from 'react';

interface SelectInputProps {
    value: string;
    onValueChange: (value: string) => void;
    label: string;
    options: string[];
  }
  
  const SelectInput: React.FC<SelectInputProps> = ({ value, onValueChange, label, options }) => {
    return (
      <div>
        <label htmlFor={`${label}-input`}>{label}:</label>
        <select 
          id={`${label}-input`} 
          value={value} 
          onChange={(e) => onValueChange(e.target.value)} 
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </div>
    );
  };

export default SelectInput;