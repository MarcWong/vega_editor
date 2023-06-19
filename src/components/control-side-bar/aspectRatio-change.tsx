import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import { Box } from  '@mui/material';

const AspectRatioComponent = ({ keyValue, updateEditorValue, fixedWidth = 400, defaultAspectRatio = 1 }) => {
  const [aspectRatio, setAspectRatio] = useState(defaultAspectRatio);
  
  const handleAspectRatioChange = (newAspectRatio: number) => {
    setAspectRatio(newAspectRatio);
  };

  useEffect(() => {
    updateEditorValue(keyValue, fixedWidth / aspectRatio);
  }, [aspectRatio]);

  if (!keyValue) {
    return null;
  }

  return (
    <Box m={2}>
      <SizeInput size={aspectRatio} label="Aspect Ratio" onSizeChange={handleAspectRatioChange} step={0.1} />
    </Box>
  );
};

export default AspectRatioComponent;
