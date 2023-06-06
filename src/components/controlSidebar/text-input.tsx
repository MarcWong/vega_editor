import React from 'react';

interface TextInputProps {
    value: string;
    onValueChange: (value: string) => void;
    label: string;
  }
  
  const TextInput: React.FC<TextInputProps> = ({ value, onValueChange, label }) => {
    return (
      <div>
        <label htmlFor={`${label}-input`}>{label}:</label>
        <input 
          id={`${label}-input`} 
          type="text" 
          value={value} 
          onChange={(e) => onValueChange(e.target.value)} 
        />
      </div>
    );
  };

    export default TextInput;