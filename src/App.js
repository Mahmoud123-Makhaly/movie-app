import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CardsList from './components/CardsList'
import Navs from './components/Navs'
import axios, { Axios } from 'axios'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import CardDetails from './components/CardDetails'
 
const App = () => {
const[movies , setMovies] = useState([]);
const [pageCount , setPageCount] = useState(0)
//all movies
const getAllMovies = async()=>{
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
  setMovies(res.data.results)
  setPageCount(res.data.total_pages)
}
useEffect(()=>{getAllMovies()} , [])
//pagination
const getPage = async(page)=>{
  const res  =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
  setMovies(res.data.results);
  setPageCount(res.data.total_pages)
}

//search
const searchInFilms =async(word)=>{
if(word===""){
  getAllMovies()
}
else{
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&query=${word}`)
setMovies(res.data.results);
setPageCount(res.data.total_pages)
}
}
  return (
    <div className='font color-style'>
<Navs searchInFilms={searchInFilms}/>
<Container>
<BrowserRouter>
<Routes>
  <Route path='/' element={<CardsList movies = {movies} getPage={getPage} pageCount = {pageCount}/>}/>
<Route path='/movie/:id' element={<CardDetails/>}/>
</Routes>
</BrowserRouter>

</Container>
    </div>
  )
}

export default App

