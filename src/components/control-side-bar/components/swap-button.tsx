import React, { useState } from 'react';

interface SwapButtonProps {
//   initialSpec: any; // The initial spec
  onSwap: () => void; // Callback for when the spec is swapped
}

const SwapButton: React.FC<SwapButtonProps> = ({  onSwap }) => {
//   const [spec, setSpec] = useState(initialSpec);

  const handleSwap = () => {
    onSwap();
  };

  return (
    <div>
      <button onClick={handleSwap}>Swap x and y</button>
    </div>
  );
};

export default SwapButton;
