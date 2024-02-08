import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const API_KEY ='UbIOcaxwtq1Yz2sXNp8u4jV8nTEuC8qA';

const Random = () => {

  const [gif,setGif] = useState('');
  const [loading,setLoading] = useState(false)

 
  async function fetchData() {
    setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const data = response.data.data;
      const imgSrc = data.images.downsized_large.url;
      setGif(imgSrc);
      setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[])
 

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-1/2  bg-slate-600 rounded-md flex flex-col items-center mt-[5px]'>

      <h1 className='text-2xl uppercase font-bold text-white mt-[15px]'>Random Gif</h1>
      {
        loading  ? (<Spinner/>) : (<img src={gif} width={450} />
        )
      }
      
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 rounded-md py-3 text-black font-bold mb-[20px]'>Generate</button>

    </div>
  )
}

export default Random