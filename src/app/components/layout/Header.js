'use client';
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/styles/layout.module.css'
import OrderButton from '../component/component' 

const Navbar = ()=>{

    const [mobileMenu,
        setmobileMenu] = useState(false)

    return (
        <div className={styles.header}>
            {/* Desktoo meny */}
            <nav className={styles.desktop}>
                <div className={styles.navbarTitle}>
                    <Link href='/'>
                        <Image
                            src='http://via.placeholder.com/640x360'
                            alt='logo'
                            width={140}
                            height={80}/></Link>
                </div>
                <ul className={styles.desktopMenu}>
                    <li className={styles.navDropdown}>
                        <Link href='/' className={styles.navLink}>services</Link>
                        <ul className={styles.navSubmenu}>
                            <li>
                                <Link href="/">Cheap Assignment Help</Link>
                            </li>
                            <li>
                                <Link href="/">Assignment Provider</Link>
                            </li>
                            <li>
                                <Link href="/">Solve My Assignment</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/about" className={styles.navLink}><i/>
                            How it works</Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.navLink}><i/>
                            Experts</Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.navLink}><i/>
                            Pricing</Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.navLink}><i/>
                            Testimonials</Link>
                    </li>
                </ul>
                <div className={styles.navBtns}>
                    <OrderButton title="Order Now" link='/order'/>
                    <i className="ri-login-box-line login"></i>
                </div>

            </nav>

            {/* {/* mobile  */
        } <nav className = {
            styles.mobile
        } > <div className={styles.navbarTitle}>
            <Link href='/'>
                <Image
                    src='http://via.placeholder.com/640x360'
                    alt='logo'
                    width={120}
                    height={60}/></Link>
        </div>

        {
            mobileMenu && <ul className={styles.mobileMenu}>
                <li className={styles.navDropdown}>
                    <Link href='#' className={styles.navLink}>services</Link>
                    <ul className={styles.navSubMenu}>
                        <li>
                            <Link href="/">Cheap Assignment Help</Link>
                        </li>
                        <li>
                            <Link href="/">Assignment Provider</Link>
                        </li>
                        <li>
                            <Link href="/">Solve My Assignment</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/about" className={styles.navLink}><i/>
                        How it works</Link>
                </li>
                <li>
                    <Link href="/" className={styles.navLink}><i/>
                        Experts</Link>
                </li>
                <li>
                    <Link href="/" className={styles.navLink}><i/>
                        Pricing</Link>
                </li>
                <li>
                    <Link href="/" className={styles.navLink}><i/>
                        Testimonials</Link>
                </li>
            </ul>
        } <div className = {
            styles.navBtns
        } > <OrderButton title="Order Now" link='/order'/> <i className = "ri-login-circle-line" > </i> <i className = {
            mobileMenu
                ? "ri-close-line"
                : "ri-menu-4-line"
        }
        onClick = {() => {setmobileMenu((prev) => !prev);}
        } > </i> </div>
</nav> 
</div>)
}

export default Navbar;