import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import { Box, Paper, Slider, Typography } from  '@mui/material';


    // path  "height": "vconcat.0.height",
const PATH_HEIGHT = "vconcat.0.height";
const PATH_WIDTH = "vconcat.0.width";
const AspectRatioComponent = ({ keyValue, updateEditorValue,getEditorValue }) => {
  if (!keyValue&&!keyValue?.min) {
    return null;
  }
  const {min,max,step}=keyValue;

  // const [aspectRatio, setAspectRatio] = useState( getEditorValue(PATH_WIDTH) / getEditorValue(PATH_HEIGHT));
  const aspectRatio = getEditorValue(PATH_WIDTH) / getEditorValue(PATH_HEIGHT);

  const handleAspectRatioChange = (e:Event, newAspectRatio: number) => {
    updateEditorValue(PATH_HEIGHT, getEditorValue(PATH_WIDTH)/ newAspectRatio);
  };

  // useEffect(() => {
  //   updateEditorValue(PATH_HEIGHT, getEditorValue(PATH_WIDTH)/ aspectRatio);
  // }, [aspectRatio]);

  return (
    <Box m={3}>
      <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"15px" }} elevation={3}> 
          <Typography variant="h6">Aspect Ratio</Typography>
      </Paper>
      <Slider
        marks
        step={step}
        defaultValue={aspectRatio}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={handleAspectRatioChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
        >
          {min}
        </Typography>
        <Typography
          variant="body2"
        >
          {max}
        </Typography>
      </Box>
    </Box>
  );
};

export default AspectRatioComponent;
