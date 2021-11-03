import React from 'react';
import Link from 'next/link';
import {Box, Button, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useForm, Controller} from 'react-hook-form';

const SignInForm = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper sx={{maxWidth: {lg: '400px'}, p: {xs: 2, lg: 4}}}>
      <Typography component="h1" variant="h3">
        Sign in
      </Typography>
      <Typography component="p" variant="body2">
        {'New user? '}
        <Link href="/auth/register" passHref>
          <Typography variant="body2" component="a">
            {'Create Account'}
          </Typography>
        </Link>
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 2}}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{required: true}}
          render={({field}) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              id="email"
              autoComplete="email"
              autoFocus
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{required: true}}
          render={({field}) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          )}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/auth/password-forgotten" passHref>
              <Typography variant="body2" component="a">
                Forgot password?
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SignInForm;
