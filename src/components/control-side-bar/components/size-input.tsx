import React from 'react';
import { TextField } from '@mui/material';

interface SizeInputProps {
    size: number;
    label: string;
    onSizeChange: (size: number) => void;
    step?: number;
}

const SizeInput: React.FC<SizeInputProps> = ({ size, label, onSizeChange, step }) => {
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSizeChange(Number(event.target.value));
  };

  return (
    <TextField
      type="number"
      label={label}
      value={size}
      onChange={handleSizeChange}
      InputProps={{ inputProps: { step: step ? step : 1, min: step ? step : 1 } }}
      variant="outlined"
      fullWidth
    />
  );
};

export default SizeInput;
