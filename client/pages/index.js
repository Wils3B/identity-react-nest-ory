import {Box, Button} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Link href="/auth/login" passHref>
        <Button component="a">Log in</Button>
      </Link>
      <Link href="/auth/register" passHref>
        <Button component="a">Create Account</Button>
      </Link>
    </Box>
  );
}
