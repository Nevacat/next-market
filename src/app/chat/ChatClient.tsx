'use client'
import Chat from '@/components/Chat/Chat'
import Contact from '@/components/Chat/Contacts'
import Error from '@/components/Error'
import Loader from '@/components/Loader'
import { cn } from '@/lib/util'
import { TUserWithChat } from '@/types/chat'
import { User } from '@prisma/client'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'

interface ChatClientProps {
  currentUser?: User | null
}

const ChatClient = ({
  currentUser,

}:ChatClientProps) => {
  const [receiver,setReceiver] = useState({
    receiverId:"",
    receiverName:"",
    receiverImage:""
  })
  const [layout,setLayout] = useState(true)
  const fetcher = async (url:string) => await axios.get(url).then(res=>res.data)
  const {data:users,error,isLoading} = useSWR('/api/chat',fetcher)
  const currentUserWithMessages = users?.find((user:TUserWithChat)=>user.id === currentUser?.id)
  const params = useSearchParams()
  const id = params?.get('id')
  useEffect(()=>{
    if(id){
      const user = users?.find((user:TUserWithChat)=>user.id === id)
      if(user){
        setReceiver({
          receiverId:user.id,
          receiverName:user.username,
          receiverImage:user.image
        })
      }
    }
  }
  ,[id,users])
  if(isLoading) return <Loader/>
  if(error) return <Error/>
  return (
    <main>
      <div className='grid grid-cols-[1fr] md:grid-cols-[300px_1fr]'>
        <section className={cn("md:flex",!layout&&"hidden")}>
          <Contact setLayout={setLayout} users={users} setReceiver={setReceiver} currentUser={currentUserWithMessages} />
        </section>
        <section className={cn("md:flex",layout&&"hidden")}>
          <Chat currentUser={currentUserWithMessages} receiver={receiver} setLayout={setLayout}/>
        </section>
      </div>
    </main>
  )
}

export default ChatClient