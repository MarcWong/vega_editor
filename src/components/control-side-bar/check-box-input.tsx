import React, { useState } from 'react';

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
        <div>
            <label htmlFor={label}>{label}:</label>
            <input
                type="checkbox"
                id={label}
                name={label}
                checked={checked}
                onChange={handleCheckChange}
            />
        </div>
    );
};

export default CheckboxInput;
