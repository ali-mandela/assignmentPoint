import styles from '@/app/styles/components.module.css'
import WhyUsCard from './whyuscard'
import Image from 'next/image'
import Link from 'next/link'
import {Features} from '@/app/data.js'

const WhyUs = () => {
    return (<> 
    <div className={styles.whyus}>
        <div className={styles.whyushead}>
            <div className={styles.headleft}>
                <h1>Features</h1>
                <p>Here we take the pride in ourselves on being more than just the best
                    assignment help service in the globe. But hey, we don&apos;t just focus on
                    dominating the world; we also have a soft spot for Indian kids who succeed in
                    obtaining degrees abroad. Our top-secret assignment aid service is like the
                    James Bond of academic support for these travelling scholars-exclusive and
                    constantly on the prowl. Since they were recruited from the best institutions in
                    India and world, our exclusive team of assignment writing wizards might as well
                    hold PhDs in &quot;assignment crafting &quot;.
                </p>
            </div>
            <div className={styles.headright}>
                <Image src='/whyus.svg' alt='alt' height={300} width={300}/>
            </div>
        </div>

        <div className={styles.whyusbody}>
            {Features
                .slice(0, 6)
                .map((item, index) => {
                    return (  <WhyUsCard
                        key={index}
                        title={item.title}
                        desc={item.description}
                        icon={item.icon}/>)
                    })}
        </div>
        <div className={styles.whyusFooter}>
            <Link className={styles.footerBtn} href='/about' >View All</Link>
            <Link href='/' className='order-now-button'>Order Now</Link>
        </div>
    </div>
     </>)
}

export default WhyUs