import Stats from "./components/component/Stats"
import WhyUs from "./components/component/whyus"
import Form from "./components/forms/form"
import Testimonials from "./components/Experts"

const page = () => {
    return ( <> 
    <Form /> 
    <WhyUs /> 
    <Stats/> 
    <Testimonials /> 
    </>
  )
}

export default page