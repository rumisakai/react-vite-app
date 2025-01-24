// pages/AboutPage.tsx
import { AppBar, Box, Container } from '@mui/material';
import React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const InfomationPage: React.FC = () => {
  return (
    <>
      <AppBar>
          <Container>
              <h1>Info Page</h1>
          </Container>
      </AppBar>
      <Container>
          <h1>Info Page</h1>
          {/* Aboutページへのリンク */}
          <Link component={RouterLink} to="/">go to Home</Link>
      </Container>
    </>
  );
};

export default InfomationPage;