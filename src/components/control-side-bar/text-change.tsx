import React, {useState} from 'react';
import { Box } from '@mui/material';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import SelectInput from './components/select-input';
import CheckboxInput from './components/check-box-input';
import RangeInput from './components/range-input';

const defaultInitial= {
  "textColor": "#000000",
  "textAngle": {
    "init": 0,
    "min": 0,
    "max": 180,
    "step": 1,
  },
  "textDx": {
    "init": 0,
    "min": -10,
    "max": 10,
    "step": 1,
  },
  "textDy": {
    "init": 0,
    "min": -10,
    "max": 10,
    "step": 1,
  },
  "textFontSize": {
    "init": 11,
    "min": 1,
    "max": 20,
    "step": 1,
  },
  "textFontStyle": {
    "init": "normal",
    "options": ["normal", "italic", "oblique"],
  },
  "textFontWeight": {
    "init": "normal",
    "options": ["normal", "bold", "bolder", "lighter"],
  },
}

const TextChangeComponent=({keyValues,updateEditorValue})=>{

   if(!keyValues?.textColor){
    return null;
   }

  let {textColor,textAngle,textDx,textDy,textFontSize,textFontStyle,textFontWeight,initial,textOpacity}=keyValues;

  if(!initial){
    initial=defaultInitial;
  }
 
  const handleTextColor= (newTextColor: string) => {
    updateEditorValue(textColor, newTextColor);
    };

  const handleAngleChange = (newAngle: number) => {
    updateEditorValue(textAngle, newAngle);
  };

  const handleDxChange = (newDx: number) => {
      updateEditorValue(textDx, newDx);
  };

  const handleDyChange = (newDy: number) => {
      updateEditorValue(textDy, newDy);
  };

    const handleFontSize= (newFontSize: number) => {
        updateEditorValue(textFontSize, newFontSize);
    };

    const handleFontWeight= (newFontWeight: number) => {
        updateEditorValue(textFontWeight, newFontWeight);
    };

    const handleFontStyle= (newFontStyle: string) => {
        updateEditorValue(textFontStyle, newFontStyle);
    }

  return (
  <Box m={2}> {/* Added margin */}
    <Box mb={2}> {/* Added bottom margin */}
      <ColorInput label="Text Color" initialColor={initial?.textColor} onColorChange={handleTextColor} />
    </Box>
    <Box mb={2}>
      <SizeInput size={initial?.textAngle?.init} label="Angle" onSizeChange={handleAngleChange} min={initial?.textAngle?.min} 
      max={initial?.textAngle?.max} step={initial?.textAngle?.step} />
    </Box>
    <Box mb={2}>
      <SizeInput size={initial?.textDx?.init} label="Dx" onSizeChange={handleDxChange} min={initial?.textDx?.min} 
      max={initial?.textDx?.max} step={initial?.textDx?.step} />
    </Box>
    <Box mb={2}>
      <SizeInput size={initial?.textDy?.init} label="Dy" onSizeChange={handleDyChange} min={initial?.textDy?.min}
       max={initial?.textDy?.max} step={initial?.textDy?.step} />
    </Box>
    <Box mb={2}>
      <SizeInput size={11} label="Font Size" onSizeChange={handleFontSize} min={2} 
      max={40} step={1} />
    </Box>
    <Box mb={2}>
      <SelectInput
          options={["normal", "italic", "oblique"]}
          label="Font Style"
          selectedOption={"normal"}
          onOptionSelect={handleFontStyle}
      />
    </Box>
    <Box mb={2}>
      <SizeInput size={500} label="Font Weight" onSizeChange={handleFontWeight} min={100} max={900} step={100} />
    </Box>

    <Box mb={2}>
      {textOpacity && <RangeInput min={0} max={1} step={0.1} label="Text Opacity" initialValue={1} onValueChange={(e)=>updateEditorValue(textOpacity,e)} />}
    </Box>
  
  </Box>
  )
}

export default TextChangeComponent;
