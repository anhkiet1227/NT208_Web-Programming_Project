import React from 'react'
import './Upload.css';
import { useState } from 'react';
import axios from 'axios';


function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const uploadData = new FormData();
    uploadData.append('file', selectedFile);
    uploadData.append('name', selectedFile.name);
    try {
      return await axios.post(
          'http://127.0.0.1:8000/api/file/', uploadData,
          {
              headers: {
                  "Content-Type": "multipart/form-data",
              },
          }
      )
    } catch (e) {
        return e.response ? e.response : e
    }
  };

  return (
    <div className='services'>
      <div >
        <input type="file" className="upload-field" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
      <div></div>
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default Upload