import {
  Avatar, Box, Button, Checkbox, Container,
  createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography
} from "@mui/material";
import { useState } from "react";


const theme = createTheme();
function Loginer(props) {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [isValidateUsername, setValidateUsername] = useState(true);
  const [isValidatePassword, setValidatePassword] = useState(true);

  const usernameOnBlur = (event) => {
    setUserName(event.target.value);
    console.log(event);
  }

  const passOnBlur = (event) => {
    setPassword(event.target.value);
    console.log(event);
  }

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0) {
      setValidateUsername(false);
      return;
    }
    if (password.trim().length === 0) {
      setValidatePassword(false);
      return;
    }
    props.onLogin(username, password);
    setUserName();
    setPassword();

  }
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
              <i className="fa-light fa-lock"></i>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box onSubmit={submitHandler} component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                // label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                error={!isValidateUsername}
                value={username}
                onChange={userNameChangeHandler}
                onBlur={usernameOnBlur}
                helperText={`Please enter username`}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
               // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!isValidatePassword}
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passOnBlur}
                helperText={`Please enter password`}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Loginer;