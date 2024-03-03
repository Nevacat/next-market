import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/util'
import { usePathname } from 'next/navigation'
const LinkData = [
  {
    name: 'admin',
    path: '/admin'
  },
  {
    name: 'user',
    path: '/user'
  },
  {
    name: 'chat',
    path: '/chat'
  }
]

interface ILinkDataType {
  name: string,
  path: string
}

interface INavItemProps{
  mobile?: boolean
}

const NavItem = ({mobile}:INavItemProps) => {

  const pathname = usePathname()

  return (
    <ul className={cn("text-md flex justify-center gap-4 w-full items-center",mobile && "flex-col h-full pb-10")}>
      {
        LinkData.map((data:ILinkDataType,index:number)=>{
          return(
            <li key={index} className={cn("py-1 text-center cursor-pointer",pathname === data.path&&"border-b-4")}>
              <Link href={data.path} >
                {data.name}
              </Link>
            </li>
          )
        })
      }
      <li className={cn("py-1 text-center cursor-pointer",pathname === '/signin'&&"border-b-4")}>
        <Link href="/signin">
          signIn
        </Link>  
      </li>
    </ul>
  )
}

export default NavItem