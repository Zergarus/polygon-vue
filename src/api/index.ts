import axios from 'axios'; // npm install axios

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Твой бекенд
  timeout: 10000,
});

export const messageApi = {
  getMessages: (channelId?: string) => 
    api.get('/messages', { params: { channelId } }),
  
  sendMessage: (content: string, channelId?: string) =>
    api.post('/messages', { content, channelId }),
};

// Обнови messageStore.ts, заменив фейковые вызовы на:
// const response = await messageApi.getMessages();
// messages.value = response.data;
