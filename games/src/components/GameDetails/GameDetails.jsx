import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CircleLoader from "react-spinners/ClipLoader";
import {useParams} from 'react-router-dom'

export default function GameDetails() {
    
    const {id} = useParams()
    const[games , setGames] = useState(null)
    const[error ,setError] = useState(null)
    const[loading , setLoading] = useState(true)

    const fatchGameDetails = async() => {
        try{
          const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
            headers:{
              'x-rapidapi-key': 'e1f9045473msh381eebbcc53428cp1d0b3bjsn69cb754156d5',
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
          });
          setGames(response.data)
          setLoading(false)

        }catch(error){
          console.error('There was an error fatcing The Games !' , error)
          setError(error);
          setLoading(false);

        }
      }
      useEffect(()=>{
      fatchGameDetails()
  },[id])
    
    if(loading) return <div><CircleLoader color='#159254' size={100}/></div>
    if(error) return <div>Error: {error.messages}</div>

  return <>
    <div className='container mx-auto my-10'>
        <div className='flex'>
            <div className='w-1/4'>
            <img className='w-full h-auto object-cover' src={games.thumbnail} alt={games.title}/>
            </div>
            <div className='w-3/4 pl-6 text-orange-50 text-left'>
            <h1 className='text-3xl font-bold mb-4'>{games.title}</h1>
            <p><strong>Category:</strong> {games.genre}</p>
            <p><strong>Platform:</strong> {games.platform}</p>
            <p><strong>Status:</strong> {games.status}</p>
            <p className='mt-4'>{games.description}</p>
            </div>
        </div>
    </div>
    </>
  
}
