import React, { useState } from "react";
import ColorInput from "./color-input";
import SizeInput from "./size-input";
import BarWidthInput from "./bar-width-input";
import RangeInput from "./range-input";
import FontSizeInput from "./font-size-input";

interface ControlSidebarProps {
  onParametersChange: (params: { [key: string]: string }) => void;
  editorRef: any;
}

const ControlSidebar: React.FC<ControlSidebarProps> = ({ onParametersChange, editorRef }) => {
  const [barColors, setBarColors] = useState({});
  const [width, setWidth] = useState(500);
  const [barWidth, setBarWidth] = useState(0.8);
  const [height, setHeight] = useState(500);
  const [xRange, setXRange] = useState<[number, number]>([0, 100]);
  const [yRange, setYRange] = useState<[number, number]>([0, 100]);
  const [fontSize, setFontSize] = useState(12);

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFontSize = parseInt(event.target.value);
    setFontSize(newFontSize);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.encoding.text = spec.encoding.text || {};
      spec.encoding.text.fontSize = newFontSize;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const handleBarColorChange = (color: string, barIndex: number) => {
    setBarColors({ ...barColors, [barIndex]: color });
    onParametersChange({ [`mark.color.${barIndex}`]: color });

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.data.values[barIndex].color = color;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const handleBarWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBarWidth = parseFloat(event.target.value);
    setBarWidth(newBarWidth);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      if (!spec.mark) {
        spec.mark = { type: "bar", width: {} };
      } else if (!spec.mark.width) {
        spec.mark.width = {};
      }
      spec.mark.width.band = newBarWidth;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const handleXRangeChange = (newRange: [number, number]) => {
    setXRange(newRange);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.encoding.x.scale = spec.encoding.x.scale || {};
      spec.encoding.x.scale.domain = newRange;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const handleYRangeChange = (newRange: [number, number]) => {
    setYRange(newRange);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.encoding.y.scale = spec.encoding.y.scale || {};
      spec.encoding.y.scale.domain = newRange;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  


  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.width = newWidth;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);

    if (editorRef && editorRef.getValue) {
      const spec = JSON.parse(editorRef.getValue());
      spec.height = newHeight;
      editorRef.setValue(JSON.stringify(spec, null, 2));
    }
  };

  const spec = editorRef && editorRef.getValue ? JSON.parse(editorRef.getValue()) : { data: { values: [] } };
  const data = spec && spec.data && spec.data.values ? spec.data.values : [];

  return (
        <div className="control-sidebar">
            {data.map((d, i) => (
              <ColorInput
                key={i}
                color={d.color || '#000000'}
                index={i}
                onColorChange={handleBarColorChange}
              />
            ))}
          <SizeInput size={width} label="Width" onSizeChange={handleWidthChange} />
          <SizeInput size={height} label="Height" onSizeChange={handleHeightChange} />
          <BarWidthInput width={barWidth} onWidthChange={handleBarWidthChange} />
          <RangeInput label="X Range" range={xRange} onRangeChange={handleXRangeChange} />
          <RangeInput label="Y Range" range={yRange} onRangeChange={handleYRangeChange} />
          <FontSizeInput fontSize={fontSize} onFontSizeChange={handleFontSizeChange} />
    </div>
  )
};

export default ControlSidebar;