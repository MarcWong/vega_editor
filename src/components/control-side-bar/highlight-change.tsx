import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import RangeInput from './components/range-input';
import SelectInput from './components/select-input';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const HighlightComponent=({keyValues,updateEditorValue,choices,getEditorValue})=>{

    if(!keyValues){
        return null;
    }

    const {initial}=keyValues



    const chooseColorChange=[`${DEFAULT_CONDITION_PATH}.color.condition.value`,`${DEFAULT_CONDITION_PATH}.color.value`];
    const chooseSizeChange=[`${DEFAULT_CONDITION_PATH}.size.condition.value`,`${DEFAULT_CONDITION_PATH}.size.value`];
    const chooseOpacityChange=[`${DEFAULT_CONDITION_PATH}.opacity.condition.value`,`${DEFAULT_CONDITION_PATH}.opacity.value`];
    const conditions=[`${DEFAULT_CONDITION_PATH}.color.condition`,`${DEFAULT_CONDITION_PATH}.size.condition`,`${DEFAULT_CONDITION_PATH}.opacity.condition`];

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

    return (
        <Box m={2}>
            <Box mb={2}>
                {choices.map((choice, index) => {
                    const {value,name} = choice;
                    return (
                        <Box key={name} mb={2} >
                            <SelectInput options={[...value,"none"]} label={name} selectedOption={"none"} onOptionSelect={(e)=>updateConditionChange(e,name)} />
                        </Box>
                    )
                })}
            </Box>
    
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Chosen Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Box mb={2}>
                            <ColorInput label="Chosen Color" initialColor={initial?.chooseColorChange?.conditionColor} onColorChange={handleChosenColorChange} />
                        </Box>
                        <Box mb={2}>
                            <SizeInput size={initial?.chooseSizeChange?.conditionSize} label="choosen size" onSizeChange={(e) => handleChosenSizeChange(e)} min={initial?.chooseSizeChange?.min} max={initial?.chooseSizeChange?.max}/>
                        </Box>
                        <Box mb={2}>
                            <RangeInput min={0} max={1} step={0.1} label="Chosen Opacity" initialValue={1} onValueChange={handleChosenOpacityChange} />
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
    
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Global Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Box mb={2}>
                            <ColorInput label="Default Color" initialColor={initial?.chooseColorChange?.color} onColorChange={handleDefaultColorChange} />
                        </Box>
                        <Box mb={2}>
                            <SizeInput size={initial?.chooseSizeChange?.size} label="default size" onSizeChange={(e) => handleDefaultSizeChange(e)} min={initial?.chooseSizeChange?.min} max={initial?.chooseSizeChange?.max}/>
                        </Box>
                        <Box mb={2}>
                            <RangeInput min={0} max={1} step={0.1} label="Default Opacity" initialValue={1} onValueChange={handleDefaultOpacityChange} />
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default HighlightComponent
