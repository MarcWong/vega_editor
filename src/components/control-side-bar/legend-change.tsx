import React, { useEffect, useState } from 'react';
import SizeInput from './components/size-input';
import SelectInput from './components/select-input';
import { Box, Grid, Paper, Typography } from  '@mui/material';


const LEGEND_PATH = "vconcat.0.layer.0.encoding.color.legend"
const LEGEND_PATH_1 = "vconcat.0.encoding.color.legend"

const LegendComponent = ({ updateEditorValue,getEditorValue }) => {


  let legend=getEditorValue(LEGEND_PATH)
  if (legend == undefined) {
    legend=getEditorValue(LEGEND_PATH_1)
  }


  // useEffect(() => {
  //   setLegend(getEditorValue(LEGEND_PATH));
  // }, [getEditorValue(LEGEND_PATH)]);

  // useEffect(() => {
  // }, [legend]);

  return (
    <Box m={2}>
        <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"8px" }} elevation={3}> 
            <Typography variant="h6">Legend</Typography>
        </Paper>
        <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <SizeInput size={legend?.legendX} label="Legend X" onSizeChange={(legendX) => updateEditorValue(LEGEND_PATH,{ ...legend, legendX:legendX||0})} />
          </Grid>
          <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
            <SizeInput size={legend?.legendY} label="Legend Y" onSizeChange={(legendY) => updateEditorValue(LEGEND_PATH,{ ...legend, legendY:legendY||0})} />
          </Grid>
        </Grid>
    </Box>
  );
};

export default LegendComponent;
