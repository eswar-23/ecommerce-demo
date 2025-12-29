import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
//import { products } from '../data';

import axios from 'axios'

const ProductDetails = () => {
   const [product,setProduct]=useState(null);


    const { id } = useParams();
    useEffect(()=>{
      axios.get('https://dummyjson.com/products/'+id).then(response=>setProduct(response.data))
    },[])

    if (!product) {
        return <Container className="my-5 text-center"><h2>Product not found</h2></Container>;
    }

    return (
        <Container className="my-5">
            <Link to="/shop" className="btn btn-secondary mb-3">Back to Shop</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.images} alt={product.name} fluid rounded />
                </Col>
                <Col md={6}>
                    <h2>{product.title}</h2>
                    <h4 className="text-primary my-3">${product.price}</h4>
                    <p className="lead">{product.description}</p>
                    <Button variant="success" size="lg">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
