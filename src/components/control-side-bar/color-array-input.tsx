import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ColorInput from './components/color-input';

interface ColorArrayInputProps {
    updateEditorValue: (path: string, value: any) => void;
    keyValues: any;
}

const ColorArrayInput: React.FC<ColorArrayInputProps> = ({keyValues,updateEditorValue}) => {
    if(!keyValues?.types){
        return null;
    }
    // const {types,colors}=keyValues;
    const [colors, setColors] = useState<string[]>(keyValues.colors);

    useEffect(() => {
        updateEditorValue(keyValues.path, colors);
    }, [colors]);

    const handleColorChange = (color: string, index: number) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    }

    return (
        <Box m={2}>
            {colors.map((color, index) => (
                <Box key={index} mb={2}>
                    <ColorInput label={keyValues?.types[index]} initialColor={color} onColorChange={(newColor) => handleColorChange(newColor, index)} />
                </Box>
            ))}
        </Box>
    );
}

export default ColorArrayInput;
