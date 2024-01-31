import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CheckboxInputProps {
    label: string;
    initialChecked: boolean;
    onCheckChange: (checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, initialChecked, onCheckChange }) => {
    const [checked, setChecked] = useState(initialChecked);

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onCheckChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleCheckChange}
                    color="primary"
                />
            }
            label={label}
        />
    );
};

export default CheckboxInput;
