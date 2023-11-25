import styles from '@/app/styles/layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import srcimg from 'public/securepayment.svg'

const Footer = () => {
    const serviceArray = ['Cheap Assignment Help', 'Assignment Provider', 'Solve My Assignment', 'MBA Assignment Help'];

    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.div1}>
                    <Link href='/'>
                        <h2>Assignmentpoint</h2>
                    </Link>

                    <p>
                    Here we take the pride in ourselves on being more thanHeHere we take the pride in ourselves on being more thanHere we .
                    </p>
                    <address>
                        <a href="mailto:jim@example.com">assignmentpoint@team.com</a><br/>
                        <a href="tel:+14155550132">+ (91) 12346958</a>
                    </address>

                </div>
                <div className={styles.div2}>
                    <h2>About us</h2>
                    <Link href=''>Home</Link>
                    <Link href=''>About</Link>
                    <Link href=''>Contact</Link>
                </div>
                <div className={styles.div3}>
                    <h2>Services</h2>
                    {serviceArray.map((service, index) => (
                        <Link key={index} href='/'>{service}</Link>
                    ))}
                </div>

                <div className={styles.div4}>
                    
                    <div>
                        <h2>Follow us</h2>
                        <Link href='h'>
                            <i className="ri-instagram-fill"></i>
                        </Link>
                        <Link href='h'>
                            <i className="ri-linkedin-box-fill"></i>
                        </Link>
                        <Link href='h'>
                        <i class="ri-facebook-box-fill"></i>
                        </Link>
                    </div>
                    <div>
                        <p>100% Secure Pay</p>
                        <Image src={srcimg} height={40} width={200} alt='src'/>
                    </div>
                </div>

            </div>
            <div className={styles.bottom}>
                <p>Copyright © 2023 assignmentpoint.com. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer