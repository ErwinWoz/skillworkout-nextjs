import Link from "next/link";
import Image from "next/image";
import logo from '../img/skillworkout_logo2.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../styles/FooterStyle.module.css';


function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="logo"
                    width={150}
                    height={50}
                />
            </Link>
        </div>
        <div className={styles.icons}>
            <Link href='mailto:eerwoz@gmail.com'>
                <MailOutlineIcon sx={{fontSize: '2.5rem', marginLeft: '1.5rem'}} />
            </Link> 

            <Link href="https://github.com/ErwinWoz">
                <GitHubIcon sx={{fontSize: '2.5rem', marginLeft: '1.5rem'}} />
            </Link>

            <Link href="https://twitter.com/ErwinWoz">
                <TwitterIcon sx={{fontSize: '2.5rem', marginLeft: '1.5rem'}} />
            </Link>

            <Link href="https://www.linkedin.com/in/erwin-wozniak-2b51a153/">
                <LinkedInIcon sx={{fontSize: '2.5rem', marginLeft: '1.5rem'}} />
            </Link>
        </div>
        <p className={styles.p}>Powered by Erwin Wozniak © 2022</p>
    </div>
  );
}

export default Footer;