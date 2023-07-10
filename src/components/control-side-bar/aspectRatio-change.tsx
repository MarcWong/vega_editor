import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import { Box } from  '@mui/material';


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

  const handleAspectRatioChange = (newAspectRatio: number) => {
    updateEditorValue(PATH_HEIGHT, getEditorValue(PATH_WIDTH)/ newAspectRatio);
  };

  // useEffect(() => {
  //   updateEditorValue(PATH_HEIGHT, getEditorValue(PATH_WIDTH)/ aspectRatio);
  // }, [aspectRatio]);

  return (
    <Box m={2}>
      <SizeInput size={aspectRatio} label="Aspect Ratio" onSizeChange={handleAspectRatioChange}
       step={step} min={min} max={max} />
    </Box>
  );
};

export default AspectRatioComponent;
