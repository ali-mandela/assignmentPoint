'use client'
import React,{useState} from 'react'
import Link from 'next/link' 
import Image from 'next/image'
import '@/app/styles/navbar.css'

 
const Navbar = () => {

    const [mobileMenu, setmobileMenu] = useState(false)
    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='navbar-title'>
                <Link href='/' > <Image src='http://via.placeholder.com/640x360' alt='logo' width={140} height={80}/></Link>
                  </div>
                
                     {/* Desktop menu */}
                     <div className='menu'>
                <div className="navbar-menu">
                    <ul className="nav-menu">
                        <li className='nav-dropdown'>
                            <Link href='/'  className='nav-link'>services</Link>
                            <ul className="nav-submenu">
                                <li>
                                    <Link href="/" >Welcome</Link>
                                </li>
                                <li>
                                    <Link href="/">Welcome</Link>
                                </li>
                                <li>
                                    <Link href="/">Register page</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" className='nav-link'><i/>
                                How it works</Link>
                        </li>
                        <li>
                            <Link href="/" className='nav-link'><i/>
                                Experts</Link>
                        </li>
                        <li>
                            <Link href="/" className='nav-link'><i/>
                                Pricing</Link>
                        </li>
                        <li>
                            <Link href="/" className='nav-link'><i/>
                                Testimonials</Link>
                        </li>

                    </ul>
                </div>
               
                <div className='nav-btns'>
                    <button>Order Now</button>
                    <i className="ri-login-box-line login"  ></i>
                </div>
                </div>
                <i  id="bar" className={mobileMenu ? "ri-menu-4-line" : "ri-close-line"}  onClick={() => {
    setmobileMenu((prev) => !prev);
  }}></i>

            </nav>
        </div>
    )
}

export default Navbar