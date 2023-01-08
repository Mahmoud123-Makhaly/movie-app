import React from 'react'
import { Row  ,Col} from 'react-bootstrap'
import CardItem from './CardItem'
import PaginationCom from './PaginationCom'

const CardsList = ({movies  ,getPage  , pageCount}) => {
  return (
    <Row className='mt-3'>

{
    movies.length?(
        movies.map((item)=>{
return(
    <CardItem key={item.id} item={item}/>
)
        })
    ):(<h3 className='text-center p-3' style={{color:"#aaa"}}> لا توجد افلام ... </h3>)
}
{
  movies.length?(<PaginationCom getPage={getPage} pageCount={pageCount}/>):null
}
</Row>
  )
}

export default CardsList
