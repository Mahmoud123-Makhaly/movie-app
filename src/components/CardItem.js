import React from 'react'
import { Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {
  return (

           <Col sm="6" lg="3"> 

<Link to={`/movie/${item.id}`}>
<div className='card-item mb-3'>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{width:"100%" , height:"220px"}}></img>
        <div className='card-item-desc'>
           <div className='card-item-desc-info'> 
           <p>اسم الفيلم:{item.title}</p>
            <p>تاريخ الاصدار:{item.release_date}</p>
            <p>انيميشن:{item.vote_count}</p>
            <p>التقييم :{item.vote_average}</p></div>

        </div>
      </div>
</Link>

      </Col>
  )
}

export default CardItem
