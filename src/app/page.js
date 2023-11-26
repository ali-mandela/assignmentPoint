import Stats from "./components/component/Stats"
import WhyUs from "./components/component/whyus"
import Form from "./components/forms/form"
import Experts from "./components/Experts"
import Testimonial from "./components/component/Testimonial"
import HowItWorks from "./components/component/HowItWorks"

const page = () => {
    return ( <> 
    {/* <Form /> */}
    <WhyUs />  
    <HowItWorks/>
    <Testimonial/>
    <Stats/> 
    <Experts /> 
    </>
  )
}

export default page