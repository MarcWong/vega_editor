// ChartPaddingInput.js
import React from 'react';

interface ChartPaddingInputProps {
    padding: number;
    onPaddingChange: (padding: number) => void;
}

const ChartPaddingInput: React.FC<ChartPaddingInputProps> = ({ padding, onPaddingChange }) => {
    return (
        <div>
            <label htmlFor="chart-padding">Chart Padding:</label>
            <input
                type="number"
                id="chart-padding"
                name="chart-padding"
                value={padding}
                onChange={event => onPaddingChange(parseInt(event.target.value, 10))}
            />
        </div>
    );
};

export default ChartPaddingInput;