// import '@styles/style.scss'
import '@/app/styles/style.scss'
import Image from 'next/image'; 
import { HireMeButton } from './component/component';
import OrderButton from './component/component';
 
const testimonialsDetails = [
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
      username: "username1",
      userId: "user1",
      clientRating: "4.5/5",
      ordersDelivered: 1500,
      subjects: ["Mathematics", "Physics", "Computer Science"],
      educationalQualification: "PhD in Mathematics",
      bio: "Passionate about mathematics and committed to helping students succeed.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
      username: "username2",
      userId: "user2",
      clientRating: "4.2/5",
      ordersDelivered: 1200,
      subjects: ["Physics", "Chemistry", "Biology"],
      educationalQualification: "PhD in Physics",
      bio: "Dedicated to making science accessible and enjoyable for students.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
      username: "username3",
      userId: "user3",
      clientRating: "4.8/5",
      ordersDelivered: 1800,
      subjects: ["Computer Science", "Programming", "Web Development"],
      educationalQualification: "PhD in Computer Science",
      bio: "Passionate about coding and helping students excel in programming.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
      username: "username4",
      userId: "user4",
      clientRating: "3.9/5",
      ordersDelivered: 1000,
      subjects: ["History", "Political Science", "Sociology"],
      educationalQualification: "PhD in History",
      bio: "Fascinated by history and dedicated to making it engaging for students.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
      username: "username5",
      userId: "user5",
      clientRating: "4.7/5",
      ordersDelivered: 1600,
      subjects: ["English Literature", "Creative Writing", "Poetry"],
      educationalQualification: "PhD in English Literature",
      bio: "Passionate about literature and nurturing creativity in students.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
      username: "username6",
      userId: "user6",
      clientRating: "4.1/5",
      ordersDelivered: 1300,
      subjects: ["Economics", "Finance", "Business"],
      educationalQualification: "PhD in Economics",
      bio: "Committed to teaching economics in a practical and understandable way.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
      username: "username7",
      userId: "user7",
      clientRating: "4.9/5",
      ordersDelivered: 2000,
      subjects: ["Psychology", "Counseling", "Mental Health"],
      educationalQualification: "PhD in Psychology",
      bio: "Dedicated to promoting mental well-being through education and counseling.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/8.png",
      username: "username8",
      userId: "user8",
      clientRating: "4.0/5",
      ordersDelivered: 1100,
      subjects: ["Environmental Science", "Ecology", "Sustainability"],
      educationalQualification: "PhD in Environmental Science",
      bio: "Passionate about environmental sustainability and educating future leaders.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/9.png",
      username: "username9",
      userId: "user9",
      clientRating: "4.6/5",
      ordersDelivered: 1700,
      subjects: ["Chemical Engineering", "Materials Science", "Nanotechnology"],
      educationalQualification: "PhD in Chemical Engineering",
      bio: "Committed to advancing knowledge in chemical engineering and materials science.",
    },
    {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/10.png",
      username: "username10",
      userId: "user10",
      clientRating: "4.4/5",
      ordersDelivered: 1400,
      subjects: ["Health Sciences", "Nutrition", "Fitness"],
      educationalQualification: "PhD in Health Sciences",
      bio: "Dedicated to promoting health and well-being through education and research.",
    },
  ];
   
  
import React from 'react';
import Order from '@/models/orderModel';

const Experts = () => {
    return (
        <div className='testimonails'>
        <div className='testimonail-head'>
        <h1>Experts</h1>
        <h3>Connect with Our Team of Experts</h3>
        </div>
        
            <div className="slider">
                <div className="slide-track">
                    {
                        testimonialsDetails.map((item, index) => (
                            <div className="slide" key={index}>
                                <div className='slide-top'>
                                    <div className='slide-top-detail'>
                                        <p className='userId'>user ID: {item.userId}</p>
                                        <p className='username'>{item.username}</p>
                                        <p className='qualification'>{item.educationalQualification}</p>
                                        <p>{item.subjects.map((i, index) => <span key={index}>{i} </span>)}</p>
                                       </div>
                                    <div className='slide-top-img' >
                                    <Image src={item.src} width={50} height={50} alt={item.username} />
                                    </div>
                              
                                </div>      
                                <hr style={{backgroundColor:"#F63F48"}}/>
                                <div className='slide-body'>
                                <p className='slide-body-bio'>&quot;{item.bio}&quot;</p>
                                {/* <p>{item.subjects.map((i, index) => <span key={index}>{i} </span>)}</p> */}
                                </div>
                                <div className='slide-bottom'>
                                <div className='slide-bottom-detail'>
                                <p className='ordersdeivered'>Orders Delivered <i className="ri-check-double-fill odl"></i> : {item.ordersDelivered}</p>
                                <p className='clientrating'>Client rating <i className="ri-star-fill odl"></i> : {item.clientRating}</p>
                                </div>
                                <div className='hire-me'>
                                <HireMeButton   title="Hire me" link="/about"/>
                                </div>
                                                                 </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='testimonail-bottom'> 
        <OrderButton title="Ordernow" link="/about"/>
        </div>
        </div>
    );
}

export default Experts;
