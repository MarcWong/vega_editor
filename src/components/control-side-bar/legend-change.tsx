import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import SelectInput from './components/select-input';
import { Box } from  '@mui/material';


const LEGEND_PATH="vconcat.0.layer.0.encoding.color.legend"

const LegendComponent = ({ updateEditorValue,getEditorValue }) => {


  const legend=getEditorValue(LEGEND_PATH);


  // console.log("legend",legend,getEditorValue(LEGEND_PATH)

  // useEffect(() => {
  //   setLegend(getEditorValue(LEGEND_PATH));
  // }, [getEditorValue(LEGEND_PATH)]);

  // useEffect(() => {
  // }, [legend]);

  return (
    <Box m={2}>
       <SizeInput size={legend?.legendX} label="Legend X" onSizeChange={(legendX) => updateEditorValue(LEGEND_PATH,{ ...legend, legendX:legendX||0})} />
        <SizeInput size={legend?.legendY} label="Legend Y" onSizeChange={(legendY) => updateEditorValue(LEGEND_PATH,{ ...legend, legendY:legendY||0})} />
    </Box>
  );
};

export default LegendComponent;
