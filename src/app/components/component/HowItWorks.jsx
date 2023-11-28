import React from 'react'
import styles from '@/app/styles/components.module.css'
import step1 from '/public/step1.svg'
import step2 from '/public/step2.svg'
import step3 from '/public/step3.svg'
import step4 from '/public/step4.svg'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className={styles.howItWork}>
    <h1>How it Works</h1>
    <div className={styles.howItWorkBody}>
    <div>
      <Image src={step1} alt='step 1' height={140} width={140}/>
      <p>step 1: Submit your details.</p>
    </div>
    <div>
      <Image src={step4} alt='step 1' height={140} width={140}/>
    </div>
    <div>
      <Image src={step2} alt='step 1' height={140} width={140}/>
      <p>step 2: our team will get in touch with you.</p>
    </div>
    <div>
      <Image src={step4} alt='step 1' height={140} width={140}/>
    </div>
    <div>
      <Image src={step3} alt='step 1' height={140} width={140}/>
      <p>step 3: Recieve your final order.</p>
    </div> 
    </div>

    </div>
  )
}

export default HowItWorks