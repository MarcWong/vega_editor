import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Box, Typography } from '@mui/material';

interface ColorInputProps {
    label: string;
    initialColor: string;
    onColorChange: (color: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ label, initialColor, onColorChange }) => {

    if(!initialColor){
        return null;
    }
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (newColor: any) => {
        setColor(newColor.hex);
        onColorChange(newColor.hex);
    };

    return (
        <Box>
            <Typography variant="h6">{label}:</Typography>
            <ChromePicker 
                color={color}
                onChangeComplete={handleColorChange}
                disableAlpha
            />
        </Box>
    );
};

export default ColorInput;
