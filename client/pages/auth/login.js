import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import SignInForm from '../../components/forms/SignInForm';

export default function SignInPage() {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: '100vh',
        backgroundImage: {
          lg: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/1600x900/daily?landscape%20background)',
        },
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <CssBaseline />
      <Grid item xs={false} lg={6} />
      <Grid
        item
        xs={12}
        lg={6}
        component="div"
        sx={{display: {lg: 'flex'}, alignItems: {lg: 'center'}, py: 2}}
      >
        <SignInForm />
      </Grid>
    </Grid>
  );
}
