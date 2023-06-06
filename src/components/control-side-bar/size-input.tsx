import React from 'react';

interface SizeInputProps {
    size: number;
    label: string;
    onSizeChange: (size: number) => void;
    step?: number;
  }
  
const SizeInput: React.FC<SizeInputProps> = ({ size, label, onSizeChange,step }) => {
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
        step={step?step:1}
        min={step?step:1}
    />
    </div>
);
};
  
export default SizeInput;