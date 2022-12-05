import React from 'react';
import './service.css';
import { useState, useEffect } from "react";
import axios from "axios";

function service() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataDownload, setData] = useState([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getAllData() {
      try {
        const dataDownload = await axios.get("http://127.0.0.1:8000/api/file/")
        setData(dataDownload.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllData()
  }, [])
  const Download = (event, data) => {
    console.log(data.file)
    axios({
      url: data.file, //your url
      method: 'GET',
      responseType: 'blob', // important

    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', data.name); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }
  return (
    <>
      
      <h1 className='products'>
        Document for UIT Student
      </h1>
      
      <h1 className='black'>
      {
        
          dataDownload.map((data, i) => {
            
            return (
              <a href="#" onClick={event => Download(event, dataDownload[i])}
                key={i}>{data.name} <br></br> </a> 
            )
            
          })
        }
      </h1>


    </>


  )
}

export default service