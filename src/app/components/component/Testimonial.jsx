"use client";
import {Swiper, SwiperSlide} from 'swiper/react'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Autoplay,  Navigation,  Pagination} from 'swiper/modules';
import styles from '@/app/styles/components.module.css'
import OrderButton from './component';

export default function Testimonial() {

    const testimonials = [
        {
            "username": "User1",
            "review": "Great service! The team was very helpful.",
            "rating": 4.5,
            "date": "2023-01-10"
        }, {
            "username": "Customer2",
            "review": "Amazing experience. Prompt and efficient.",
            "rating": 5.0,
            "date": "2023-02-05"
        }, {
            "username": "Client3",
            "review": "I'm impressed with the quality of service.",
            "rating": 4.8,
            "date": "2023-03-15"
        }, {
            "username": "Testimonial4",
            "review": "Quick response and excellent support.",
            "rating": 4.2,
            "date": "2023-04-20"
        }, {
            "username": "Reviewer5",
            "review": "Friendly staff, and the product works well.",
            "rating": 4.5,
            "date": "2023-05-12"
        }, {
            "username": "HappyClient6",
            "review": "Exceptional service. Would highly recommend.",
            "rating": 5.0,
            "date": "2023-06-08"
        }, {
            "username": "Satisfied7",
            "review": "Efficient and professional. 10/10.",
            "rating": 4.9,
            "date": "2023-07-03"
        }, {
            "username": "User8",
            "review": "Smooth process from start to finish.",
            "rating": 4.7,
            "date": "2023-08-22"
        }, {
            "username": "Client9",
            "review": "Very satisfied with the product quality.",
            "rating": 4.8,
            "date": "2023-09-17"
        }, {
            "username": "Customer10",
            "review": "Responsive team and great communication.",
            "rating": 4.6,
            "date": "2023-10-05"
        }
    ];
    return (  
    <div className={styles.testimonial}>
        <div className={styles.testimonialHead}>
            <h1>Testimonials</h1>
            <h3>Look at what out hapy clients have to say</h3>
        </div>
        <div className={styles.testimonialBody}>
                           <Swiper 
    slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
        modules={[Autoplay]}
        className="mySwiper">
        {testimonials.map((item, index) => {
            return (<SwiperSlide key = {index} >
             <div className={styles.swipermain} key={index}>
                <p className={styles.username} >{item.username}</p>
               <p className={styles.review}>Review: {item.review}</p>
               <p className={styles.rating}><i className="ri-star-half-fill" /> {item.rating}/5.</p>
                <p className={styles.revDate}>{item.date}</p>
            </div> </SwiperSlide>)
        })
}
    </Swiper>
    </div>
    <div className={styles.testimonialBottom}>
<p>Dont just Look at the rating.Try Yourself </p>
<OrderButton title='Try us' link='/home' />
        </div>
    
    </div>)
}