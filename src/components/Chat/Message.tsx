import React from "react";
import Avatar from "../Avatar";
import { formatDate } from "@/helper/formatDate";
import { cn } from "@/lib/util";
import Image from "next/image";

interface MessageProps {
  isSender: boolean;
  messageText: string | null;
  messageImage: string | null;
  receiverName: string;
  receiverImage: string;
  senderImage: string | null;
  time: Date;
}



const Message = ({
  isSender,
  messageText,
  messageImage,
  receiverName,
  receiverImage,
  senderImage,
  time,
}: MessageProps) => {
  return (
    <div
      className={`grid w-full grid-cols-[40px_1fr] gap-3 mx-auto`}
      style={{ direction: `${isSender ? "rtl" : "ltr"}` }}
    >
      <div>
        <Avatar src={senderImage && isSender ? senderImage : receiverImage} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <span className="font-medium">{isSender ? "YOU" : receiverName}</span>
          <span className="text-xs text-gray-500 opacity-80">{formatDate(time)}</span>
        </div>
        {messageText && (
          <div className={cn("p-2 break-all text-white rounded-lg",isSender?"bg-black rounded-tr-none":"bg-gray-400 rounded-tl-none")}>
            <p>{messageText}</p>
          </div>
        )}
        {
          messageImage && (
            <div className="overflow-hidden rounded-md mx-[0.6rem] max-w-[80%]">
              <Image src={messageImage} height={300} width={300} alt="image"/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Message;
