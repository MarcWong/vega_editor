import React from 'react';

interface SizeInputProps {
    size: number;
    label: string;
    onSizeChange: (size: number) => void;
  }
  
const SizeInput: React.FC<SizeInputProps> = ({ size, label, onSizeChange }) => {
const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSizeChange(Number(event.target.value));
};

return (
    <div>
    <label htmlFor={label}>{label}:</label>
    <input
        type="number"
        id={label}
        name={label}
        value={size}
        onChange={handleSizeChange}
        step="1"
        min="1"
    />
    </div>
);
};
  
export default SizeInput;