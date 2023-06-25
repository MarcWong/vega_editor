import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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
    useEffect(() => {
        setOrder(entities);
    }, [entities]);

    const handleOrderChange = (entity: string, newPosition: number) => {
        const oldPosition = order.indexOf(entity);
        const newOrder = [...order];
        newOrder.splice(oldPosition, 1); // Remove entity from its old position
        newOrder.splice(newPosition, 0, entity); // Insert entity at its new position
        setOrder(newOrder);
        if(getEditorValue(sort+".x.field")===field){
            updateEditorValue(sort+".x.sort", newOrder);
        }
        else if(getEditorValue(sort+".y.field")===field){
            updateEditorValue(sort+".y.sort", newOrder);
        }
    };

    const handleSelectChange = (entity: string, newPosition: number) => {
        handleOrderChange(entity, newPosition);
    };

    return (
        <div>
            {order.map((entity, index) => (
                <div key={entity}>
                    <FormControl>
                        <InputLabel id={`${entity}-label`}>{entity} position:</InputLabel>
                        <Select
                            labelId={`${entity}-label`}
                            id={entity}
                            value={index}
                            onChange={(e) => handleSelectChange(entity, +e.target.value)}
                        >
                            {entities.map((_, i) => (
                                <MenuItem key={i} value={i}>{i + 1}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            ))}
        </div>
    );
};

export default OrderSelect;
