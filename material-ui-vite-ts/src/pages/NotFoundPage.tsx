// pages/NotFoundPage.tsx
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Container } from '@mui/material';
import { Link } from '@mui/material';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <AppBar>
          <Container>
              <h1>Error Page</h1>
          </Container>
      </AppBar>
      <Container>
        <div>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for doesn't exist.</p>
          <Link component={RouterLink} to="/">go to Home</Link>
          </div>
      </Container>
    </>
  );
};

export default NotFoundPage;