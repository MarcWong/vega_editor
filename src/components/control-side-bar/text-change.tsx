import React, {useState,useEffect} from 'react';
import { Box } from '@mui/material';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import SelectInput from './components/select-input';
import CheckboxInput from './components/check-box-input';
import RangeInput from './components/range-input';
import { CheckBox } from '@mui/icons-material';

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

const DEFAULT_TEXT_PATH="vconcat.0.layer.1"

// "textColor": "vconcat.0.layer.1.encoding.color.value",
// "textAngle": "vconcat.0.layer.1.mark.angle",
// "textDx": "vconcat.0.layer.1.mark.dx",
// "textDy": "vconcat.0.layer.1.mark.dy",
// "textFontSize": "vconcat.0.layer.1.mark.fontSize",
// "textFontStyle": "vconcat.0.layer.1.mark.fontStyle",
// "textFontWeight": "vconcat.0.layer.1.mark.fontWeight",
// "textOpacity": "vconcat.0.layer.1.mark.opacity",

const TEXT_COLOR_PATH=`${DEFAULT_TEXT_PATH}.encoding.color.value`;
const TEXT_ANGLE_PATH=`${DEFAULT_TEXT_PATH}.mark.angle`;
const TEXT_DX_PATH=`${DEFAULT_TEXT_PATH}.mark.dx`;
const TEXT_DY_PATH=`${DEFAULT_TEXT_PATH}.mark.dy`;
const TEXT_FONT_SIZE_PATH=`${DEFAULT_TEXT_PATH}.mark.fontSize`;
const TEXT_FONT_STYLE_PATH=`${DEFAULT_TEXT_PATH}.mark.fontStyle`;
const TEXT_FONT_WEIGHT_PATH=`${DEFAULT_TEXT_PATH}.mark.fontWeight`;
const TEXT_OPACITY_PATH=`${DEFAULT_TEXT_PATH}.mark.opacity`;

const TextChangeComponent=({keyValues,updateEditorValue,getEditorValue})=>{
   if(!keyValues?.initial){
    return null;
   }

  let {initial}=keyValues;

  if(!initial){
    initial=defaultInitial;
  }

  // useEffect(()=>{
  //   if(!keyValues?.textColor){
  //     return;
  //   }
  //   updateEditorValue(TEXT_COLOR_PATH,initial?.textColor);
  //   updateEditorValue(TEXT_ANGLE_PATH,initial?.textAngle?.init);
  //   updateEditorValue(TEXT_DX_PATH,initial?.textDx?.init);
  //   updateEditorValue(TEXT_DY_PATH,initial?.textDy?.init);
  //   updateEditorValue(TEXT_FONT_SIZE_PATH,initial?.textFontSize?.init);
  //   updateEditorValue(TEXT_FONT_STYLE_PATH,initial?.textFontStyle?.init);
  //   updateEditorValue(TEXT_FONT_WEIGHT_PATH,initial?.textFontWeight?.init);
  //   updateEditorValue(TEXT_OPACITY_PATH,1);
  // },[keyValues])
 
  const handleTextColor= (newTextColor: string) => {
    updateEditorValue(TEXT_COLOR_PATH, newTextColor);
    };

  const handleAngleChange = (newAngle: number) => {
    updateEditorValue(TEXT_ANGLE_PATH, newAngle);
  };

  const handleDxChange = (newDx: number) => {
      updateEditorValue(TEXT_DX_PATH, newDx);
  };

  const handleDyChange = (newDy: number) => {
      updateEditorValue(TEXT_DY_PATH, newDy);
  };

    const handleFontSize= (newFontSize: number) => {
        updateEditorValue(TEXT_FONT_SIZE_PATH, newFontSize);
    };

    const handleFontWeight= (newFontWeight: number) => {
        updateEditorValue(TEXT_FONT_WEIGHT_PATH, newFontWeight);
    };

    const handleFontStyle= (newFontStyle: string) => {
        updateEditorValue(TEXT_FONT_STYLE_PATH, newFontStyle);
    }

    const handleTextOpacityChange=(e)=>{
      if(e){
        updateEditorValue(TEXT_OPACITY_PATH,1);
      }else{
        updateEditorValue(TEXT_OPACITY_PATH,0);
      }
    }

  return (
  <Box m={2}> {/* Added margin */}
    <Box mb={2}> {/* Added bottom margin */}
      <ColorInput label="Text Color" initialColor={getEditorValue(TEXT_COLOR_PATH)} onColorChange={handleTextColor} />
    </Box>
    <Box mb={2}>
      <SizeInput size={getEditorValue(TEXT_DX_PATH)} label="Dx" onSizeChange={handleDxChange} min={initial?.textDx?.min} 
      max={initial?.textDx?.max} step={initial?.textDx?.step} />
    </Box>
    <Box mb={2}>
      <SizeInput size={getEditorValue(TEXT_DY_PATH)} label="Dy" onSizeChange={handleDyChange} min={initial?.textDy?.min}
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
      <CheckboxInput label="TextOpacity" initialChecked={true} onCheckChange={(e) => handleTextOpacityChange(e)} />
    </Box>

    <Box mb={2}>
      <SizeInput size={getEditorValue(TEXT_ANGLE_PATH)} label="Angle" onSizeChange={handleAngleChange} min={initial?.textAngle?.min} 
      max={initial?.textAngle?.max} step={initial?.textAngle?.step} />
    </Box>
  
  </Box>
  )
}

export default TextChangeComponent;
