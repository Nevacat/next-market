import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import { TConverstaion, TUserWithChat } from "@/types/chat";
import Message from "./Message";
import Input from "./Input";

interface ChatProps {
  currentUser: TUserWithChat;
  receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  };
  setLayout: (layout: boolean) => void;
}

const Chat = ({ currentUser, receiver, setLayout }: ChatProps) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  });

  const conversation = currentUser?.conversations.find(
    (conversation:TConverstaion) => conversation.user.find((user) => user.id === receiver.receiverId)
  );


  if (!receiver.receiverName || !currentUser) {
    return <div className="w-full h-full flex items-center justify-center text-2xl">
      대화 상대를 선택해주세요
    </div>;
  }
  return (
    <div className="w-full">
      <div>
        <ChatHeader
          setLayout={setLayout}
          receiverImage={receiver.receiverImage}
          receiverName={receiver.receiverName}
          lastMessageTime={
            conversation?.messages
              .filter((message) => message.receiverId === currentUser.id)
              .slice(-1)[0]?.createdAt
          }
        />
      </div>
      <div className="flex flex-col gap-8 p-4 overflow-auto h-[calc(100vh_-_60px_-_70px_-_80px)] bg-blue-50">
        {conversation &&
          conversation.messages.map((message) => {
            return (
              <Message
                key={message.id}
                receiverImage={receiver.receiverImage}
                receiverName={receiver.receiverName}
                senderImage={currentUser.image}
                isSender={message.senderId === currentUser.id}
                time={message.createdAt}
                messageImage={message.image}
                messageText={message.text}
              />
            );
          })}
        <div ref={messageEndRef} />
      </div>
      <div>
        <Input
          receiverId={receiver.receiverId}
          currentUserId={currentUser.id}
        />
      </div>
    </div>
  );
};

export default Chat;
