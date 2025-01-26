import React from 'react';
import { AppBar, Container, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';

const HomePage = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Container>
                <h1>Home Page</h1>
                {/* Aboutページへのリンク */}
                <Link component={RouterLink} to="/info">go to info</Link>
            </Container>
        </>
    );
};

export default HomePage;