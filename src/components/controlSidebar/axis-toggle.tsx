import React from 'react';

interface AxisToggleProps {
  toggleStatus: boolean;
  onToggle: () => void;
}

const AxisToggle: React.FC<AxisToggleProps> = ({ toggleStatus, onToggle }) => (
  <div className="axis-toggle">
    <label>Swap Axes:</label>
    <input type="checkbox" checked={toggleStatus} onChange={onToggle} />
  </div>
);

export default AxisToggle;
