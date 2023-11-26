import styles from '@/app/styles/components.module.css'
import OrderButton from './component'
const Stats = () => {

    const data = [
        {
            title: "happy Students",
            icon: "ri-user-smile-fill",
            num: "123560+"
        }, {
            title: "Dedicated Experts",
            icon: "ri-graduation-cap-fill",
            num: "5000+"
        },  {
            title: "Orders Completed till date",
            icon: "ri-article-fill",
            num: "10000+"
        }, {
            title: "Client Rating",
            icon: "ri-star-fill",
            num: "4.9/5"
        }
    ]
    return (
        <div className={styles.stats}>
            <h1>Not like any other service you have used previously</h1>
            <h2>OUR NUMBERS</h2>
            <div className = {styles.statsbody} > 
            {data.map((item,index) => {
                return (  <>
                  <div key={index} className={styles.statscard}>
                          <i className={item.icon}/>
                          <h3>{item.title}</h3>
                          <h2>{item.num}</h2>
                  </div> 
                  </> )
            })
}
</div>
<div className={styles.ordernow}>  
        <OrderButton title="Order Now" link="/" />
</div>
        </div>
    )
}

export default Stats