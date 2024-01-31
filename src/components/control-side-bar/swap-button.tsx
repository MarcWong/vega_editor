import React from 'react';
import Button from '@mui/material/Button';

interface SwapButtonProps {
    onSwap: () => void; // Callback for when the spec is swapped
}

const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
    return (
        <Button variant="contained" color="primary" onClick={onSwap}>
            Swap x and y
        </Button>
    );
};

export default SwapButton;
