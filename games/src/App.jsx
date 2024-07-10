import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GameDetails from './components/GameDetails/GameDetails'
import Shooter from './components/Shooter/Shooter'
import Mmorpg from './components/Mmorpg/Mmorpg'
import Sailing from './components/Sailing/Sailing'
import Permadeath from './components/Permadeath/Permadeath'
import Superhero from './components/Superhero/Superhero'
import Pixel from './components/Pixel/Pixel'

function App() {

  let router =createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true , element:<Home/>},
      {path:'Shooter' , element:<Shooter/>},
      {path:'Mmorpg' , element:<Mmorpg/>},
      {path:'Sailing' , element:<Sailing/>},
      {path:'Permadeath' , element:<Permadeath/>},
      {path:'Superhero' , element:<Superhero/>},
      {path:'Pixel' , element:<Pixel/>},
      {path:'game/:id' , element:<GameDetails/>}

    ]}
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
