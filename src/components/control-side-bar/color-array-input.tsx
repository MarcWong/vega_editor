import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ColorInput from './components/color-input';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
        <Grid container spacing={1} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
            {colors.map((color, index) => (
                <Grid key={index} item xs={6} style={{alignItems: "center", textAlign: "center"}}>
                    <ColorInput gridsize={5} label={DOMAINS[index] + ":"} initialColor={color} onColorChange={(newColor) => handleColorChange(newColor, index)} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ColorArrayInput;
