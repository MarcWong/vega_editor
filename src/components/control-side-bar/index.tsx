import React, { useEffect, useState } from 'react';
import SwapButton from './swap-button';
import OrderInput from './components/handle-order-input';
import { getAccordingValues } from '../../utils/getAccordingValues';
import AspectRatioComponent from './aspectRatio-change';
import TextChangeComponent from './text-change';
import AxisChangeComponent from './axis-change';
import HighlightChangeComponent from './highlight-change';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Tabs, Tab, Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ExpandIcon from '@mui/icons-material/Expand';
import { createLogger } from 'browser-bunyan';
import { ConsoleFormattedStream } from 'browser-bunyan';
import { ConsoleRawStream } from 'browser-bunyan';
import Button from '@mui/material/Button';
import ColorArrayInput from './color-array-input';
import LegendChangeComponent from './legend-change';
import { filter } from 'd3-array';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import DownloadIcon from '@mui/icons-material/Download';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

interface ControlSidebarProps {
    onParametersChange: (params: { [key: string]: string }) => void;
    editorRef: any;
}

const logMessages = {
  undo: [],
  redo: []
};

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
      let oldValue;
        const spec = JSON.parse(editorRef.getValue());
        const pathParts = path.split('.');
        let target = spec;
        for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];

            // If we are at the end of the path
            if (i === pathParts.length - 1) {
                // If the property doesn't exist or it is null
                oldValue = target[part];
                if (!target[part] || target[part] === null) {
                    target[part] = {}; // create an empty object
                }
                target[part] = value; // update the value
            } else {
                // If the property doesn't exist or it is null
                if (!target[part] || target[part] === null) {
                    target[part] = {}; // create an empty object
                }
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
        logMessages.undo.push({ path, value: oldValue }); // push old value instead of new value
        logMessages.redo = [];
    }
  };

  const undo = () => {
    if (logMessages.undo.length > 0) {
      const lastChange = logMessages.undo.pop();
      const currentValue = getEditorValue(lastChange.path); // get current value before undoing
      updateEditorValue(lastChange.path, lastChange.value);
      logMessages.redo.push({ path: lastChange.path, value: currentValue }); // push current value to redo stack
    }
  };

  const redo = () => {
    if (logMessages.redo.length > 0) {
      const lastChange = logMessages.redo.pop();
      const currentValue = getEditorValue(lastChange.path); // get current value before redoing
      updateEditorValue(lastChange.path, lastChange.value);
      logMessages.undo.push({ path: lastChange.path, value: currentValue }); // push current value to undo stack
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

  const dowloadJson = () => {
    const jsonedspec=JSON.stringify(spec, null, 2);
    const blob = new Blob([jsonedspec], {type: "application/json;charset=utf-8"});
    const filename = "project.json";
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
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
              if (!target?.hasOwnProperty(part)) {
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

  if(!accordingValues){
    return <div></div>
  }

  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let tabList = [<Tab key={"0"} value="0" label="Aspect Ratio" />,<Tab value="1" key={"1"} label="Data Color Panel" />,<Tab value="2" key={"2"} label="Data Label Panel" />,
          <Tab value="3" key={"3"} label="Axis Panel" />,<Tab value="4" key={"4"} label="Data Highlight Panel" />,
          <Tab value="5" key={"5"} label="Data Order Panel" />,<Tab value="6" key={"6"} label="Legend Position" />]

  let panelList = [<TabPanel key={"0"} value={"0"} >
            <AspectRatioComponent keyValue={accordingValues?.aspectRatio} 
            updateEditorValue={updateEditorValue} getEditorValue={getEditorValue}/>
        </TabPanel>,<TabPanel key={"1"} value={"1"} >
            <ColorArrayInput keyValues={accordingValues?.ColorArray} getEditorValue={getEditorValue}
          updateEditorValue={updateEditorValue} defaultValues={accordingValues?.colorArray}
              choices={choices}/>
        </TabPanel>,<TabPanel key={"2"} value={"2"} >
            <TextChangeComponent getEditorValue={getEditorValue} keyValues={accordingValues?.Text} updateEditorValue={updateEditorValue} />
        </TabPanel>,
          <TabPanel key={"3"} value={"3"} >
            <AxisChangeComponent swap={exchangeAxes} keyValues={accordingValues?.Axis} getEditorValue={getEditorValue} updateEditorValue={updateEditorValue} defaultValues={accordingValues?.axisChange}/>
        </TabPanel>,<TabPanel key={"4"} value={"4"} >
            <HighlightChangeComponent keyValues={accordingValues?.Condition} updateEditorValue={updateEditorValue} getEditorValue={getEditorValue}
              choices={choices}/>
        </TabPanel>,
          <TabPanel key={"5"} value={"5"} >
            <OrderInput entities={accordingValues?.orderTypes}  updateEditorValue={updateEditorValue} getEditorValue={getEditorValue} keyValues={accordingValues?.Order}/>
        </TabPanel>,<TabPanel key={"6"} value={"6"} >
            <LegendChangeComponent updateEditorValue={updateEditorValue} getEditorValue={getEditorValue}/>
        </TabPanel>]

  let filterValues = [accordingValues?.aspectRatio?.initial!== undefined, accordingValues?.ColorArray?.colors?.length > 0, 
          accordingValues?.Text?.initial!== undefined,
          accordingValues?.Axis?.initial!== undefined, accordingValues?.Condition?.initial!== undefined, accordingValues?.Order!== undefined, 
          getEditorValue("vconcat.0.layer.0.encoding.color.legend")?.length > 0]

  function renderTabs(){
    return tabList.filter((t, i) => filterValues[i])
  }

  function renderTabPanels(){
    console.log(accordingValues)
    return panelList.filter((t, i) => filterValues[i])
  }

  return (
    <div className="control-sidebar" style={{width: "40%", height: '100%'}}>
      <div style={{width: "100%",}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', height:"5%"}}>
          <Tabs value={value} onChange={handleChange} aria-label="scrollable prevent basic tabs example" variant="scrollable" scrollButtons="auto">
            {renderTabs()}
          </Tabs>
        </Box>
      </div>
      <div style={{width: "100%", overflow: 'auto', height: "85%"}}>  
        <TabContext value={value}>
          {renderTabPanels()}
        </TabContext>
        <Paper sx={{ position: 'fixed', bottom: 0, width: "40%" }} elevation={3}>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction color="primary" icon={<DownloadIcon/>} label="Logs" onClick={downloadLogs}/>
            <BottomNavigationAction color="primary" icon={<DownloadIcon/>} label="Json" onClick={dowloadJson} />
            <BottomNavigationAction color="primary" icon={<UndoIcon/>} onClick={undo}/>
            <BottomNavigationAction color="primary" icon={<RedoIcon/>} onClick={redo}/>
          </BottomNavigation>
        </Paper>
      </div>


    </div>
  );
};
export default ControlSidebar;
