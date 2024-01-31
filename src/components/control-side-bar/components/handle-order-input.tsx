import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Container, Draggable } from "react-smooth-dnd";
import {arrayMoveImmutable} from "array-move";
import { Paper, Typography } from '@mui/material';


interface OrderSelectProps {
    entities: string[];
    updateEditorValue: (path: string, value: any) => void;
    getEditorValue: (path: string) => any;
    keyValues:any;
}

const OrderSelect: React.FC<OrderSelectProps> = ({ entities, updateEditorValue, getEditorValue, keyValues}) => {
    if (!keyValues) return (<div></div>);
    const { sort, field } = keyValues;
    const [order, setOrder] = useState(entities);

    const onDrop = ({ removedIndex, addedIndex }) => {
        const newOrder = arrayMoveImmutable(order, removedIndex, addedIndex)
        setOrder(newOrder);
        sort.forEach((s: any) => {
            if(getEditorValue(s+".x.field")===field){
                updateEditorValue(s+".x.sort", newOrder);
            }
            else if(getEditorValue(s+".y.field")===field){
                updateEditorValue(s+".y.sort", newOrder);
            }
        });
    };

    useEffect(() => {
        setOrder(entities);
    }, [entities]);

    
    const handleOrderChange = (entity: string, newPosition: number) => {
        const oldPosition = order.indexOf(entity);
        const newOrder = [...order];
        newOrder.splice(oldPosition, 1); // Remove entity from its old position
        newOrder.splice(newPosition, 0, entity); // Insert entity at its new position
        setOrder(newOrder);
        //sort is an array of objects

        sort.forEach((s: any) => {
            if(getEditorValue(s+".x.field")===field){
                updateEditorValue(s+".x.sort", newOrder);
            }
            else if(getEditorValue(s+".y.field")===field){
                updateEditorValue(s+".y.sort", newOrder);
            }
        });


    };

    const handleSelectChange = (entity: string, newPosition: number) => {
        handleOrderChange(entity, newPosition);
    };

    return (
        <div style={{alignItems: "center", textAlign: "center"}}>
            <Paper sx={{ width: "100%", alignItems: "center", textAlign: "center", marginBottom:"8px" }} elevation={3}> 
                <Typography variant="h6">Order</Typography>
            </Paper>
            <List>
                <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop} onDragEnd={() => document.body.style.cursor = 'default'} onDragStart={() => document.body.style.cursor = 'grabbing'}>
                    {order.map((v,i) => (
                    <Draggable key={v}>
                        <ListItem>
                        <ListItemText primary={v} />
                        <ListItemSecondaryAction>
                            <ListItemIcon className="drag-handle">
                                <DragHandleIcon />
                            </ListItemIcon>
                        </ListItemSecondaryAction>
                        </ListItem>
                    </Draggable>
                    ))}
                </Container>
            </List>
        </div>
    );
};

export default OrderSelect;
