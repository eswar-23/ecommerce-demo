import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categories() {
const[category,setCategory]=useState([])
 
useEffect(()=>{
  axios.get('https://dummyjson.com/products/category-list').then(response=>setCategory(response.data))
},[])
  return (
   <div>
            <Container className="my-5">
                <h2 className="mb-4 text-center">Categories</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                     {category.map((category, index) => (
                        <Col key={index}>

                            <Link to={`/catproduct/${category}`} className="mt-auto">
                                <Button variant="outline-primary" className="w-100">{category}</Button>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
  )
}

export default Categories

