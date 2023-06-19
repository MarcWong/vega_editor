import React, { useState } from 'react';
import RangeInput from './components/range-input';
import ScaleDomainInput from './components/scale-domain-input';
import CheckboxInput from './components/check-box-input';
import { Box } from '@mui/material';

type AxisType = 'x' | 'y';

interface AxisChangeComponentProps {
    keyValues?: any;
    updateEditorValue: (key: any, value: any) => void;
    defaultValues?: any;
}

const AxisChangeComponent: React.FC<AxisChangeComponentProps> = ({keyValues, updateEditorValue, defaultValues={}}) => {

    if (!keyValues?.AxisTickCount) {
        return null;
    }

    const { AxisTickCount, AxisScaleDomain, AxisGrid } = keyValues;

    const handleAxisTickCountChange = (newAxisTickCount: number, axis: AxisType) => {
        updateEditorValue(AxisTickCount[axis === 'x' ? 0 : 1], newAxisTickCount);
    }

    const handleAxisGridChange = (newAxisGrid: boolean, axis: AxisType) => {
        updateEditorValue(AxisGrid[axis === 'x' ? 0 : 1], newAxisGrid);
    }

    const [Xmin, setXMin] = useState(-50);
    const [Xmax, setXMax] = useState(100);

    const [Ymin, setYMin] = useState(-50);
    const [Ymax, setYMax] = useState(100);

    const handleScaleDomainChange = (newMin: number, newMax: number, axis: AxisType) => {
        if (axis === "x") {
            setXMin(newMin);
            setXMax(newMax);
        } else {
            setYMin(newMin);
            setYMax(newMax);
        }
        updateEditorValue(AxisScaleDomain[axis === 'x' ? 0 : 1], [newMin, newMax]);
    }

    return (
        <Box m={2}>
            <Box mb={2}>
                <RangeInput min={0} max={20} step={1} label="X Axis Tick Count" initialValue={5} onValueChange={(e) => handleAxisTickCountChange(e, "x")} />
            </Box>
            <Box mb={2}>
                <RangeInput min={0} max={20} step={1} label="Y Axis Tick Count" initialValue={5} onValueChange={(e) => handleAxisTickCountChange(e, "y")} />
            </Box>
            <Box mb={2}>
                <ScaleDomainInput min={Xmin} max={Xmax} label="X Scale Domain" onDomainChange={(x, y) => handleScaleDomainChange(x, y, "x")} />
            </Box>
            <Box mb={2}>
                <ScaleDomainInput min={Ymin} max={Ymax} label="Y Scale Domain" onDomainChange={(x, y) => handleScaleDomainChange(x, y, "y")} />
            </Box>
            <Box mb={2}>
                <CheckboxInput label="X Axis Grid" initialChecked={true} onCheckChange={(e) => handleAxisGridChange(e, "x")} />
            </Box>
            <Box mb={2}>
                <CheckboxInput label="Y Axis Grid" initialChecked={true} onCheckChange={(e) => handleAxisGridChange(e, "y")} />
            </Box>
        </Box>
    )
}

export default AxisChangeComponent;
