import { TUserWithChat } from '@/types/chat'
import React from 'react'
import User from './User';
import Link from 'next/link';

interface ChatProps {
  users: TUserWithChat[];
  currentUser: TUserWithChat;
  setLayout: (layout: boolean) => void;
  setReceiver: (receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  }) => void;
}

const Contact = ({
  users,
  currentUser,
  setLayout,
  setReceiver,
}:ChatProps) => {
  const filterMessages = (userId:string,userName:string|null,userImage:string|null)=>{
    setReceiver({
      receiverId:userId,
      receiverName:userName || '',
      receiverImage:userImage || ''
    })
  }
  return (
    <div className='w-full overflow-auto h-[calc(100vh_-_56px)] border-[1px]'>
      <h1 className='m-[0.95rem] text-2xl font-semibold'>chat</h1>
      <hr />
      <div className='flex flex-col'>
        {
          users.length > 0 && users.filter((user)=>user.id !== currentUser.id).map((user)=>{
            return(
              <Link href={'/chat'} key={user.id} onClick={()=>{
                filterMessages(user.id,user.username,user.image)
                setLayout(false)
                
              }}>
                <User user={user} currentUserId={currentUser.id}/>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contact