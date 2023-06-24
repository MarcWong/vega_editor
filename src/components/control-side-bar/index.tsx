import React, { useEffect, useState } from 'react';
import SwapButton from './swap-button';
import OrderInput from './components/handle-order-input';
import { getAccordingValues } from '../../utils/getAccordingValues';
import AspectRatioComponent from './aspectRatio-change';
import TextChangeComponent from './text-change';
import AxisChangeComponent from './axis-change';
import HighlightChangeComponent from './highlight-change';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandIcon from '@mui/icons-material/Expand';
import { createLogger } from 'browser-bunyan';
import { ConsoleFormattedStream } from 'browser-bunyan';
import { ConsoleRawStream } from 'browser-bunyan';
import Button from '@mui/material/Button';
import { set } from 'vega-lite/src/log';

// import 

interface ControlSidebarProps {
    onParametersChange: (params: { [key: string]: string }) => void;
    editorRef: any;
}

const logMessages = [];

const log = createLogger({
  name: 'my-logger',
  streams: [
      { level: 'info', stream: new ConsoleFormattedStream() },
      { level: 'debug', stream: new ConsoleRawStream() },
  ]
});




const ControlSidebar: React.FC<ControlSidebarProps> = ({ onParametersChange,editorRef}) => {


  const [spec,setSpec]=useState<any>({});


  const [entityTypes, setEntityTypes] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);

  const [orderTypes, setOrderTypes] = useState<string[]>([]);


  const [accordingValues,setAccordingValues]=useState<any>({})
  const updateEditorValue = (path: string, value: any) => {
    if (typeof path !== 'string') {
      return;
  }
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
            const currentTime = new Date().toISOString();
            const logInfo = {
              path,
              value,
              time: currentTime,
            };
        
            // Store log info to array
            logMessages.push(logInfo);
        }
    };

    const downloadLogs = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logMessages));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", "log.json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
    
    const getEditorValue = (path: string) => {
      if (typeof path !== 'string') {
        return;
    }
      let value;
      if (editorRef && editorRef.getValue) {
          const spec = JSON.parse(editorRef.getValue());
          const pathParts = path.split('.');
          let target = spec;
          for (let i = 0; i < pathParts.length; i++) {
              const part = pathParts[i];
              if (!target.hasOwnProperty(part)) {
                  return; // path does not exist, return undefined
              }
              if (i === pathParts.length - 1) {
                  value = target[part]; // get the value if we are at the end of the path
              } else {
                  target = target[part]; // move to the next part of the path
              }
          }
      }
      return value;
  };
  

  const swapAxes = (spec) => {
    // Iterate over each visualization in the vconcat array
    const obj=spec?.vconcat ?? spec?.layer;
    for (let vis of obj) {
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

  function swapXandYKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(swapXandYKeys);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((newObj, [key, value]) => {
            let newKey = key;
            if (key === 'x') newKey = 'y';
            else if (key === 'y') newKey = 'x';

            newObj[newKey] = swapXandYKeys(value);
            return newObj;
        }, {});
    } else {
        return obj;
    }
  }

  const exchangeAxes = () => {
    let spec = JSON.parse(editorRef.getValue());
    spec = swapAxes(spec);
    editorRef.setValue(JSON.stringify(spec, null, 2));

    const newAccordingValues=swapXandYKeys(accordingValues);
    setAccordingValues(newAccordingValues);
  } 

  useEffect(() => {
    if (editorRef && typeof editorRef.getValue === "function") {
      let spec;
      try {
        spec = JSON.parse(editorRef.getValue());
        setSpec(spec);
      } catch (err) {
        console.error('Error parsing spec:', err);
        return;
      }
    } else {
      console.error('Editor ref is not defined or getValue is not a function');
    }
  }, [editorRef?.getValue()]);

  useEffect(() => {
    if(spec?.name){
      setAccordingValues(getAccordingValues("json"+spec.name))
    }
  }, [spec]);

  useEffect(() => {
    console.log("accordingValues",accordingValues,'---------------')
    if(accordingValues?.entityTypes){
      setEntityTypes(accordingValues?.entityTypes);
    }
    if(accordingValues?.selectTypes){
      setChoices(accordingValues?.selectTypes);
    }
    if(accordingValues?.orderTypes){
      setOrderTypes(accordingValues?.orderTypes);
    }
  }, [accordingValues]);


  return (
    <div className="control-sidebar" style={{overflow: 'auto', height: '100%'}}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="aspectRatio-content" id="aspectRatio-header">
          <Typography>Aspect Ratio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AspectRatioComponent keyValue={accordingValues?.aspectRatio} updateEditorValue={updateEditorValue}/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="textChange-content" id="textChange-header">
          <Typography>Text Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextChangeComponent keyValues={accordingValues?.Text} updateEditorValue={updateEditorValue} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="axisChange-content" id="axisChange-header">
          <Typography>Axis Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AxisChangeComponent keyValues={accordingValues?.Axis} updateEditorValue={updateEditorValue} defaultValues={accordingValues?.axisChange}/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="highlightChange-content" id="highlightChange-header">
          <Typography>Color Encoding Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HighlightChangeComponent keyValues={accordingValues?.Condition} updateEditorValue={updateEditorValue} defaultValues={accordingValues?.highlightChange} 
              choices={choices}/>
        </AccordionDetails>
      </Accordion>

      <SwapButton onSwap={exchangeAxes} />
      <OrderInput entities={orderTypes}  updateEditorValue={updateEditorValue} getEditorValue={getEditorValue} keyValues={accordingValues?.Order}/>

      <Button variant="contained" color="primary" onClick={downloadLogs}>
        Download Logs
      </Button>
    </div>
  );
};
export default ControlSidebar;
