import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ColorInput from './components/color-input';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const COLOR_ARRAY_PATH = "vconcat.0.layer.0.encoding.color.scale.range";
const COLOR_DOMAIN_PATH = "vconcat.0.layer.0.encoding.color.scale.domain";

const ColorArrayInput: React.FC<any> = ({keyValues,updateEditorValue,getEditorValue}) => {
    
    // if(!keyValues?.types){
    //     return null;
    // }

    const colors= getEditorValue(COLOR_ARRAY_PATH);
    const DOMAINS= getEditorValue(COLOR_DOMAIN_PATH);

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
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"12px" }} elevation={3}> 
                <Typography variant="h6">Values</Typography>
            </Paper>
            <div style={{margin:"12px"}}></div>
            {colors.map((color, index) => (
                <Box key={index} mb={2}>
                    <ColorInput gridsize={4} label={DOMAINS[index] + ":"} initialColor={color} onColorChange={(newColor) => handleColorChange(newColor, index)} />
                </Box>
            ))}
        </Box>
    );
}

export default ColorArrayInput;
