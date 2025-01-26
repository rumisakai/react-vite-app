import React from 'react';
import { AppBar, Container, Link, Toolbar } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import {
  AuthResponse,
  SignInPage,
  type AuthProvider,
} from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const SignInOriginalPage = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Toolbar />
            <Container>
                <h1>サインインしてくださいしてください</h1>
                {/* https://qiita.com/ryuichi-f/items/392fae9ed74eeba5c397を参考に、やる */}
                <Link component={RouterLink} to="/">go to info</Link>
            </Container>
        </>
    );
};

export default SignInOriginalPage;