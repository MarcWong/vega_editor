import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import SizeInput from './components/size-input';
import ColorInput from './components/color-input';
import RangeInput from './components/range-input';
import SelectInput from './components/select-input';
import { select } from 'd3';


interface ChoiceType{
    name:string,
    value:{},
    state:string
}

interface ChoicesState{
    name:string,
    state:string
}

const TextChangeComponent=({keyValues,updateEditorValue,choices})=>{

    if(!keyValues){
        return null;
    }

    const {chooseColorChange,chooseSizeChange,chooseOpacityChange,conditions,initial}=keyValues;

    const [choicesState, setChoicesState] = useState<Array<ChoicesState>>(choices.map(choice=>({name:choice.name,state:"none"})));

    useEffect(() => {
        setChoicesState(choices.map(choice => ({name:choice.name, state: "none"})));
    }, [choices]);
    
    useEffect(() => {
        const conditionString = choicesState.map(choice => {
            const {name,state} = choice;
            return `datum.${name} === '${state}'`;
        }).join(' && ');
        handleConditionChange(conditionString);

    }, [choicesState]);
  
    const handleConditionChange = (newCondition: string) => {
          updateEditorValue(conditions[0], newCondition);
          updateEditorValue(conditions[1], newCondition);
          updateEditorValue(conditions[2], newCondition);
    };

    const handleChosenColorChange = (newChosenColor: string) => {
        updateEditorValue(chooseColorChange[0], newChosenColor);
    };

    const handleDefaultColorChange = (newDefaultColor: string) => {
            updateEditorValue(chooseColorChange[1], newDefaultColor);
    }

    const handleChosenSizeChange = (newChosenSize: number) => {
        updateEditorValue(chooseSizeChange[0], newChosenSize);
    }

    const handleDefaultSizeChange = (newDefaultSize: number) => {
        updateEditorValue(chooseSizeChange[1], newDefaultSize);
    }

    const handleChosenOpacityChange = (newChosenOpacity: number) => {
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
            <ColorInput label="Global Color" initialColor={"aqua"} onColorChange={handleDefaultColorChange} />
        </Box>
        <Box mb={2}>
            <SizeInput size={initial?.chooseSizeChange?.size} label="Global Bar Width" onSizeChange={(e) => handleDefaultSizeChange(e)} min={initial?.chooseSizeChange?.min} max={initial?.chooseSizeChange?.max}/>
        </Box>
        <Box mb={2}>
            <RangeInput min={0} max={1} step={0.1} label="Global Bar Opacity" initialValue={1} onValueChange={handleDefaultOpacityChange} />
        </Box>


        <Box mb={2}>
            {choices.map((choice, index) => {
                const {value,name} = choice;
                return (
                    <Box key={name} mb={2}>
                        <SelectInput options={[...value,"none"]} label={name} selectedOption={"none"} onOptionSelect={(e)=>updateConditionChange(e,name)} />
                    </Box>
                )
            })}
        </Box>

        <Box mb={2}>
            <ColorInput label="Highlight Color" initialColor={"aqua"} onColorChange={handleChosenColorChange} />
        </Box>
        <Box mb={2}>
             <SizeInput size={initial?.chooseSizeChange?.conditionSize} label="Highlight Bar Size" onSizeChange={(e) => handleChosenSizeChange(e)} min={initial?.chooseSizeChange?.min} max={initial?.chooseSizeChange?.max}/>
        </Box>

        <Box mb={2}>
            <RangeInput min={0} max={1} step={0.1} label="Highlight Bar Opacity" initialValue={1} onValueChange={handleChosenOpacityChange} />
        </Box>
    </Box>
  )
}

export default TextChangeComponent
