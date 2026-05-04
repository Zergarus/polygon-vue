export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Message {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  timestamp: Date;
  channelId?: string; // Пригодится потом для разных каналов
}
