import {
  Avatar, Box, Button, Checkbox, Container,
  createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography
} from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "../Login/style.css";


const usernameReducer = (state, action) => {
  if (action.type === 'USERNAME_INPUT_CHANGE') {
    return { value: action.payload, isValid: action.payload.trim().length !== 0 }
  }
  if (action.type === 'USERNAME_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length !== 0 }
  }
  return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT_CHANGE') {
    return { value: action.payload, isValid: action.payload.trim().length !== 0 }
  }
  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length !== 0 }
  }
  return { value: '', isValid: false };
}

const theme = createTheme();
function LoginForm(props) {

  //validate
  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, usernameDispatcher] = useReducer(usernameReducer, { value: '', isValid: null });
  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, { value: '', isValid: null });

  useEffect(() => {
    setFormIsValid(usernameState.isValid && passwordState.isValid);
    return (() => {
    });

  }, [usernameState, passwordState]);

  const userNameChangeHandler = (event) => {
    usernameDispatcher({ type: 'USERNAME_INPUT_CHANGE', payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatcher({ type: 'PASSWORD_INPUT_CHANGE', payload: event.target.value });
  }

  const validateUsernameHandler = () => {
    usernameDispatcher({ type: 'USERNAME_INPUT_BLUR' });
  }

  const validatePasswordHandler = () => {
    passwordDispatcher({ type: 'PASSWORD_INPUT_BLUR' });
  }


  const submitHandler = (event) => {
    event.preventDefault();

    // onLogin transmit from function LoginForm
    props.onLogin(usernameState.value, passwordState.value);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
              <i className="fa-solid fa-lock"></i>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box onSubmit={submitHandler} component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                error={usernameState.isValid === false}
                id='form-username'
                label='Username'
                variant="outlined"
                onChange={userNameChangeHandler}
                value={usernameState.value}
                onBlur={validateUsernameHandler}
                helperText={`Please enter username`}
              />
              <TextField
                margin="normal"
                fullWidth
                error={passwordState.isValid === false}
                id='form-password'
                label='Password'
                variant="outlined"
                onChange={passwordChangeHandler}
                value={passwordState.value}
                type='password'
                onBlur={validatePasswordHandler}
                helperText={`Please enter password`}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default LoginForm;