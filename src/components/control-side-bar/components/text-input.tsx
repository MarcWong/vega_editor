import React, { useState } from 'react';

interface TextInputProps {
    label: string;
    initialValue: string;
    onTextChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, initialValue, onTextChange }) => {
    const [text, setText] = useState(initialValue);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        onTextChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input
                type="text"
                id={label}
                name={label}
                value={text}
                onChange={handleTextChange}
            />
        </div>
    );
};

export default TextInput;
