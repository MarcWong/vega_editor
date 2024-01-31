import React, { useState } from 'react';
import { ChromePicker, SketchPicker } from 'react-color';
import { Box, Grid, Paper, Typography } from '@mui/material';
import reactCSS from 'reactcss'

interface ColorInputProps {
    label: string | Element;
    initialColor: string;
    onColorChange: (color: string) => void;
    gridsize: number;
}

const ColorInput: React.FC<ColorInputProps> = ({ label, initialColor, onColorChange, gridsize }) => {

    if(!initialColor){
        return null;
    }
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (newColor: any) => {
        setColor(newColor.hex);
        onColorChange(newColor.hex);
    };

    const [picker, setPicker] = React.useState(false);


    const handleClick = () => {
        setPicker(true)
    };

    const handleClose = () => {
        setPicker(false)
    };

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    /**
     * <Box>
            <Typography variant="h6">{label}:</Typography>
            <ChromePicker 
                color={color}
                onChangeComplete={handleColorChange}
                disableAlpha
            />
        </Box>
        <div style={{display:"flex", display: "flex", alignItems: "center"}}>
          
        </div>
     */

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={gridsize}>
            <Typography variant="subtitle1">{label}</Typography>
          </Grid>
          <Grid item xs={1}>
            <div style={ styles.swatch } onClick={ handleClick }>
                <div style={ styles.color } />
                </div>
                { picker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ handleClose }/>
                <SketchPicker color={ color } onChange={ handleColorChange } />
                </div> : null }
          </Grid>
        </Grid>
      </Box>
        

    );
};

export default ColorInput;
