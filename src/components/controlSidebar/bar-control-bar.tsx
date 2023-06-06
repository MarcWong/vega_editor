import React, { useEffect, useState } from 'react';
import ColorInput from './color-input';
import TitleInput from './title-input';
import BarWidthInput from './bar-width-input';

import TextColorInput from './text-color-input';
import TextSizeInput from './text-size-input';
import AxisLabelColorInput from './axis-label-color-input';
import AxisLabelSizeInput from './axis-label-size-input';

import AxisToggle from './axis-toggle';

import BackgroundColorInput from './bg-color-input';
import ChartPaddingInput from './chart-padding-input';

import OpacityInput from './opacity-input';
import TextInput from './text-input';
import SelectInput from './select-input';



interface ControlSidebarProps {
    onParametersChange: (params: { [key: string]: string }) => void;
    editorRef: any;
}

const ControlSidebar: React.FC<ControlSidebarProps> = ({ onParametersChange,editorRef }) => {
  const [colorUncomfortable, setColorUncomfortable] = useState('green'); 
  const [colorComfortable, setColorComfortable] = useState('blue'); 
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [title, setTitle] = useState('');
  const [barWidth, setBarWidth] = useState(1); // Add this state variable for the bar width

  const [textColor, setTextColor] = useState('black');
  const [textSize, setTextSize] = useState(12);

  const [axisLabelColor, setAxisLabelColor] = useState('#000'); // Default color is black
  const [axisLabelSize, setAxisLabelSize] = useState(10); // Default size is 10

  const [isAxisSwapped, setIsAxisSwapped] = useState(false);

  const [highlightedColorMostComfortable, setHighlightedColorMostComfortable] = useState('#000000'); // default highlighted color is black
  const [highlightedColorLeastComfortable, setHighlightedColorLeastComfortable] = useState('#ffffff'); 

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color is white
  const [chartPadding, setChartPadding] = useState(0); // Default padding is 0

  const [barOpacity, setBarOpacity] = useState(1);
  const [axisTitle, setAxisTitle] = useState('');
  const [legendTitle, setLegendTitle] = useState('');
  const [legendPosition, setLegendPosition] = useState('right');
  const [textAlignment, setTextAlignment] = useState('center');
  const [barOrientation, setBarOrientation] = useState('vertical');

  // const [titleAnchor, setTitleAnchor] = useState('middle'); // Default anchor position is "middle"
  










  return (
    <div className="control-sidebar">

    </div>
  );
};

export default ControlSidebar;
