import React from 'react';
import { Slider, FormGroup, FormControl, FormLabel } from '@mui/material';

interface ScaleDomainInputProps {
    min: number;
    max: number;
    label: string;
    onDomainChange: (min: number, max: number) => void;
}

const ScaleDomainInput: React.FC<ScaleDomainInputProps> = ({ min, max, label, onDomainChange }) => {
    const handleDomainChange = (event: any, newValue: number | number[]) => {
        onDomainChange(newValue[0], newValue[1]);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
                <Slider
                    value={[min, max]}
                    onChange={handleDomainChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={-100}
                    max={100}
                    step={10}
                />
            </FormGroup>
        </FormControl>
    );
};

export default ScaleDomainInput;
