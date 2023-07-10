import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ColorInput from './components/color-input';


const COLOR_ARRAY_PATH = "vconcat.0.layer.0.encoding.color.scale.range";

const ColorArrayInput: React.FC<any> = ({keyValues,updateEditorValue,getEditorValue}) => {
    if(!keyValues?.types){
        return null;
    }

    const colors= getEditorValue(COLOR_ARRAY_PATH);

    if(!colors){
        return null;
    }

    const handleColorChange = (color: string, index: number) => {
        const newColors = [...colors];
        newColors[index] = color;
        updateEditorValue(COLOR_ARRAY_PATH, newColors);
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
