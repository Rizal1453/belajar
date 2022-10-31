import axios from 'axios'
import React, { useEffect, useState } from 'react'


function DataFetching() {
    const [data,setData] = useState({})
    const [id,setId ] = useState(1)
    const [idFromButton,setIdFromButton] = useState(1)
    
    const handleButton = () => {
        setIdFromButton(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton} `)
        .then(res=> {
            console.log(res);
            setData(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[handleButton])
  return (
    <div> 
    <input type="text" value={id} onChange={e=> setId(e.target.value)} />
    <button type='text' onClick={handleButton}> click set ID</button>
    <p>{data.title}</p>

    </div>
  )
}

export default DataFetching