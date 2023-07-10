import React, { useEffect, useState } from 'react';
import RangeInput from './components/range-input';
import ScaleDomainInput from './components/scale-domain-input';
import CheckboxInput from './components/check-box-input';
import { Box } from '@mui/material';
import SizeInput from './components/size-input';

type AxisType = 'x' | 'y';

interface AxisChangeComponentProps {
    keyValues?: any;
    updateEditorValue: (key: any, value: any) => void;
    defaultValues?: any;
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


const AxisChangeComponent: React.FC<AxisChangeComponentProps> = ({getEditorValue,updateEditorValue,keyValues}) => {

    // if keyValues do not have key 
    if(!keyValues?.initial) return null;

    const {initial } = keyValues;

    const x="vconcat.0.encoding.x"
    const y="vconcat.0.encoding.y"
    const [axisXState,setAxisXState]=useState<AxisState|null>(getEditorValue(x+'.axis'));

    const [scaleDomainXState,setScaleDomainXState]=useState<ScaleDomainState>(getEditorValue(x+'.scale'));
    const [scaleDomainYState,setScaleDomainYState]=useState<ScaleDomainState>(getEditorValue(y+'.scale'));

    const [axisYState,setAxisYState]=useState<AxisState|null>(getEditorValue(y+'.axis'));

    const [Xmin, setXMin] = useState(initial?.AxisScaleDomain?.x?.min);
    const [Xmax, setXMax] = useState(initial?.AxisScaleDomain?.x?.max);

    const [Ymin, setYMin] = useState(initial?.AxisScaleDomain?.y?.min);
    const [Ymax, setYMax] = useState(initial?.AxisScaleDomain?.y?.max);

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


    useEffect(() => {
        // Xmin can be 0
        if (Xmin !== undefined && Xmax !== undefined &&Xmin!==null &&Xmax!==null && Xmin <= Xmax) {
            setScaleDomainXState({...scaleDomainXState,domain: [Xmin, Xmax]});
        }
    }, [Xmin, Xmax]);

    useEffect(() => {
        // same for Y
        if (Ymin !== undefined && Ymax !== undefined &&Ymin!==null &&Ymax!==null && Ymin <= Ymax) {
        console.log(Ymin,Ymax,'Ymin,Ymax')
            setScaleDomainYState({...scaleDomainYState,domain: [Ymin, Ymax]});
        }
    }, [Ymin, Ymax]);

    useEffect(() => {
        console.log(axisXState,'axisXState')
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
        <Box m={2}>
            <Box mb={2}>
                <SizeInput size={initial?.AxisTickCount?.x?.init} label="X Axis Tick Count" onSizeChange={(e) => handleAxisTickCountChange(e, "x")}
                 min={initial?.AxisTickCount?.x?.min} max={initial?.AxisTickCount?.x?.max} step={initial?.AxisTickCount?.x?.step} />
            </Box>
            <Box mb={2}>
                <SizeInput size={initial?.AxisTickCount?.y?.init} label="Y Axis Tick Count" onSizeChange={(e) => handleAxisTickCountChange(e, "y")} 
                min={initial?.AxisTickCount?.y?.min} max={initial?.AxisTickCount?.y?.max} step={initial?.AxisTickCount?.x?.step} />
            <Box mb={2}>
                <SizeInput size={initial?.AxisScaleDomain?.x?.min} label="X Scale Domain Min" onSizeChange={(e) => setXMin(e)} 
                min={initial?.AxisScaleDomain?.x?.minimal} max={initial?.AxisScaleDomain?.x?.maximum} step={initial?.AxisScaleDomain.x?.step}/>
                <SizeInput size={initial?.AxisScaleDomain?.x?.max} label="X Scale Domain Max" onSizeChange={(e) => setXMax(e)} 
                min={initial?.AxisScaleDomain?.x?.minimal} max={initial?.AxisScaleDomain?.x?.maximum} step={initial?.AxisScaleDomain.x?.step}/>
            </Box>
            <Box mb={2}>
                <SizeInput size={initial?.AxisScaleDomain?.y?.min} label="Y Scale Domain Min" onSizeChange={(e) => setYMin(e)} 
                min={initial?.AxisScaleDomain?.y?.minimal} max={initial?.AxisScaleDomain?.y?.maximum} step={initial?.AxisScaleDomain.y?.step}/>
                <SizeInput size={initial?.AxisScaleDomain?.y?.max} label="Y Scale Domain Max" onSizeChange={(e) => setYMax(e)}  
                min={initial?.AxisScaleDomain?.y?.minimal} max={initial?.AxisScaleDomain?.y?.maximum} step={initial?.AxisScaleDomain.y?.step}/>
            </Box>
            <Box mb={2}>
                <CheckboxInput label="X Axis Grid" initialChecked={initial?.AxisGrid?.x} onCheckChange={(e) => handleAxisGridChange(e, "x")} />
            </Box>
            <Box mb={2}>
                <CheckboxInput label="Y Axis Grid" initialChecked={initial?.AxisGrid?.y} onCheckChange={(e) => handleAxisGridChange(e, "y")} />
            </Box>

                <Box mb={2}>
                    <CheckboxInput label="X Axis Visible" initialChecked={true} onCheckChange={(e)=>handleAxisChange(e,"x")} />
                </Box>
                <Box mb={2}>
                    <CheckboxInput label="Y Axis Visible" initialChecked={true} onCheckChange={(e)=>handleAxisChange(e,'y')} />
                </Box>

            <Box mb={2}>
                <SizeInput size={12} label="X Label Font Size" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelFontSize:e}))} 
                min={2} max={20} step={1}/>
                <SizeInput size={12} label="Y Label Font Size" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelFontSize:e}))}
                min={2} max={20} step={1}/>
            </Box>

            <Box mb={2}>
                <SizeInput size={0} label="X label padding" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelOffset:e}))} 
                min={-10} max={10} step={1}/>
                <SizeInput size={0} label="Y label padding" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelOffset:e}))}
                min={-10} max={10} step={1}/>
            </Box>

            <Box mb={2}>
                <SizeInput size={0} label="X label padding" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelPadding:e}))} 
                min={-10} max={10} step={1}/>
                <SizeInput size={0} label="Y label padding" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelPadding:e}))}
                min={-10} max={10} step={1}/>
            </Box>

            <Box mb={2}>
                <SizeInput size={0} label="X label angle" onSizeChange={(e) => setAxisXState((prev)=>({...prev,labelAngle:e}))} 
                min={-90} max={90} step={1}/>
                <SizeInput size={0} label="Y label angle" onSizeChange={(e) => setAxisYState((prev)=>({...prev,labelAngle:e}))}
                min={-90} max={90} step={1}/>
            </Box>
         </Box>
        </Box>
    )
}

export default AxisChangeComponent;
