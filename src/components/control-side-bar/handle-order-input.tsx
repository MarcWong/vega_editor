import React, { useState, useEffect } from 'react';

interface OrderSelectProps {
    entities: string[];
    updateEditorValue: (path: string, value: any) => void;
    getEditorValue: (path: string) => any;
    keyValues:any;
}

const OrderSelect: React.FC<OrderSelectProps> = ({ entities,updateEditorValue,getEditorValue,keyValues}) => {
    if(!keyValues) return(<div></div>);
    const {sort,field}=keyValues;
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
        if(getEditorValue(sort+".x.field")===field){
            updateEditorValue(sort+".x.sort",newOrder);
        }
        else if(getEditorValue(sort+".y.field")===field){
            updateEditorValue(sort+".y.sort",newOrder);
        }
    };

    const handleSelectChange = (entity: string, newPosition: number) => {
        const entityIndex = order.indexOf(entity);
        const updatedPositions = [...selectedPositions];
        updatedPositions[entityIndex] = newPosition;
        setSelectedPositions(updatedPositions);
        handleOrderChange(entity, newPosition);
    };

    return (
        <div>
            {order.map((entity, index) => (
                <div key={entity}>
                    <label htmlFor={entity}>{entity} position:</label>
                    <select id={entity} value={selectedPositions[index]} onChange={e => handleSelectChange(entity, +e.target.value)}>
                        {entities.map((_, i) => (
                            <option key={i} value={i}>{i + 1}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default OrderSelect;
