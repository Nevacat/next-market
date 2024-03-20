import React from 'react'
import ChatClient from './ChatClient'
import getCurrentUser from '../actions/getCurrentUser'

interface Params {
  userId?: string
}

const ChatPage = async ({params}:{params:Params}) => {
  const currentUser = await getCurrentUser()
  return (
    <div>
      <ChatClient currentUser={currentUser}/>
    </div>
  )
}

export default ChatPage