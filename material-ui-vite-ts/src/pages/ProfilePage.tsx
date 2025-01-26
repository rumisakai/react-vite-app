// pages/AboutPage.tsx
import { AppBar, Box, Container } from '@mui/material';
import React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';

const ProfilePage: React.FC = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Container>
          <h1>ProfilePage</h1>
          {/* Homeページへのリンク */}
          <Link component={RouterLink} to="/">go to Home</Link>
      </Container>
    </>
  );
};

export default ProfilePage;