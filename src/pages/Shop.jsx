import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { products } from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Shop = () => {
    const [products,setProducts]=useState([]);
     useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((response)=>{
            setProducts(response.data.products);
            
        })
     },[])
    


    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Our Products</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.images} alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
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
    );
};

export default Shop;
