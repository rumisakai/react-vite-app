// pages/NotFoundPage.tsx
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Container } from '@mui/material';
import { Link } from '@mui/material';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Container>
        <div>
          <h1>404 - Page Not Found</h1>
          <p>ページが存在しません</p>
          <Link component={RouterLink} to="/">go to Home</Link>
          </div>
      </Container>
    </>
  );
};

export default NotFoundPage;