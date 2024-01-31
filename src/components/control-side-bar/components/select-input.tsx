import React, { useState } from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@mui/material';

interface SelectInputProps {
    options: string[];
    label: string;
    selectedOption: string;
    onOptionSelect: (option: string) => void;
    style?: React.CSSProperties;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, label, selectedOption, onOptionSelect, style }) => {
    const [value, setValue] = useState(selectedOption);

    const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newValue = event.target.value as string;
        setValue(newValue);
        onOptionSelect(newValue);
    };

    return (
        <FormControl variant="outlined" style={style}>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <MuiSelect
                labelId={`${label}-label`}
                id={`${label}-select`}
                value={value}
                label={label}
                onChange={handleOptionChange}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default SelectInput;
