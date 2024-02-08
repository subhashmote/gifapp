import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const API_KEY ='UbIOcaxwtq1Yz2sXNp8u4jV8nTEuC8qA';

const Tag = () => {

  const [gif,setGif] = useState('');
  const [loading,setLoading] = useState(false)
  const [tag,setTag] = useState('car');

 
  async function fetchData() {
    setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2  bg-slate-600 rounded-md flex flex-col items-center mt-[5px]'>

      <h1 className='text-2xl uppercase font-bold text-white mt-[15px]'>Random Gif</h1>
      {
        loading  ? (<Spinner/>) : (<img src={gif} width={450} />
        )
      }

      <input 
      type='text'
      name='tag'
      placeholder='Enter a Tag...'
      className='w-10/12 bg-slate-200 text-black border-none rounded-md mt-4 mb-4 p-4  text-center font-bold placeholder:text-black placeholder:opacity-35'
      onChange={changeHandler}
      value={tag}
      />
      
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 rounded-md py-3 text-black font-bold mb-[20px]'>Generate</button>

    </div>
  )
}

export default Tag