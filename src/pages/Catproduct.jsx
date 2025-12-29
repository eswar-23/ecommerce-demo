import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function Catproduct() {
     const [Categories, setCategories] = useState([]);
        const {categories} = useParams();
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/'+ categories).then(response => {
            setCategories(response.data.products);
        });
    }, [categories]);
  return (
    <div>
       <div>
                  <Container className="my-5"> 
                      <h2 className="mb-4 text-center">Our Products</h2>
                      <Row xs={1} md={2} lg={3} className="g-4">
                          {Categories.map((product) => (
                              <Col key={product.id}>
                                  <Card className="h-100 shadow-sm">
                                      <Card.Img className='image' variant="top" src={product.thumbnail} alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
                                      <Card.Body className="d-flex flex-column">
                                          <Card.Title>{product.title}</Card.Title>
                                          <Card.Text className="text-muted">${product.price}</Card.Text>
                                          <Link to={`/product/${product.id}`} className="mt-auto">
                                              <Button variant="outline-primary" className="w-100">View Details</Button>
                                          </Link>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          ))}
                      </Row>
                  </Container>
              </div>
    </div>
  )
}

export default Catproduct