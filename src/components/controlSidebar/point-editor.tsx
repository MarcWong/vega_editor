import React, { useState } from 'react';

interface PointEditorProps {
  point: { Year: string, Values: number, Line: string };
  onUpdatePoint: (newPoint: { Year: string, Values: number, Line: string }) => void;
}

const PointEditor: React.FC<PointEditorProps> = ({ point, onUpdatePoint }) => {
  const [year, setYear] = useState(point.Year);
  const [values, setValues] = useState(point.Values.toString());
  const [line, setLine] = useState(point.Line);

  const handleSubmit = () => {
    onUpdatePoint({ Year: year, Values: parseFloat(values), Line: line });
  };

  return (
    <div>
      <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
      <input value={values} onChange={(e) => setValues(e.target.value)} placeholder="Values" />
      <input value={line} onChange={(e) => setLine(e.target.value)} placeholder="Line" />
      <button onClick={handleSubmit}>Update Point</button>
    </div>
  );
};

export default PointEditor;
