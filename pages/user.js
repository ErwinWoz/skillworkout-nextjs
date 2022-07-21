import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../styles/UserStyle.module.css';

const User = () => {

    const {user, error, isLoading} = useUser();
    const route = useRouter();

  return (
    <div>
        <h2>hardcoded email</h2>
        <h2>hardcoded name</h2>
        <h2>hardcoded nickname</h2>
        <Box sx={{ '& button': { m: 1 } }}>
            <Button className={styles.logout} variant="contained" size="large" onClick={() => route.push('/api/auth/logout')}>
            Logout
            </Button>
        </Box>
    </div>
  )
}

export default User;