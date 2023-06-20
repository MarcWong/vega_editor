import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import { Box } from  '@mui/material';
import { key } from 'vega-typings/types';

const AspectRatioComponent = ({ keyValue, updateEditorValue }) => {
  if (!keyValue&&!keyValue?.initial) {
    return null;
  }
  const {height,initialWidth,initial,min,max,step}=keyValue;

  const [aspectRatio, setAspectRatio] = useState(initial);

  const handleAspectRatioChange = (newAspectRatio: number) => {
    setAspectRatio(newAspectRatio);
  };

  useEffect(() => {
    updateEditorValue(height, initialWidth / aspectRatio);
  }, [aspectRatio]);

  return (
    <Box m={2}>
      <SizeInput size={aspectRatio} label="Aspect Ratio" onSizeChange={handleAspectRatioChange}
       step={step} min={min} max={max} />
    </Box>
  );
};

export default AspectRatioComponent;
