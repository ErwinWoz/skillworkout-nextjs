import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0'; 
import styles from '../styles/ProfileStyle.module.css';

function Profile() {
    const route = useRouter();
    const { user } = useUser();

    if (!user) {
        return (
        <div className={styles.container} onClick={() => route.push('api/auth/login')}>
            <PermIdentityIcon sx={{fontSize: '2rem'}} />
        </div>
        )
    }
    return (
        <div className={styles.container} onClick={() => route.push('./user')}>
            <picture>
                <img className={styles.img} src={user.picture} alt={user.name} />
            </picture>
            <h3 className={styles.profileText}>{user.name}</h3>
        </div>
    )
    
}

export default Profile;