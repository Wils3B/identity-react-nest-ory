import React from 'react';
import Link from 'next/link';
import {Box, Button, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Controller, useForm} from 'react-hook-form';

const SignUpForm = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper sx={{maxWidth: {lg: '400px'}, p: {xs: 2, lg: 4}}}>
      <Typography component="h1" variant="h4" fontWeight="700">
        {'Create Account '}
      </Typography>
      <Typography component="p" variant="body2" sx={{ml: 1}}>
        {'Already have an account? '}
        <Link href="/auth/login" passHref>
          <Typography variant="body2" component="a">
            {'Sign In'}
          </Typography>
        </Link>
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{required: true}}
              render={({field}) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Email Address"
                  id="email"
                  autoComplete="email"
                  autoFocus
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{required: true}}
              render={({field}) => (
                <TextField {...field} required fullWidth label="First name" id="firstName" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{required: true}}
              render={({field}) => (
                <TextField {...field} required fullWidth label="Last name" id="lastName" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{required: true}}
              render={({field}) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
            />
          </Grid>
        </Grid>

        <Button type="submit" fullWidth variant="contained" sx={{mt: 3}}>
          Create account
        </Button>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
