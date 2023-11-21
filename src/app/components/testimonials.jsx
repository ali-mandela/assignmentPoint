// import '@styles/style.scss'
import '@/app/styles/style.scss'
import Image from 'next/image';

const testimonialsDetails = [
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }, {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
        username: "username",
        date: '12-06-2023',
        subjectname: "Techonology",
        review: "I want to say thank you so much for doing such a good job on my paper. I receive" +
                "d a 100% on my paper.", 
    }
];

import React from 'react';

const Testimonials = () => {
    return (
        <>
            <div className="slider">
                <div className="slide-track">
                    {
                        testimonialsDetails.map((item, index) => (
                            <div className="slide" key={index}>
                                <div className='slide-main'>
                                    <div className='slide-text'>
                                        <h2>{item.username}</h2>
                                        <h5>{item.subjectname}</h5>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className='slide-img'>
                                         <Image src={item.src} width={50} height={50} alt={item.username} />
                                    </div>
                                </div>
                                <div className='slide-body'>
                                <p>{item.review}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Testimonials;
