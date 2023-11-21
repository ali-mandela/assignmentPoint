import Stats from './components/Stats'
import Form from './components/form'
import Testimonials from './components/testimonials'
import WhyUs from './components/whyus'

const page = () => {
  return (
   <>  
   <Form/>
    <WhyUs/>  
    <Stats/>
    <Testimonials/>
   </>
  )
}

export default page