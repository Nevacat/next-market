import React from 'react'
import Avatar from '../Avatar'
import { TConverstaion, TUserWithChat } from '@/types/chat'
import { cn } from '@/lib/util';

interface UserProps {
  user: TUserWithChat;
  currentUserId : string;
}

const User = ({
  user,
  currentUserId
}:UserProps) => {

  const messageWithCurrentUser = user.conversations.find((conversation:TConverstaion)=>conversation.user.find((user)=>user.id === currentUserId))
  const latestMessage = messageWithCurrentUser?.messages.slice(-1)[0]
  return (
    <div className={cn('grid grid-cols-[40px_1fr_50px] grid-rows-[40px] gap-3 py-3 px-4 border-b-[1px] hover:cursor-pointer hover:bg-black hover:text-white')}>
      <div>
        <Avatar src={user.image}/>
      </div>
      <div>
        <h3>{user.username}</h3>
        {
          latestMessage && (
            latestMessage.image ? (
              <p className='text-xs font-medium text-neutral-500'>이미지</p>
            ) : (
              <p className='text-xs font-medium text-neutral-500 overflow-hidden break-words whitespace-pre-wrap'>{latestMessage.text}</p>
            )
          )
        }
      </div>
      <div>
        {
          latestMessage && (
            <p className='text-xs font-medium text-neutral-500'>10일 전</p>
          )
        }
      </div>
    </div>
  )
}

export default User