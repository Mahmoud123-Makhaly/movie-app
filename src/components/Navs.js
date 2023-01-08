import React from 'react'
import { Navbar , Container , Form ,Button } from 'react-bootstrap'
import logo from "../images/logo.png"
const Navs = ({searchInFilms}) => {
const onSearch = (word)=>{
  searchInFilms(word)
}
  return (
    <div>
         <Navbar bg="light" expand="lg" className='Nav-style'>
      <Container>
        <Navbar.Brand href="#">
            <a href='/'><img className='brand-img' src={logo}></img></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
         
          <Form className="d-flex Nav-form mx-4 mt-2 mt-lg-0">
            <Form.Control 
              type="search"
              placeholder="ابحث"
              className="me-2 form-input"
              aria-label="Search"
    onChange={(e)=>onSearch(e.target.value)}
            />

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navs
