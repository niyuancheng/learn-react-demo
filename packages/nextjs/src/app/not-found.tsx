import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  console.log(headersList)
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2>Not Found: {'Next.js'}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog" className='underline hover:text-orange-600 transition-all duration-700'>all posts</Link>
      </p>
    </div>
  )
}