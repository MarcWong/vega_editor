import React, { useState } from "react";

interface TitleInputProps {
    title: string;
    onTitleChange: (newTitle: string) => void;
    label: string;
  }
  
  const TitleInput: React.FC<TitleInputProps> = ({ title, onTitleChange, label }) => {
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onTitleChange(event.target.value);
    };
  
    return (
      <div>
        <label>{label}</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
    );
  };
  
  export default TitleInput;
  