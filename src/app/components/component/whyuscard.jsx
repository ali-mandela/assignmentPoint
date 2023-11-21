import styles from '@/app/styles/components.module.css'
const WhyUsCard = ({title,desc, icon}) => {
    return ( <>
     <div className={styles.wscardMain}>
        <i className={icon}/>
        <h3>{title}</h3>
        <p>{desc}</p> 
    </div> </>
  )
}

export default WhyUsCard