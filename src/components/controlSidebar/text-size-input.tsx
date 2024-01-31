// TextSizeInput.js
import React from 'react';

interface TextSizeInputProps {
    size: number;
    onSizeChange: (size: number) => void;
}

const TextSizeInput: React.FC<TextSizeInputProps> = ({ size, onSizeChange }) => {
    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSizeChange(Number(event.target.value));
    };

    return (
        <div className="input-group">
            <label htmlFor="text-size-input">Text Size</label>
            <input
                type="number"
                id="text-size-input"
                min="1"
                max="30"
                value={size}
                onChange={handleSizeChange}
            />
        </div>
    );
};

export default TextSizeInput;
