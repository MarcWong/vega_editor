import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

interface OrderSelectProps {
    entities: string[];
    updateEditorValue: (path: string, value: any) => void;
    getEditorValue: (path: string) => any;
    keyValues: any;
}

const OrderSelect: React.FC<OrderSelectProps> = ({ entities, updateEditorValue, getEditorValue, keyValues }) => {
    if(!keyValues) return <Box></Box>;

    const { sort, field } = keyValues;

    const [order, setOrder] = useState(entities);
    const [selectedPositions, setSelectedPositions] = useState(entities.map((_, i) => i));

    useEffect(() => {
        setOrder(entities);
        setSelectedPositions(entities.map((_, i) => i));
    }, [entities]);

    const handleOrderChange = (entity: string, newPosition: number) => {
        const oldPosition = order.indexOf(entity);
        const newOrder = [...order];
        newOrder.splice(oldPosition, 1); // Remove entity from its old position
        newOrder.splice(newPosition, 0, entity); // Insert entity at its new position
        setOrder(newOrder);

        // Update the positions
        const newPositions = newOrder.map((item) => order.indexOf(item));
        setSelectedPositions(newPositions);

        if(getEditorValue(sort+".x.field") === field){
            updateEditorValue(sort+".x.sort", newOrder);
        }
        else if(getEditorValue(sort+".y.field") === field){
            updateEditorValue(sort+".y.sort", newOrder);
        }
    };

    const handleSelectChange = (entity: string, newPosition: number) => {
        handleOrderChange(entity, newPosition);
    };

    return (
        <Box>
            {order.map((entity, index) => (
                <Box key={entity}>
                    <FormControl variant="standard">
                        <InputLabel id={entity + '-label'}>{entity} position:</InputLabel>
                        <Select
                            labelId={entity + '-label'}
                            id={entity}
                            value={selectedPositions[index]}
                            onChange={e => handleSelectChange(entity, +e.target.value)}
                        >
                            {entities.map((_, i) => (
                                <MenuItem key={i} value={i}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            ))}
        </Box>
    );
};

export default OrderSelect;
