import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function Shooter() {

    const[games , setGames] = useState([])
    const[error ,setError] = useState()
    const[loading , setLoading] = useState(true)

 
        const fatchGames = async() => {
          try{
            const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel`,{
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
        fatchGames()
    },[])

    const truncateTitle = (title , wordLimit) =>{
      const words = title.split(' ');
      if(words.length > wordLimit){
        return words.slice(0,wordLimit).join('')+'...';
      }
      return title;
    }

    if(loading) return <></>
    if(error) return <div>Error: {error.messages}</div>

  return <>
  <main className='container ps-6 pe-6 mx-auto my-5'>
   <section className='relative'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {games.map(game=>(
        <Link key={game.id} to={`/game/${game.id}`}>
          <div className='max-w-sm rounded overflow-hidden shadow-lg bg-sky-100 transform transition-500 ease-in-out hover:scale-105'>
            <img className='w-full h-48 object-cover' src={game.thumbnail} alt={game.title}/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{truncateTitle(game.title , 150)}</div>
              <p className='text-gary-700 text-base'>
                {game.short_description}
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.platform}</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.genre}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
   </section>
  </main>
  </>
}
