import React from 'react';
import { TextField } from '@mui/material';

interface SizeInputProps {
    size: number | '';
    label: string;
    onSizeChange: (size: number | '') => void;
    step?: number;
    min?: number; 
    max?: number;
}

const SizeInput: React.FC<SizeInputProps> = ({ size, label, onSizeChange, step, min, max }) => {

    if(size === undefined) return null;
    const [innerSize, setInnerSize] = React.useState(size);

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);
        onSizeChange(value);
        setInnerSize(value);
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
            InputProps={{ inputProps: { step: step ? step : 1, min: min, max: max } }}
            variant="outlined"
            fullWidth
        />
    );
};

export default SizeInput;
