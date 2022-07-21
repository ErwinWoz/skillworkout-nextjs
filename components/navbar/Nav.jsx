import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../img/skillworkout_logo2.svg';
import styles from '../../styles/NavStyle.module.css';
import NavItem from './NavItem';
import Profile from '../Profile';
import { useUser } from '@auth0/nextjs-auth0';
import MenuIcon from '@mui/icons-material/Menu';




const MENU_LIST = [
  { text: "WORKOUTS", href: "/workouts" },
  { text: "FIND COACH", href: "/coach" },
  { text: "BMI", href: "/bmi" },
  { text: "SHOP", href: "/shop" },
  { text: "ABOUT", href: "/about" },
  { text: "CONTACT", href: "/contact" },
];



const Nav = () => {

    const {user, error, isLoading} = useUser();
    console.log(user);

    return (
        // <div className={styles.container}>
        //     <Link href={'/'}>
        //         <Image
        //             // className={styles.logo}
        //             src={logo}
        //             alt="logo"
        //             width={150}
        //             height={50}
        //         />
        //     </Link>
        //     <MenuIcon />
        //     <div className={styles.tagList}>
        //         <Link href="/workouts">WORKOUTS</Link>
        //         <Link href="/coach">FIND COACH</Link>
        //         <Link href="/bmi">BMI</Link>
        //         <Link href="/shop">SHOP</Link>
        //         <Link href="/about">ABOUT</Link>
        //         <Link href="/contact">CONTACT</Link>
        //         <Profile />
        //     </div>
        // </div>

        <header>
            <nav className={`nav`}>
                <Link href={'/'}>
                    <Image
                        className='logo'
                        src={logo}
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </Link>
                <div className='nav__menu'>
                    {
                        MENU_LIST.map((menu) => (
                            <div className='nav__item__wrapper' key={menu.href}>
                                <NavItem {...menu} />
                            </div>
                        ))
                    }
                    <Profile />

                </div>
            </nav>
        </header>
    )
}

export default Nav