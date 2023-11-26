'use client'
 
// import { useRouter ,usePathname, useSearchParams} from 'next/navigation' 
 
export default function Page({params}) {
//   const router = useRouter()

// //   console.log(router);
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   console.log(pathname);
//   console.log(searchParams);
 
  return (<>
  <h1>Hello    {params.pageName}
    </h1>
    
  </>

  )
}