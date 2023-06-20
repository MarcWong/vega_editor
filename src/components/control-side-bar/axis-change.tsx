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

const AxisChangeComponent: React.FC<AxisChangeComponentProps> = ({keyValues, updateEditorValue}) => {

    if (!keyValues?.AxisTickCount) {
        return null;
    }

    const { AxisTickCount, AxisScaleDomain, AxisGrid,initial } = keyValues;

    const handleAxisTickCountChange = (newAxisTickCount: number, axis: AxisType) => {
        updateEditorValue(AxisTickCount[axis === 'x' ? 0 : 1], newAxisTickCount);
    }

    const handleAxisGridChange = (newAxisGrid: boolean, axis: AxisType) => {
        updateEditorValue(AxisGrid[axis === 'x' ? 0 : 1], newAxisGrid);
    }

    const [Xmin, setXMin] = useState(initial?.AxisScaleDomain?.x?.min);
    const [Xmax, setXMax] = useState(initial?.AxisScaleDomain?.x?.max);

    const [Ymin, setYMin] = useState(initial?.AxisScaleDomain?.y?.min);
    const [Ymax, setYMax] = useState(initial?.AxisScaleDomain?.y?.max);

    useEffect(() => {
        // Xmin can be 0
        if (Xmin !== undefined && Xmax !== undefined && Xmin <= Xmax) {
            updateEditorValue(AxisScaleDomain[0], [Xmin, Xmax]);
        }
    }, [Xmin, Xmax]);

    useEffect(() => {
        // same for Y
        if (Ymin !== undefined && Ymax !== undefined && Ymin <= Ymax) {
            updateEditorValue(AxisScaleDomain[1], [Ymin, Ymax]);
        }
    }, [Ymin, Ymax]);

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
                <SizeInput size={initial?.AxisScaleDomain?.x?.min} label="X Scale Domain Min" onSizeChange={(e) => setXMin(e)} min={initial?.AxisScaleDomain?.x?.minimal} max={initial?.AxisScaleDomain?.x?.maximum} step={initial?.AxisScaleDomain.x?.step}/>
                <SizeInput size={initial?.AxisScaleDomain?.x?.max} label="X Scale Domain Max" onSizeChange={(e) => setXMax(e)} min={initial?.AxisScaleDomain?.x?.minimal} max={initial?.AxisScaleDomain?.x?.maximum} step={initial?.AxisScaleDomain.x?.step}/>
            </Box>
            <Box mb={2}>
                <SizeInput size={initial?.AxisScaleDomain?.y?.min} label="Y Scale Domain Min" onSizeChange={(e) => setYMin(e)} min={initial?.AxisScaleDomain?.y?.minimal} max={initial?.AxisScaleDomain?.y?.maximum} step={initial?.AxisScaleDomain.y?.step}/>
                <SizeInput size={initial?.AxisScaleDomain?.y?.max} label="Y Scale Domain Max" onSizeChange={(e) => setYMax(e)}  min={initial?.AxisScaleDomain?.y?.minimal} max={initial?.AxisScaleDomain?.y?.maximum} step={initial?.AxisScaleDomain.y?.step}/>
            </Box>
            <Box mb={2}>
                <CheckboxInput label="X Axis Grid" initialChecked={initial?.AxisGrid?.x} onCheckChange={(e) => handleAxisGridChange(e, "x")} />
            </Box>
            <Box mb={2}>
                <CheckboxInput label="Y Axis Grid" initialChecked={initial?.AxisGrid?.y} onCheckChange={(e) => handleAxisGridChange(e, "y")} />
            </Box>
         </Box>
        </Box>
    )
}

export default AxisChangeComponent;
