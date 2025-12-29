import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <div className="bg-light p-5 rounded-lg m-3 text-center">
                <h1 className="display-4">Welcome to our Shop!</h1>
                <p className="lead">Discover amazing products at unbeatable prices.</p>
                <hr className="my-4" />
                <p>Start browsing our collection today.</p>
                <Link to="/shop">
                    <Button variant="primary" size="lg">Shop Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
