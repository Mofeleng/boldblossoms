import React, { useState } from 'react';
const CustomFileUpload = () => {
  const [fileName, setFileName] = useState('No file chosen');
  
  const handleFileChange = (event) => {
    event.preventDefault();
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  return (
    <div className="custom-file-upload">
      <label htmlFor="file-upload">Choose File</label>
      <input
        type="file"
        id="file-upload"
        name="file-upload"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
      />
      <span id="file-name">{fileName}</span>
    </div>
  );
};

export default CustomFileUpload;
