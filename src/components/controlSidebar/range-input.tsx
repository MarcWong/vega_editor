import React from 'react';

interface RangeInputProps {
  label: string;
  range: [number, number];
  onRangeChange: (newRange: [number, number]) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, range, onRangeChange }) => {
  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = [...range] as [number, number];
    newRange[index] = parseFloat(event.target.value);
    onRangeChange(newRange);
  };

  return (
    <div className="control-sidebar-item">
      <label>{label}:</label>
      <input type="number" value={range[0]} onChange={handleInputChange(0)} />
      <input type="number" value={range[1]} onChange={handleInputChange(1)} />
    </div>
  );
};

export default RangeInput;
