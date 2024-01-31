import React, { useEffect, useState } from 'react';
import RangeInput from './components/range-input';
import ScaleDomainInput from './components/scale-domain-input';
import CheckboxInput from './components/check-box-input';
import { Box, Checkbox, FormControlLabel, Grid, IconButton, Paper, Typography } from '@mui/material';
import SizeInput from './components/size-input';
import Slider from '@mui/material/Slider';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import GridOnIcon from '@mui/icons-material/GridOn';
import GridOffIcon from '@mui/icons-material/GridOff';  
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';


type AxisType = 'x' | 'y';

interface AxisChangeComponentProps {
    keyValues?: any;
    updateEditorValue: (key: any, value: any) => void;
    defaultValues?: any;
    swap: () => void;
}

type DomainType = "xMin" | "xMax" | "yMin" | "yMax";


interface AxisTickCount {
    init: number;
    min: number;
    max: number;
    step: number;
}

interface AxisScaleDomain {
    minimal: number;
    maximal: number;
    min: number;
    max: number;
    step: number;
}

interface AxisGrid {
    x: boolean;
    y: boolean;
}

interface InitialProps {
    AxisTickCount: {
        x?: AxisTickCount;
        y?: AxisTickCount; // if y is not required add ? to make it optional
    };
    AxisScaleDomain: {
        x?: AxisScaleDomain;
        y?: AxisScaleDomain; // if y is not required add ? to make it optional
    };
    AxisGrid: AxisGrid;
}

interface AxisState {
    grid?: boolean;
    tickCount?: number;
}

interface ScaleDomainState {
    domain: [any, any];
}


const AxisChangeComponent: React.FC<AxisChangeComponentProps> = ({getEditorValue,updateEditorValue,keyValues,swap}) => {

    // if keyValues do not have key 
    if(!keyValues?.initial) return null;

    const {initial } = keyValues;

    const x="vconcat.0.encoding.x"
    const y="vconcat.0.encoding.y"
    const [axisXState,setAxisXState]=useState<AxisState|null>(getEditorValue(x+'.axis'));

    const [scaleDomainXState,setScaleDomainXState]=useState<ScaleDomainState>(getEditorValue(x+'.scale'));
    const [scaleDomainYState,setScaleDomainYState]=useState<ScaleDomainState>(getEditorValue(y+'.scale'));

    const [axisYState,setAxisYState]=useState<AxisState|null>(getEditorValue(y+'.axis'));

    // [fontSize, offset, padding, angle]
    const [xParam, setXParam] = useState([12, 0, 0, 0]);
    const [yParam, setYParam] = useState([12, 0, 0, 0]);

    function change(axis, value, index){
        if(axis === "x"){
            if(index === 0)
                setAxisXState((prev)=>({...prev,labelFontSize:value}))
            else if(index === 1)
                setAxisXState((prev)=>({...prev,labelOffset:value}))
            else if(index === 2)
                setAxisXState((prev)=>({...prev,labelPadding:value}))
            else if(index === 3)
                setAxisXState((prev)=>({...prev,labelAngle:value}))
            let temp = xParam
            temp[index] = value
            console.log(temp)
            setXParam(temp)
        }else if(axis === "y"){
             if(index === 0)
                setAxisYState((prev)=>({...prev,labelFontSize:value}))
            else if(index === 1)
                setAxisYState((prev)=>({...prev,labelOffset:value}))
            else if(index === 2)
                setAxisYState((prev)=>({...prev,labelPadding:value}))
            else if(index === 3)
                setAxisYState((prev)=>({...prev,labelAngle:value}))
            let temp = yParam
            temp[index] = value
            setYParam(temp)
        }
    }

    const [xDomain, setXDomain] = useState([initial?.AxisScaleDomain?.x?.min,initial?.AxisScaleDomain?.x?.max]);
    const [yDomain, setYDomain] = useState([initial?.AxisScaleDomain?.y?.min,initial?.AxisScaleDomain?.y?.max]);

    const handleAxisTickCountChange = (newAxisTickCount: number|"", axis: AxisType) => {
        if(axis === 'x') {
            setAxisXState({...axisXState,tickCount: newAxisTickCount||0});
        }else{
            setAxisYState({...axisYState,tickCount: newAxisTickCount||0});
        }
    }

    const handleAxisGridChange = (newAxisGrid: boolean, axis: AxisType) => {
        if(axis === 'x') {
            setAxisXState({...axisXState,grid: newAxisGrid});
        }else{
            setAxisYState({...axisYState,grid: newAxisGrid});
        }
    }

    const handleAxisChange = (newXAxis: boolean,axis:AxisType) => {
        if(axis === 'x') {
            const state=newXAxis?axisXState:null;
            updateEditorValue(x+'.axis', state);
        }else{
            const state=newXAxis?axisYState:null;
            updateEditorValue(y+".axis", state);
        }
    };

    const minDistance = 1
    const handleChangeX = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setXDomain([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setXDomain([clamped - minDistance, clamped]);
        }
        } else {
            setXDomain(newValue as number[]);
        }
    };

    const handleChangeY = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setYDomain([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setYDomain([clamped - minDistance, clamped]);
        }
        } else {
            setYDomain(newValue as number[]);
        }
    };


    useEffect(() => {
        // Xmin can be 0
        if (xDomain !== undefined && xDomain !== null && xDomain[0] !== undefined && xDomain[1] !== undefined &&xDomain[0]!==null &&xDomain[1]!==null && xDomain[0] <= xDomain[1]) {
            setScaleDomainXState({...scaleDomainXState, domain: [xDomain[0], xDomain[1]]});
        }
    }, [xDomain[0], xDomain[1]]);

    useEffect(() => {
        // same for Y
        if (yDomain !== undefined && yDomain !== null && yDomain[0] !== undefined && yDomain[1] !== undefined &&yDomain[0]!==null &&yDomain[1]!==null && yDomain[0] <= yDomain[1]) {
            setScaleDomainYState({...scaleDomainYState,domain: [yDomain[0], yDomain[1]]});
        }
    }, [yDomain[0],yDomain[1]]);

    useEffect(() => {
        updateEditorValue(x+'.axis', axisXState);
    }, [axisXState]);

    useEffect(() => {
        updateEditorValue(y+'.axis', axisYState);
    }, [axisYState]);

    useEffect(() => {
        if(typeof scaleDomainXState?.domain[0] !== 'number' || typeof scaleDomainXState?.domain[1] !== 'number') return;
        updateEditorValue(x+'.scale', scaleDomainXState);
    }, [scaleDomainXState]);

    useEffect(() => {
        // make sure that the array is [number,number]
        if(typeof scaleDomainYState?.domain[0] !== 'number' || typeof scaleDomainYState?.domain[1] !== 'number') return;

        updateEditorValue(y+'.scale', scaleDomainYState);
    }, [scaleDomainYState]);

    return (
        <div>
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"8px" }} elevation={3}> 
                <Typography variant="h6">Appearance</Typography>
            </Paper>
            <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
                <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
                <IconButton onClick={swap}>
                    <PivotTableChartIcon sx={{transform: "rotate(-90deg)"}}/>
                </IconButton>
                </Grid>
                <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
                <FormControlLabel control={
                <Checkbox
                    defaultChecked
                    onChange={(_,e) => 
                    handleAxisChange(e,'x')
                    }
                    
                    icon={<VisibilityOffIcon />}
                    checkedIcon={<VisibilityIcon />}
                />
                } label={"X-Axis"} />
                </Grid>
                <Grid item xs={4} style={{alignItems: "center", textAlign: "center"}}>
                <FormControlLabel control={
                <Checkbox
                defaultChecked
                    onChange={(_,e) =>
                    handleAxisChange(e,'y')
                    }
                    icon={<VisibilityOffIcon />}
                    checkedIcon={<VisibilityIcon />}
                />
                } label={"Y-Axis"} />
                </Grid>
            </Grid>
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"12px" }} elevation={3}> 
                <Typography variant="h6">X-Axis</Typography>
            </Paper>
                <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={xParam[0] !== undefined?xParam[0]:12} label="Fontsize" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelFontSize:e}))} 
                    min={2} max={20} step={1}/>
                    </div>
                    <IconButton onClick={() => {
                            let temp = xParam[0] + 1
                            change("x", temp, 0)
                        }}>
                        <TextIncreaseIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        let temp = xParam[0] - 1
                        change("x", temp, 0)
                        }}>
                        <TextDecreaseIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={xParam[1]} label="Offset" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelOffset:e}))} 
                        min={-10} max={10} step={1}/>
                        </div>
                    <IconButton onClick={() => {
                        let temp = xParam[1] - 1
                        change("x", temp, 1)
                        }}>
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = xParam[1] + 1
                            change("x", temp, 1)
                        }}>
                        <ArrowRightIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={xParam[2]} label="Padding" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelPadding:e}))} 
                        min={-10} max={10} step={1}/>
                        </div>
                    <IconButton onClick={() => {
                        let temp = xParam[2] - 1
                        change("x", temp, 2)
                        }}>
                        <ArrowDropUpIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = xParam[2] + 1
                            change("x", temp, 2)
                        }}>
                        <ArrowDropDownIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                        <SizeInput size={xParam[3]} label="Angle" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelAngle:e}))} 
                        min={-90} max={90} step={1}/>
                    </div>
                    <IconButton onClick={() => {
                        let temp = xParam[3] - 1
                        change("x", temp, 3)
                        }}>
                        <RotateLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = xParam[3] + 1
                            change("x", temp, 3)
                        }}>
                        <RotateRightIcon />
                    </IconButton>
                </Grid>
                </Grid>
                { initial?.AxisScaleDomain?.x !== undefined?
                <Box sx={{ width: "80%", margin:"auto", alignItems: "center", textAlign: "center" }}>
                    <Typography variant="subtitle1">X-Domain</Typography>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={xDomain}
                        onChange={handleChangeX}
                        valueLabelDisplay="auto"
                        getAriaValueText={v => "${v}"}
                        disableSwap
                        marks
                        min={initial?.AxisScaleDomain?.x?.minimal}
                        max={initial?.AxisScaleDomain?.x?.maximum}
                    />
                </Box>: <></>}

                <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", margin:"8px"}}>
                    <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                            <Checkbox
                            defaultChecked={initial?.AxisGrid?.x} 
                            onChange={(_,e) => handleAxisGridChange(e, "x")}
                                icon={<GridOffIcon />}
                                checkedIcon={<GridOnIcon />}
                            />
                    </Grid>
                    <Grid item xs={5} style={{alignItems: "center", textAlign: "center"}}>
                        <SizeInput size={initial?.AxisTickCount?.x?.init} label="X Axis Tick Count" onSizeChange={(e) => handleAxisTickCountChange(e, "x")}
                        min={initial?.AxisTickCount?.x?.min} max={initial?.AxisTickCount?.x?.max} step={initial?.AxisTickCount?.x?.step} />
                    </Grid>
                </Grid>
                
                    
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"12px" }} elevation={3}> 
                <Typography variant="h6">Y-Axis</Typography>
            </Paper>

                <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", marginBottom:"8px"}}>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={yParam[0] !== undefined?yParam[0]:12} label="Fontsize" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelFontSize:e}))} 
                    min={2} max={20} step={1}/>
                    </div>
                    <IconButton onClick={() => {
                            let temp = yParam[0] + 1
                            change("y", temp, 0)
                        }}>
                        <TextIncreaseIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        let temp = yParam[0] - 1
                        change("y", temp, 0)
                        }}>
                        <TextDecreaseIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={yParam[1]} label="Offset" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelOffset:e}))} 
                        min={-10} max={10} step={1}/>
                        </div>
                    <IconButton onClick={() => {
                        let temp = yParam[1] - 1
                        change("y", temp, 1)
                        }}>
                        <ArrowDropUpIcon />
                        
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = yParam[1] + 1
                            change("y", temp, 1)
                        }}>
                        <ArrowDropDownIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                    <SizeInput size={yParam[2]} label="Padding" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelPadding:e}))} 
                        min={-10} max={10} step={1}/>
                        </div>
                    <IconButton onClick={() => {
                        let temp = yParam[2] - 1
                        change("y", temp, 2)
                        }}>
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = yParam[2] + 1
                            change("y", temp, 2)
                        }}>
                        <ArrowRightIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                    <div style={{margin:"5px"}} >
                        <SizeInput size={yParam[3]} label="Angle" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelAngle:e}))} 
                        min={-90} max={90} step={1}/>
                    </div>
                    <IconButton onClick={() => {
                        let temp = yParam[3] - 1
                        change("y", temp, 3)
                        }}>
                        <RotateLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                            let temp = yParam[3] + 1
                            change("y", temp, 3)
                        }}>
                        <RotateRightIcon />
                    </IconButton>
                </Grid>
                </Grid>
                { initial?.AxisScaleDomain?.y !== undefined?
                <Box sx={{ width: "80%", margin:"auto", alignItems: "center", textAlign: "center" }}>
                            <Typography variant="subtitle1">Y-Domain</Typography>
                            <Slider
                                getAriaLabel={() => 'Minimum distance shift'}
                                value={yDomain}
                                onChange={handleChangeY}
                                valueLabelDisplay="auto"
                                getAriaValueText={v => "${v}"}
                                disableSwap
                                marks
                                min={initial?.AxisScaleDomain?.y?.minimal}
                                max={initial?.AxisScaleDomain?.y?.maximum}
                            />
                        </Box>
                    :<></>}

                <Grid container spacing={3} style={{alignItems: "center", textAlign: "center", margin:"8px"}}>
                    <Grid item xs={3} style={{alignItems: "center", textAlign: "center"}}>
                        <Checkbox
                        defaultChecked={initial?.AxisGrid?.y} 
                        onChange={(_,e) => handleAxisGridChange(e, "y")}
                            icon={<GridOffIcon />}
                            checkedIcon={<GridOnIcon />}
                        />
                    </Grid>
                    <Grid item xs={5} style={{alignItems: "center", textAlign: "center"}}>
                        <SizeInput size={initial?.AxisTickCount?.y?.init} label="Y Axis Tick Count" onSizeChange={(e) => handleAxisTickCountChange(e, "y")}
                        min={initial?.AxisTickCount?.y?.min} max={initial?.AxisTickCount?.y?.max} step={initial?.AxisTickCount?.y?.step} />
                    </Grid>
                </Grid>
        </div>
    )
}

export default AxisChangeComponent;
