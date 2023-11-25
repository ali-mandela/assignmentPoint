import Link from "next/link"
import '@/app/components/component/component.css'

const OrderButton = ({title,link}) => {
  return (
    <Link href={link} className='order-now-button'>{title}</Link>
  )
}
export const HireMeButton = ({title,link}) => {
    return (
      <Link href={link} className='hire-me-button'>{title}</Link>
    )
  }
   
export default OrderButton