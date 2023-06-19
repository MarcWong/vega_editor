import React, {useState} from 'react';
import { Box } from '@mui/material';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import RangeInput from './components/range-input';
import SelectInput from './components/select-input';

const TextChangeComponent=({keyValues,updateEditorValue,defaultValues={}})=>{


   if(!keyValues?.textColor){
    return null;
   }

  const {textColor,textAngle,textDx,textDy,textFontSize,textFontStyle,textFontWeight}=keyValues;
 
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

  if(!keyValues){
    return null;
  }

  return (
  <Box m={2}> {/* Added margin */}
    <Box mb={2}> {/* Added bottom margin */}
      <ColorInput label="Text Color" initialColor={"black"} onColorChange={handleTextColor} />
    </Box>
    <Box mb={2}>
      <RangeInput min={-180} max={180} step={1} label="Angle" initialValue={0} onValueChange={handleAngleChange} />
    </Box>
    <Box mb={2}>
      <RangeInput min={-20} max={20} step={1} label="Dx" initialValue={5} onValueChange={handleDxChange} />
    </Box>
    <Box mb={2}>
      <RangeInput min={-20} max={20} step={1} label="Dy" initialValue={5} onValueChange={handleDyChange} />
    </Box>
    <Box mb={2}>
      <RangeInput min={10} max={36} step={1} label="Font Size" initialValue={14} onValueChange={handleFontSize} />
    </Box>
    <Box mb={2}>
      <SelectInput
          options={["normal", "italic"]}
          label="Font Style"
          selectedOption={"normal"}
          onOptionSelect={handleFontStyle}
      />
    </Box>
    <Box mb={2}>
      <RangeInput min={100} max={900} step={100} label="Font Weight" initialValue={500} onValueChange={handleFontWeight} />
    </Box>
  </Box>
  )
}

export default TextChangeComponent;
