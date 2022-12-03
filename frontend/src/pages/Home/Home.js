import style from "../../style";
import Hero from "../Hero/Hero.js";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const Home = () => {
    const [dataDownload, setData] = useState([])
    useEffect(()=>{
        async function getAllData(){
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
            <Hero />
            {
                dataDownload.map((data, i)=>{
                    return (<a href = "#" onClick={event => Download(event,dataDownload[i])} 
                            key={i}>{data.name}</a>)
                })
            }
        </>
    );
};
export default Home;
