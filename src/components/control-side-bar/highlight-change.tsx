import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import RangeInput from './components/range-input';
import SelectInput from './components/select-input';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper, Grid, FormControlLabel, Checkbox, Slider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightIcon from '@mui/icons-material/Highlight';

interface ChoiceType{
    name:string,
    value:{},
    state?:string
}

interface ChoicesState{
    name:string,
    state:string
}

const DEFAULT_CONDITION_PATH="vconcat.0.layer.0.encoding";
const TEXT_DEFAULT_CONDITION_PATH="vconcat.0.layer.1.encoding";


const HighlightComponent=({keyValues,updateEditorValue,choices,getEditorValue})=>{

    if(!keyValues){
        return null;
    }

    const {initial}=keyValues



    const chooseColorChange=[`${DEFAULT_CONDITION_PATH}.color.condition.value`,`${DEFAULT_CONDITION_PATH}.color.value`];
    const chooseSizeChange=[`${DEFAULT_CONDITION_PATH}.size.condition.value`,`${DEFAULT_CONDITION_PATH}.size.value`];
    const chooseOpacityChange=[`${DEFAULT_CONDITION_PATH}.opacity.condition.value`,`${DEFAULT_CONDITION_PATH}.opacity.value`];
    const conditions=[`${DEFAULT_CONDITION_PATH}.color.condition`,`${DEFAULT_CONDITION_PATH}.size.condition`,`${DEFAULT_CONDITION_PATH}.opacity.condition`];

    const textChooseColorChange=[`${TEXT_DEFAULT_CONDITION_PATH}.color.condition.value`,`${TEXT_DEFAULT_CONDITION_PATH}.color.value`];
    const textConditions=[`${TEXT_DEFAULT_CONDITION_PATH}.color.condition`]

    const [choicesState, setChoicesState] = useState<Array<ChoicesState>>(choices.map(choice=>({name:choice.name,state:"none"})));
    const [conditionString, setConditionString] = useState<string>("");
    useEffect(() => {
        setChoicesState(choices.map(choice => ({name:choice.name, state: "none"})));
    }, [choices]);
    
    useEffect(() => {
        const conditionString = choicesState.map(choice => {
            const {name,state} = choice;
            return `datum.${name} === '${state}'`;
        }).join(' && ');
        setConditionString(conditionString);
    }, [choicesState]);

    const handleChosenColorChange = (newChosenColor: string) => {
        // if conditionString does not include "none"
        if(conditionString.includes("none")){
            return;
        }
        let conditionArray=getEditorValue(conditions[0]);
        if(!conditionArray?.length){
            conditionArray=[];
        }

        conditionArray.forEach((condition,index)=>{
            if(condition.test===conditionString){
                conditionArray.splice(index,1);
            }
        })
        conditionArray.push({
            test:conditionString,
            value:newChosenColor
        });
        updateEditorValue(conditions[0],conditionArray);
    };

    const handleDefaultColorChange = (newDefaultColor: string) => {
        updateEditorValue(chooseColorChange[1], newDefaultColor);
    }

    const handleChosenSizeChange = (newChosenSize: number) => {
        if(conditionString.includes("none")){
            return;
        }
        let conditionArray=getEditorValue(conditions[1]);
        if(!conditionArray?.length){
            conditionArray=[];
        }

        conditionArray.forEach((condition,index)=>{
            if(condition.test===conditionString){
                conditionArray.splice(index,1);
            }
        })
        conditionArray.push({
            test:conditionString,
            value:newChosenSize
        });
        updateEditorValue(conditions[1],conditionArray);
    }

    const handleDefaultSizeChange = (newDefaultSize: number) => {
        updateEditorValue(chooseSizeChange[1], newDefaultSize);
    }

    const handleChosenOpacityChange = (newChosenOpacity: number) => {
        if(conditionString.includes("none")){
            return;
        }
        let conditionArray=getEditorValue(conditions[2]);
        if(!conditionArray?.length){
            conditionArray=[];
        }

        conditionArray.forEach((condition,index)=>{
            if(condition.test===conditionString){
                conditionArray.splice(index,1);
            }
        })
        conditionArray.push({
            test:conditionString,
            value:newChosenOpacity
        });
        updateEditorValue(chooseOpacityChange[0], newChosenOpacity);
    }

    const handleDefaultOpacityChange = (newDefaultOpacity: number) => {
        updateEditorValue(chooseOpacityChange[1], newDefaultOpacity);
    }

    const updateConditionChange=(e,name)=>{
        const newChoicesState=choicesState.map(choice=>{
            if(choice.name===name){
                choice.state=e;
            }
            return choice;
        })
        setChoicesState(newChoicesState);
    }

    const handleTextChosenColorChange = (newChosenColor: string) => {
        // if conditionString does not include "none"
        if(conditionString.includes("none")){
            return;
        }
        let conditionArray=getEditorValue(textConditions[0]);
        if(!conditionArray?.length){
            conditionArray=[];
        }

        conditionArray.forEach((condition,index)=>{
            if(condition.test===conditionString){
                conditionArray.splice(index,1);
            }
        })
        conditionArray.push({
            test:conditionString,
            value:newChosenColor
        });
        updateEditorValue(textConditions[0],conditionArray);
    };

    const handleTextDefaultColorChange = (newDefaultColor: string) => {
        updateEditorValue(textChooseColorChange[1], newDefaultColor);
    }

    return (
        <Box m={2}>
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"8px" }} elevation={3}> 
                <Typography variant="h6">Appearance</Typography>
            </Paper>
            <Grid container spacing={2} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
                {choices.map((choice, index) => {
                    const {value, name} = choice;
                    return (
                        value.map((v,i) => {
                        return(
                        <Grid key={v} item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                                <FormControlLabel control={<Checkbox
                                    checked={choicesState.filter(choice=>choice.name===name)[0]?.state === v}
                                    onChange={(_,e) => {
                                        updateConditionChange(e?v:"none", name)
                                    }}
                                    icon={<HighlightIcon />}
                                    checkedIcon={<HighlightIcon />}
                                />} label = {v} />
                        </Grid>)
                        })
                    )
                })}
            </Grid>
            <Grid container spacing={2} style={{ textAlign: "center", marginBottom:"8px"}}>
            <Grid item xs={6} style={{alignItems: "center", textAlign: "center"}}>
                <Paper elevation={2} style={{ margin:"auto" }}>
                    <div style={{ margin:"3px" }}>
                    <Typography variant="h6">Lowlight</Typography>
                    </div>
                    <Box mb={2}>
                        <ColorInput gridsize={6} label="Data Color" initialColor={initial?.chooseColorChange?.color} onColorChange={handleDefaultColorChange} />
                        <ColorInput gridsize={6} label="Text Color" initialColor={initial?.chooseColorChange?.color||"000000"} onColorChange={handleTextDefaultColorChange} />
                    </Box>
                    <Box mb={2}>
                        <div style={{ margin:"5px", alignItems: "center", textAlign: "center" }}>
                            <SizeInput size={initial?.chooseSizeChange?.size||30} label="Width" onSizeChange={(e) => handleDefaultSizeChange} min={initial?.chooseSizeChange?.min||10} max={initial?.chooseSizeChange?.max||100}/>
                        </div>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="subtitle1">Opacity</Typography>
                        <div style={{ marginLeft:"30px", marginRight:"30px", alignItems: "center", textAlign: "center" }}>
                        <Slider
                            marks
                            step={0.1}
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1}
                            onChange={(e, v) => handleDefaultOpacityChange(v)}
                        />
                        </div>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6} style={{alignItems: "center", textAlign: "center"}}>
                <Paper elevation={2} style={{ margin:"auto" }}>
                    <div style={{  margin:"3px" }}>
                    <Typography variant="h6">Highlight</Typography>
                    </div>
                    <Box mb={2}>
                        <ColorInput gridsize={6} label="Data Color" initialColor={initial?.chooseColorChange?.conditionColor} onColorChange={handleChosenColorChange} />
                        <ColorInput gridsize={6} label="Text Color" initialColor={initial?.chooseColorChange?.color||"000000"} onColorChange={handleTextChosenColorChange} />
                    </Box>
                    
                    <Box mb={2}>
                        <div style={{ margin:"5px", alignItems: "center", textAlign: "center" }}>
                        <SizeInput size={initial?.chooseSizeChange?.conditionSize} label="Width" onSizeChange={(e) => handleChosenSizeChange} min={initial?.chooseSizeChange?.min} max={initial?.chooseSizeChange?.max}/>
                        </div>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="subtitle1">Opacity</Typography>
                        <div style={{ marginLeft:"30px", marginRight:"30px", alignItems: "center", textAlign: "center" }}>
                        <Slider
                            marks
                            step={0.1}
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1}
                            onChange={(e, v) => handleChosenOpacityChange(v)}
                        />
                        </div>
                    </Box>
                </Paper>
            </Grid>
            </Grid>
        </Box>
    )
}

export default HighlightComponent
