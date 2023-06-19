import React, { useEffect, useState } from 'react';
import ColorInput from './color-input';
import TitleInput from './title-input';
import PointEditor from './point-editor';

interface ControlSidebarProps {
    onParametersChange: (params: { [key: string]: string }) => void;
    editorRef: any;
}

const ControlSidebar: React.FC<ControlSidebarProps> = ({ onParametersChange,editorRef }) => {
  const [lineAColor, setLineAColor] = useState('#ff0000'); // Red color by default
  const [lineBColor, setLineBColor] = useState('#0000ff'); // Blue color by default
  const [isEditorReady, setIsEditorReady] = useState(false);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const [firstDescription, setFirstDescription] = useState('');
  const [secondDescription, setSecondDescription] = useState('');

  const [editingPoint, setEditingPoint] = useState(null);

  const [clickedLine, setClickedLine] = useState(null);

  const handleLineColorChange = (color: string, lineId: string) => {
    if (lineId === "A") setLineAColor(color);
    if (lineId === "B") setLineBColor(color);

  
    if (isEditorReady) {
      const spec = JSON.parse(editorRef.getValue());
      if (Array.isArray(spec.vconcat)) {
        spec.vconcat.forEach((chart: any) => {
          if (Array.isArray(chart.layer)) {
            chart.layer.forEach((layer: any) => {
              if (layer.encoding && (layer.encoding.color || layer.encoding.stroke)) {
                if (layer.encoding?.color?.field === "Line") {
                  layer.encoding.color.scale = {
                    "domain": ["A", "B"],
                    "range": [lineAColor, lineBColor]
                  };
                }
                if (layer.encoding?.stroke?.field === "Line") {
                  layer.encoding.stroke.scale = {
                    "domain": ["A", "B"],
                    "range": [lineAColor, lineBColor]
                  };
                }
              }
            });
          }
        });
      }


  
      if (isEditorReady) {
        editorRef.setValue(JSON.stringify(spec, null, 2));
      }
    }
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    
    if (isEditorReady) {
      const spec = JSON.parse(editorRef.getValue());
      if (spec.vconcat[0].title) {
        spec.vconcat[0].title.text = newTitle;
        editorRef.setValue(JSON.stringify(spec, null, 2));
      }
    }
  };

  const handleFirstDescriptionChange = (newDescription: string) => {
    setFirstDescription(newDescription);
    
    if (isEditorReady) {
      const spec = JSON.parse(editorRef.getValue());
      if (spec.vconcat[1].data.values[0]) {
        spec.vconcat[1].data.values[0].text = newDescription;
        editorRef.setValue(JSON.stringify(spec, null, 2));
      }
    }
  };

  const handleSecondDescriptionChange = (newDescription: string) => {
    setSecondDescription(newDescription);
    
    if (isEditorReady) {
      const spec = JSON.parse(editorRef.getValue());
      if (spec.vconcat[2].data.values[0]) {
        spec.vconcat[2].data.values[0].text = newDescription;
        editorRef.setValue(JSON.stringify(spec, null, 2));
      }
    }
  };

  const handleSubtitleChange = (newSubtitle: string) => {
    setSubtitle(newSubtitle);
    
    if (isEditorReady) {
      const spec = JSON.parse(editorRef.getValue());
      if (spec.vconcat[0].title) {
        spec.vconcat[0].title.subtitle = newSubtitle;
        editorRef.setValue(JSON.stringify(spec, null, 2));
      }
    }
  };
  
  const handlePointClick = (point: { Year: string, Values: number, Line: string }) => {
    setEditingPoint(point);
  };

  const handleUpdatePoint = (newPoint: { Year: string, Values: number, Line: string }) => {
    // TODO: Update the point in the chart's data
    setEditingPoint(null);
  };

  const handleLineClick = (line) => { setClickedLine(line); };
  
  useEffect(() => {
    // Check if the editorRef is ready.
    if (editorRef && typeof editorRef.getValue === 'function') {
      setIsEditorReady(true);
  
      const spec = JSON.parse(editorRef.getValue());
      
      if (Array.isArray(spec.vconcat)) {
        spec.vconcat.forEach((chart: any) => {
          if (Array.isArray(chart.layer)) {
            chart.layer.forEach((layer: any) => {
              if (layer.encoding && (layer.encoding.color || layer.encoding.stroke)) {
                if (layer.encoding.color.field === "Line") {
                  const colorScale = layer.encoding.color.scale;
                  if (colorScale && Array.isArray(colorScale.range)) {
                    setLineAColor(colorScale.range[0]);
                    setLineBColor(colorScale.range[1]);
                  }
                }
              }
            });
          }
        });
      }

      if (spec.vconcat[0].title) {
        setTitle(spec.vconcat[0].title.text);
        setSubtitle(spec.vconcat[0].title.subtitle);
      }

      if (spec.vconcat[1].data.values[0]) {
        setFirstDescription(spec.vconcat[1].data.values[0].text);
      }

      if (spec.vconcat[2].data.values[0]) {
        setSecondDescription(spec.vconcat[2].data.values[0].text);
      }
    } else {
      setIsEditorReady(false);
    }
    // addClickListenerToChart();
    return () => {
      if (!editorRef || !editorRef.current) return;
  
      const vegaView = editorRef.getView(); // get Vega view
      if (!vegaView) return;
  
      // Remove the event listener
      vegaView.removeEventListener('click');
    };
  }, [editorRef]);

  useEffect(() => {
    // Whenever lineAColor or lineBColor changes, call onParametersChange
    if(!isEditorReady) return;
    onParametersChange({ lineAColor, lineBColor });
  }, [lineAColor, lineBColor, onParametersChange]);

  return (
    <div className="control-sidebar">
      <ColorInput
        color={lineAColor}
        lineId="A"
        onColorChange={handleLineColorChange}
      />
      <ColorInput
        color={lineBColor}
        lineId="B"
        onColorChange={handleLineColorChange}
      />
    <TitleInput
        title={title}
        onTitleChange={handleTitleChange}
        label="Title"
      />
      <TitleInput
        title={subtitle}
        onTitleChange={handleSubtitleChange}
        label="Subtitle"
      />
    <TitleInput
        title={firstDescription}
        onTitleChange={handleFirstDescriptionChange}
        label="First Description"
      />
      <TitleInput
        title={secondDescription}
        onTitleChange={handleSecondDescriptionChange}
        label="Second Description"
      />
    {editingPoint &&
        <PointEditor
          point={editingPoint}
          onUpdatePoint={handleUpdatePoint}
        />
      }
    </div>
  );
};

export default ControlSidebar;
