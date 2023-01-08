import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Button, Row } from 'react-bootstrap'
import { Link , useParams } from 'react-router-dom'
import man from "../images/man.jpeg"
const CardDetails = () => {

  const param = useParams();

  const [movie, setMovie] = useState([])

  //get  movie by details 
  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)

      setMovie(res.data)
  }
  useEffect(() => {
      getMovieDetails();
  }, [])

  return (
    <div className='card-details'>
    <Row>
 <div className='film-details pt-5 text-center d-flex justify-content-around'>
 <img className='details-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

<div className='details-info'>
<h4 className='mb-3'>اسم الفيلم:{movie.title}</h4>
    <h4 className='mb-3'>تاريخ الفيلم:{movie.release_date}</h4>
    <h4 className='mb-3'> عدد المقيمين:{movie.vote_count}</h4>
    <h4 className='mb-3'>التقييم :{movie.vote_count}.</h4>
</div>
 </div>
  </Row>
  <Row>
    <div className='film-history py-5 pe-5'>
        <h3 className='mb-3'>القصة:</h3>
        <p> {movie.overview}</p>
    </div>
  </Row>
  <Row className='d-flex mt-3'>
<div className='btn-group'>
<Link to="/"> <Button  className='btn mx-2'>عودة للرئيسية</Button> </Link>

<a href={movie.poster_path}>
<Button className='btn' style={{width:"200px"}}>مشاهدة الفيلم </Button>

</a>
</div>
  </Row>
    </div>
  )
}

export default CardDetails
