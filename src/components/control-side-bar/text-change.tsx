import React, {useState,useEffect} from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Paper, RadioGroup, Tooltip, Typography } from '@mui/material';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import SelectInput from './components/select-input';
import CheckboxInput from './components/check-box-input';
import RangeInput from './components/range-input';
import { CheckBox } from '@mui/icons-material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';

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

  let {initial} = keyValues;

  const [changeFormat, setStyle] = React.useState(0);


  const [textSize, setTextSize] = React.useState(initial.textFontSize.init);
  const [dx, setDX] = React.useState(getEditorValue(TEXT_DX_PATH));
  const [dy, setDY] = React.useState(getEditorValue(TEXT_DY_PATH));
  const [angle, setAngle] = React.useState(getEditorValue(TEXT_ANGLE_PATH));


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
    setAngle(newAngle);
    updateEditorValue(TEXT_ANGLE_PATH, newAngle);
  };

  const handleDxChange = (newDx: number) => {
    setDX(newDx);
      updateEditorValue(TEXT_DX_PATH, newDx);
  };

  const handleDyChange = (newDy: number) => {
    setDY(newDy);
      updateEditorValue(TEXT_DY_PATH, newDy);
  };

    const handleFontSize= (newFontSize: number) => {
        setTextSize(newFontSize);
        updateEditorValue(TEXT_FONT_SIZE_PATH, newFontSize);
    };

    const handleFontWeight= (newFontWeight: number) => {
        updateEditorValue(TEXT_FONT_WEIGHT_PATH, newFontWeight);
    };

    const handleFontStyle= (newFontStyle: string) => {
      console.log(newFontStyle)
        updateEditorValue(TEXT_FONT_STYLE_PATH, newFontStyle);
    }

    const handleTextOpacityChange=(e)=>{
      if(e){
        updateEditorValue(TEXT_OPACITY_PATH,1);
      }else{
        updateEditorValue(TEXT_OPACITY_PATH,0);
      }
    }

    /**<CheckboxInput label="TextOpacity" initialChecked={true} onCheckChange={(e) => handleTextOpacityChange(e)} /> */


  return (
  <Box m={2}> {/* Added margin */}
    <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"12px" }} elevation={3}> 
        <Typography variant="h6">Appearance</Typography>
    </Paper>
    <Box mb={2}> {/* Added bottom margin */}
      <Grid container spacing={2} style={{alignItems: "center", textAlign: "center"}}>
          <Grid item xs={2} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Adjust fill color of the text inside the graphic"}>
              <div>
                <ColorInput girdsize={1} label={<FormatColorTextIcon/>} initialColor={getEditorValue(TEXT_COLOR_PATH)} onColorChange={handleTextColor} />
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={4} style={{ alignItems: "center", textAlign: "center", display:"flex"}}>
              <Tooltip placement="top" title={"Adjust fontsize directly"}>
              <div style={{margin:"5px"}} >
              <SizeInput size={textSize} label="Size" onSizeChange={handleFontSize} min={initial.textFontSize.min} 
              max={initial.textFontSize.max} step={initial.textFontSize.step} />
              </div>
              </Tooltip>
              <Tooltip placement="top" title={"Decrase Fontsizy by 1"}>
              <IconButton onClick={() => handleFontSize(textSize - 1)}>
                <TextDecreaseIcon />
              </IconButton>
              </Tooltip>
              <Tooltip placement="top" title={"Incrase Fontsizy by 1"}>
              <IconButton onClick={() => handleFontSize(textSize + 1)}>
                <TextIncreaseIcon />
              </IconButton>
              </Tooltip>
              
          </Grid>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Change Fontstyle to normal - bold - italic"}>
              <div>
                <Checkbox
                                          checked={changeFormat === 0}
                                          onChange={() => {
                                            setStyle(0);
                                            handleFontStyle("normal")
                                          }}
                                          icon={<FormatClearIcon />}
                                          checkedIcon={<FormatClearIcon />}
                                        />
                <Checkbox
                                          checked={changeFormat=== 1}
                                          onChange={() => {
                                            setStyle(1);
                                            handleFontStyle("bold")
                                          }}
                                          icon={<FormatBoldIcon />}
                                          checkedIcon={<FormatBoldIcon />}
                                        />
                <Checkbox
                                          checked={changeFormat=== 2}
                                          onChange={() => {
                                            setStyle(2);
                                            handleFontStyle("italic")
                                          }}
                                          icon={<FormatItalicIcon />}
                                          checkedIcon={<FormatItalicIcon />}
                                        />                                           
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={2} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Change the Fontweight, so the width of the stroke changes"}>
              <div>
                <SizeInput size={500} label="Weight" onSizeChange={handleFontWeight} min={100} max={900} step={100} />
              </div>
            </Tooltip>
          </Grid>
          
          
      </Grid>
    </Box>
    <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"12px" }} elevation={3}> 
        <Typography variant="h6">Position</Typography>
    </Paper>
    <Grid container spacing={2} style={{alignItems: "center", textAlign: "center"}}>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Change the x-position of the text. Dx is the difference between the determined position and the current one. Negative values shift the text to the left by the amount of pixel"}>
              <div>
            <div style={{margin:"5px"}} >
            <SizeInput size={dx} label="Dx" onSizeChange={handleDxChange} min={initial?.textDx?.min} 
                  max={initial?.textDx?.max} step={initial?.textDx?.step} />
            </div>
            <IconButton onClick={() => handleDxChange(dx - 1)}>
                <ArrowLeftIcon />
              </IconButton>
            <IconButton onClick={() => handleDxChange(dx + 1)}>
                <ArrowRightIcon />
              </IconButton>
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Change the y-position of the text. Dy is the difference between the determined position and the current one. Negative values shift the text to the top by the amount of pixel"}>
              <div>
            <div style={{margin:"5px"}} >
            <SizeInput size={dy} label="Dy" onSizeChange={handleDyChange} min={initial?.textDy?.min}
                max={initial?.textDy?.max} step={initial?.textDy?.step} />
            </div>
            <IconButton onClick={() => handleDyChange(dy - initial?.textDy?.step)}>
                <ArrowDropDownIcon />
              </IconButton>
            <IconButton onClick={() => handleDyChange(dy + initial?.textDy?.step)}>
                <ArrowDropUpIcon />
              </IconButton>
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <Tooltip placement="top" title={"Change the angle of the text. Values are in Degree, so -90 rotates the text to the left by 90 degree"}>
              <div>
            <div style={{margin:"5px"}} >
            <SizeInput size={angle} label="Angle" onSizeChange={handleAngleChange} min={initial?.textAngle?.min} 
              max={initial?.textAngle?.max} step={initial?.textAngle?.step} />
            </div>
            <IconButton onClick={() => handleAngleChange(angle - initial?.textAngle?.step)}>
                <RotateLeftIcon />
              </IconButton>
            <IconButton onClick={() => handleAngleChange(angle + initial?.textAngle?.step)}>
                <RotateRightIcon />
              </IconButton>
              </div>
            </Tooltip>
          </Grid>
    </Grid>
  
  </Box>
  )
}

export default TextChangeComponent;
