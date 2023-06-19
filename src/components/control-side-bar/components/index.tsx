import React, { useEffect, useState } from 'react';
import SizeInput from './size-input';
import SliderInput from './slider-input';
import SelectInput from './select-input';
import RangeInput from './range-input';
import CheckboxInput from './check-box-input'
import ColorInput from './color-input';
import TextInput from './text-input';
import ScaleDomainInput from './scale-domain-input';
import SwapButton from './swap-button';
import OrderInput from './handle-order-input';

interface ControlSidebarProps {
    onParametersChange: (params: { [key: string]: string }) => void;
    editorRef: any;
}

type AxisType= 'x' | 'y';


const ControlSidebar: React.FC<ControlSidebarProps> = ({ onParametersChange,editorRef }) => {


  const updateEditorValue = (path: string, value: any) => {
        if (editorRef && editorRef.getValue) {
            const spec = JSON.parse(editorRef.getValue());
            const pathParts = path.split('.');
            let target = spec;
            for (let i = 0; i < pathParts.length; i++) {
                const part = pathParts[i];
                if (!target.hasOwnProperty(part)) {
                    return; // path does not exist, do nothing
                }
                if (i === pathParts.length - 1) {
                    target[part] = value; // update the value if we are at the end of the path
                } else {
                    target = target[part]; // move to the next part of the path
                }
            }
            editorRef.setValue(JSON.stringify(spec, null, 2));
        }
    };    

  const swapAxes = (spec) => {
    // Iterate over each visualization in the vconcat array
    for (let vis of spec.vconcat) {
      if (vis.encoding) {
        let temp = vis.encoding.x;
        vis.encoding.x = vis.encoding.y;
        vis.encoding.y = temp;
      }
  
      if (vis.layer) {
        for (let layer of vis.layer) {
          if (layer.encoding) {
            let temp = layer.encoding.x;
            layer.encoding.x = layer.encoding.y;
            layer.encoding.y = temp;
          }
        }
      }
    }
    return spec;
  }

  const exchangeAxes = () => {
    let spec = JSON.parse(editorRef.getValue());
    spec = swapAxes(spec);
    editorRef.setValue(JSON.stringify(spec, null, 2));
  } 

  const fixedWidth = 500; // Fixed width
    //aspect ratio
  const [aspectRatio, setAspectRatio] = useState(1);

  const handleAspectRatioChange = (newAspectRatio: number) => {
    setAspectRatio(newAspectRatio);
    updateEditorValue('vconcat.0.height', fixedWidth / newAspectRatio);
  };

  // Mark: Bar
  const [barWidth, setBarWidth] = useState(0.8);

  const handleBandChange = (newBand: number) => {
    setBarWidth(newBand);
    updateEditorValue('vconcat.0.layer.0.mark.height.band', newBand);
    updateEditorValue('vconcat.0.layer.0.mark.width.band', newBand);
};

  const [align, setAlign] = useState("right");

  const handleAlignChange = (newAlign: string) => {
    setAlign(newAlign);
    updateEditorValue('vconcat.0.layer.0.mark.align', newAlign);
  };

  const [binSpacing, setBinSpacing] = useState("1");

  const handleBinSpacingChange = (newBinSpacing: string) => {
      setBinSpacing(newBinSpacing);
      updateEditorValue('vconcat.0.layer.0.mark.binSpacing', newBinSpacing);
  };

  const handleAngleChange = (newAngle: number) => {
    updateEditorValue('vconcat.0.layer.1.mark.angle', newAngle);
  };

  const handleDxChange = (newDx: number) => {
      updateEditorValue('vconcat.0.layer.1.mark.dx', newDx);
  };

  const handleDyChange = (newDy: number) => {
      updateEditorValue('vconcat.0.layer.1.mark.dy', newDy);
  };

  const handleTextColor= (newTextColor: string) => {
        updateEditorValue('vconcat.0.layer.1.encoding.color.value', newTextColor);
  };

  const handleXOffsetChange = (newXOffset: number) => {
      updateEditorValue('vconcat.0.layer.1.mark.xOffset', newXOffset);
  };

  const handleYOffsetChange = (newYOffset: number) => {
      updateEditorValue('vconcat.0.layer.1.mark.yOffset', newYOffset);
  };

  const handleFontSize= (newFontSize: number) => {
        updateEditorValue('vconcat.0.layer.1.mark.fontSize', newFontSize);
  };

  const handleFontWeight= (newFontWeight: number) => {
        updateEditorValue('vconcat.0.layer.1.mark.fontWeight', newFontWeight);
  };

  const handleFontStyle= (newFontStyle: string) => {
        updateEditorValue('vconcat.0.layer.1.mark.fontStyle', newFontStyle);
  }

  const [Xmin, setXMin] = useState(-50);
  const [Xmax, setXMax] = useState(100);

  const [Ymin, setYMin] = useState(-50);
  const [Ymax, setYMax] = useState(100);
 
  const handleScaleDomainChange = (newMin: number, newMax: number, axis:AxisType) => {
    if(axis === "x"){
        setXMin(newMin);
        setXMax(newMax);
    }else{
        setYMin(newMin);
        setYMax(newMax);
    }
    updateEditorValue(`vconcat.0.encoding.${axis}.scale.domain`, [newMin, newMax]);
  }

  const [entityTypes, setEntityTypes] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [currentEntityType, setCurrentEntityType] = useState<string>('');
  const [currentChoice, setCurrentChoice] = useState<string>('');

  useEffect(() => {
    if (editorRef && typeof editorRef.getValue === "function") {
      let spec;
      try {
        spec = JSON.parse(editorRef.getValue());
      } catch (err) {
        console.error('Error parsing spec:', err);
        return;
      }
    
      if (spec && spec.vconcat && spec.vconcat[0] && spec.vconcat[0].data && spec.vconcat[0].data.values) {
        const values = spec.vconcat[0].data.values;
  
        if (Array.isArray(values) && values.length > 0) {
          const entityTypes = values.map((d:any)=>d.Entity);
          const choices = Object.keys(values[0]).filter((d:any)=>d!=="Entity");
            setEntityTypes([...new Set(entityTypes)]);
            setChoices([...new Set(choices)]);
        } else {
          console.error('Data values is not a non-empty array');
        }
      } else {
        console.error('Invalid spec structure');
      }
    } else {
      console.error('Editor ref is not defined or getValue is not a function');
    }
  }, [editorRef]);

  useEffect(() => {

    // load the file from utils
  }, []);

  const handleAxisOrientChange = (newAxisOrient: string,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.orient`, newAxisOrient);
  };

  const handleAxisTickCountChange = (newAxisTickCount: number,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.tickCount`, newAxisTickCount);
  }

  const handleAxisGridChange = (newAxisGrid: boolean,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.grid`, newAxisGrid);
  }

  const handleAxisGridCapChange = (newAxisGridCap: string,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.gridCap`, newAxisGridCap);
  }

  const handleAxisGridColorChange = (newAxisGridColor: string,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.gridColor`, newAxisGridColor);
  }

  const handleAxisGridOpacityChange = (newAxisGridOpacity: number,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.gridOpacity`, newAxisGridOpacity);
  }

  const handleAxisGridWidthChange = (newAxisGridWidth: number,axis:AxisType) => {
      updateEditorValue(`vconcat.0.encoding.${axis}.axis.gridWidth`, newAxisGridWidth);
  }



  const handleConditionChange = (newCondition: string) => {
        updateEditorValue('vconcat.0.layer.0.encoding.color.condition.test', newCondition);
        updateEditorValue('vconcat.0.layer.0.encoding.size.condition.test', newCondition);
        updateEditorValue('vconcat.0.layer.0.encoding.opacity.condition.test', newCondition);
  };

  useEffect(() => {
    handleConditionChange(`(datum.category === '${currentChoice}') && (datum.Entity === '${currentEntityType}')`);
  }, [currentChoice, currentEntityType]);

  const handleChosenColorChange = (newChosenColor: string) => {
        updateEditorValue('vconcat.0.layer.0.encoding.color.condition.value', newChosenColor);
  };

  const handleDefaultColorChange = (newDefaultColor: string) => {
        updateEditorValue('vconcat.0.layer.0.encoding.color.value', newDefaultColor);
  }

  const handleChosenSizeChange = (newChosenSize: number) => {
      updateEditorValue('vconcat.0.layer.0.encoding.size.condition.value', newChosenSize);
  }

  const handleDefaultSizeChange = (newDefaultSize: number) => {
      updateEditorValue('vconcat.0.layer.0.encoding.size.value', newDefaultSize);
  }

  const handleChosenOpacityChange = (newChosenOpacity: number) => {
      updateEditorValue('vconcat.0.layer.0.encoding.opacity.condition.value', newChosenOpacity);
  }

  const handleDefaultOpacityChange = (newDefaultOpacity: number) => {
      updateEditorValue('vconcat.0.layer.0.encoding.opacity.value', newDefaultOpacity);
  }

  return (
    <div className="control-sidebar" style={{overflow: 'auto', height: '100%'}}>
      <SizeInput size={aspectRatio} label="Aspect Ratio" onSizeChange={handleAspectRatioChange} step={0.1} />
          {/* <SliderInput value={barWidth} label="Band" onValueChange={handleBandChange} />
        <SelectInput
            options={["0", "1"]}
            label="Bin Spacing"
            selectedOption={binSpacing}
            onOptionSelect={handleBinSpacingChange}
        /> */}
        
        {/* // text color change  */}
        <ColorInput label="Text Color" initialColor={"black"} onColorChange={handleTextColor} />

        <RangeInput min={-180} max={180} step={1} label="Angle" initialValue={0} onValueChange={handleAngleChange} />
        <RangeInput min={-20} max={20} step={1} label="Dx" initialValue={5} onValueChange={handleDxChange} />
        <RangeInput min={-20} max={20} step={1} label="Dy" initialValue={5} onValueChange={handleDyChange} />
        {/* <RangeInput min={-20} max={20} step={1} label="X Offset" initialValue={0} onValueChange={handleXOffsetChange} />
        <RangeInput min={-20} max={20} step={1} label="Y Offset" initialValue={0} onValueChange={handleYOffsetChange} /> */}
        <RangeInput min={10} max={36} step={1} label="Font Size" initialValue={14} onValueChange={handleFontSize} />
        <SelectInput
            options={["normal", "italic"]}
            label="Font Style"
            selectedOption={"normal"}
            onOptionSelect={handleFontStyle}
        />

        <RangeInput min={100} max={900} step={100} label="Font Weight" initialValue={500} onValueChange={handleFontWeight} />

        
        {/* AXIS */}
        <RangeInput min={0} max={20} step={1} label="X Axis Tick Count" initialValue={5} onValueChange={(e)=>handleAxisTickCountChange(e,"x")} />
        <RangeInput min={0} max={20} step={1} label="Y Axis Tick Count" initialValue={5} onValueChange={(e)=>handleAxisTickCountChange(e,"y")} />

        {/* SCALE */}
        <ScaleDomainInput min={Xmin} max={Xmax} label="X Scale Domain" onDomainChange={(x,y)=>handleScaleDomainChange(x,y,"x")} />
        <ScaleDomainInput min={Ymin} max={Ymax} label="Y Scale Domain" onDomainChange={(x,y)=>handleScaleDomainChange(x,y,"y")} />
        
        {/* axis orient  */}
        <CheckboxInput label="X Axis Grid" initialChecked={true} onCheckChange={(e)=>handleAxisGridChange(e,"x")} />

        <CheckboxInput label="Y Axis Grid" initialChecked={true} onCheckChange={(e)=>handleAxisGridChange(e,"y")} />

        <SelectInput options={[...entityTypes,"none"]} label="Entity" selectedOption={"none"} onOptionSelect={(e)=>setCurrentEntityType(e)} />
        <SelectInput options={[...choices,"none"]} label="Choice" selectedOption={"none"} onOptionSelect={(e)=>setCurrentChoice(e)} />

        <ColorInput label="Chosen Color" initialColor={"aqua"} onColorChange={handleChosenColorChange} />
        <ColorInput label="Default Color" initialColor={"aqua"} onColorChange={handleDefaultColorChange} />

        <RangeInput min={20} max={100} step={5} label="Chosen Size" initialValue={50} onValueChange={handleChosenSizeChange} />
        <RangeInput min={20} max={100} step={5} label="Default Size" initialValue={50} onValueChange={handleDefaultSizeChange} />

        <RangeInput min={0} max={1} step={0.1} label="Chosen Opacity" initialValue={1} onValueChange={handleChosenOpacityChange} />
        <RangeInput min={0} max={1} step={0.1} label="Default Opacity" initialValue={1} onValueChange={handleDefaultOpacityChange} />

        <SwapButton onSwap={exchangeAxes} />
        <OrderInput entities={entityTypes} onOrderChange={(e)=>console.log(e)} />
    </div>
  );
};
export default ControlSidebar;
