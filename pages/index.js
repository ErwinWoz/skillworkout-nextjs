import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div>
            <Head>
              <title>Skillworkout</title>
            </Head>

            <div id="main">
            <div className="header-heading">
                <div className="header-text">
                    <h2 className="h2">start your</h2>
                    <h1 className="h1"><span className="span">FITNESS</span> STORY</h1>
                    <p className="details">Train your body with professional approach</p>
                </div>
            </div>
            <div className="header-btns">
                <Link href="/coach" className="header-btn">GET COACH</Link>
            </div>
        </div>
        <div id="main2">
        <div className="header-heading">
                <div className="header-text">
                    <h2 className="h2">find</h2>
                    <h1 className="h1"><span className="span">WORKOUT</span> YOU NEED</h1>
                    <p className="details">with hundrets of exrcises</p>
                </div>
            </div>
            <div className="header-btns">
                <Link href="/workouts" className="header-btn">WORKOUT</Link>
            </div>
        </div>
        <div id="main3">
        <div className="header-heading">
                <div className="header-text">
                    <h2 className="h2">be on top</h2>
                    <h1 className="h1"><span className="span">WITH YOUR</span> HEALTH</h1>
                    <p className="details">check your body mass index</p>
                </div>
            </div>
            <div className="header-btns">
                <Link href="/bmi" className="header-btn">CHECK BMI</Link>
            </div>
        </div>
        <div id="main4">
        <div className="header-heading">
                <div className="header-text">
                    <h2 className="h2">always</h2>
                    <h1 className="h1"><span className="span">FEEL</span> AND LOOK GOOD</h1>
                    <p className="details">browse our store for best attire</p>
                </div>
            </div>
            <div className="header-btns">
                <Link href="/shop" className="header-btn">SHOP NOW</Link>
            </div>
        </div>

        </div>
    )
}
