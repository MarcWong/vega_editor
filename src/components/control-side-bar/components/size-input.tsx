import React from 'react';
import { TextField } from '@mui/material';

interface SizeInputProps {
    size: number;
    label: string;
    onSizeChange: (size: number) => void;
    step?: number;
    min?: number;   // Added min prop
    max?: number;   // Added max prop
}

const SizeInput: React.FC<SizeInputProps> = ({ size, label, onSizeChange, step, min, max}) => {
  if(size===undefined || null){
    return null;
  }

  const [innerSize, setInnerSize] = React.useState(size);
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSizeChange(Number(event.target.value));
    setInnerSize(Number(event.target.value));
  };

  React.useEffect(() => {
    setInnerSize(size);
  }, [size]);

  return (
    <TextField
      type="number"
      label={label}
      value={innerSize}
      onChange={handleSizeChange}
      InputProps={{ inputProps: { step: step ? step : 1, min: min, max: max } }}  // Include min and max here
      variant="outlined"
      fullWidth
    />
  );
};

export default SizeInput;
