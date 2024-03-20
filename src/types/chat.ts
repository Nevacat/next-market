import { Message, User } from "@prisma/client";

export type TUserWithChat = User & {
  conversations: TConverstaion[];
};

export type TConverstaion = {
  id: string;
  messages: Message[];
  user: User[];
};
