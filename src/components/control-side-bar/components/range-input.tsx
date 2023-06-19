import React, { useState } from 'react';
import { Slider, FormControl, FormLabel } from '@mui/material';

interface RangeInputProps {
    min: number;
    max: number;
    step: number;
    label: string;
    initialValue: number;
    onValueChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ min, max, step, label, initialValue, onValueChange }) => {
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
        onValueChange(newValue as number);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleValueChange}
                valueLabelDisplay="auto"
            />
        </FormControl>
    );
};

export default RangeInput;
