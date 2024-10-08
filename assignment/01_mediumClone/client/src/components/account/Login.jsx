import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Background = styled(Box)`
    background: linear-gradient(135deg, #ece9e6, #ffffff);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;  
    padding: 0; 
    overflow: hidden;  
`;

const BackgroundText = styled(Typography)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.05);
    white-space: nowrap;
    pointer-events: none;
`;

const Component = styled(Box)`
    width: 400px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #ffffff;
    z-index: 1;
    position: relative;
`;

const Image = styled("img")({
    width: 120,
    margin: 'auto',
    display: 'block',
    padding: '20px 0',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    height: 48px;
    background-color: #1976d2;
    &:hover {
        background-color: #005cbf;
    }
    border-radius: 25px;
`;

const CreateAccountButton = styled(Button)`
    text-transform: none;
    height: 48px;
    border-radius: 25px;
    color: #1976d2;
    border-color: #1976d2;
    &:hover {
        border-color: #005cbf;
        color: #005cbf;
    }
`;

const Login = () => {
    const [account, setAccount] = useState('login');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const toggleAccount = () => {
        setAccount(account === 'login' ? 'signup' : 'login');
    };

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login data:', formData);
        // Redirect or perform further actions after login
    };

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup data:', formData);
        // Redirect or perform further actions after signup
    };

    return (
        <Background>
            <BackgroundText>Write Blog, Create Blog</BackgroundText>
            <Component>
                <Box>
                    <Image src='https://imgs.search.brave.com/_p5NE5guO_tPdIUsc3Quq6hQPsm7iIUar2mnbPwX1Fk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMy84OC9y/dy1sb2dvLWxldHRl/ci1tb25vZ3JhbS1z/bGFzaC13aXRoLW1v/ZGVybi12ZWN0b3It/Mjc5ODIzODguanBn' alt={account === 'login' ? 'Login' : 'Sign Up'} />
                    <Wrapper>
                        {account === 'login' ? (
                            <>
                                <TextField 
                                    label="Username" 
                                    variant="standard" 
                                    fullWidth 
                                    name="username" 
                                    onChange={onInputChange} 
                                    value={formData.username}
                                />
                                <TextField 
                                    label="Password" 
                                    type="password" 
                                    variant="standard" 
                                    fullWidth 
                                    name="password" 
                                    onChange={onInputChange} 
                                    value={formData.password}
                                />
                                <LoginButton 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleLogin}
                                >
                                    Login
                                </LoginButton>
                                <Typography align="center" variant="body2" color="textSecondary">OR</Typography>
                                <CreateAccountButton 
                                    variant="outlined" 
                                    onClick={toggleAccount}
                                >
                                    Create an Account
                                </CreateAccountButton>
                            </>
                        ) : (
                            <>
                                <TextField 
                                    label="Username" 
                                    onChange={onInputChange} 
                                    variant="standard" 
                                    name="username" 
                                    fullWidth 
                                    value={formData.username}
                                />
                                <TextField 
                                    label="Email" 
                                    onChange={onInputChange} 
                                    variant="standard" 
                                    name="email" 
                                    fullWidth 
                                    value={formData.email}
                                />
                                <TextField 
                                    label="Password" 
                                    onChange={onInputChange} 
                                    type="password" 
                                    variant="standard" 
                                    name="password" 
                                    fullWidth 
                                    value={formData.password}
                                />
                                <TextField 
                                    label="Confirm Password" 
                                    onChange={onInputChange} 
                                    type="password" 
                                    variant="standard" 
                                    name="confirmPassword" 
                                    fullWidth 
                                    value={formData.confirmPassword}
                                />
                                <LoginButton 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleSignup}
                                >
                                    Sign Up
                                </LoginButton>
                                <Typography align="center" variant="body2" color="textSecondary">OR</Typography>
                                <CreateAccountButton 
                                    variant="outlined" 
                                    onClick={toggleAccount}
                                >
                                    Already have an account? Login
                                </CreateAccountButton>
                            </>
                        )}
                    </Wrapper>
                </Box>
            </Component>
        </Background>
    );
};

export default Login;
