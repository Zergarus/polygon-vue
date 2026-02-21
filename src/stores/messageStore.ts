import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Message, User } from '@/types';

export const useMessageStore = defineStore('messages', () => {
  // Состояние (state)
  const messages = ref<Message[]>([]);
  const currentUser = ref<User>({
    id: '1',
    name: 'Я',
    avatar: 'https://...'
  });
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Геттеры (computed)
  const sortedMessages = computed(() => 
    [...messages.value].sort((a, b) => 
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    )
  );

  // Действия (actions)
  async function fetchMessages() {
    loading.value = true;
    error.value = null;
    
    try {
      // TODO: Заменить на реальный API вызов
      // const response = await api.getMessages();
      // messages.value = response.data;
      
      // Пока фейковые данные
      await new Promise(resolve => setTimeout(resolve, 500)); // Имитация загрузки
      messages.value = [
        {
          id: '1',
          content: 'Привет! Это тестовое сообщение',
          authorId: '2',
          authorName: 'Система',
          timestamp: new Date(),
        },
        {
          id: '2',
          content: 'Pinia работает!',
          authorId: '1',
          authorName: 'Я',
          timestamp: new Date(),
        },
      ];
    } catch (err) {
      error.value = 'Не удалось загрузить сообщения';
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  async function sendMessage(content: string) {
    if (!content.trim()) return;

    // Оптимистичное обновление (сразу показываем сообщение)
    const tempMessage: Message = {
      id: Date.now().toString(),
      content,
      authorId: currentUser.value.id,
      authorName: currentUser.value.name,
      timestamp: new Date(),
    };
    
    messages.value.push(tempMessage);

    try {
      // TODO: Отправить на бекенд
      // await api.sendMessage(content);
      
      console.log('Сообщение отправлено:', content);
    } catch (err) {
      // В случае ошибки - удаляем сообщение
      messages.value = messages.value.filter(m => m.id !== tempMessage.id);
      error.value = 'Не удалось отправить сообщение';
      console.error(err);
    }
  }

  return {
    // State
    messages,
    currentUser,
    loading,
    error,
    // Getters
    sortedMessages,
    // Actions
    fetchMessages,
    sendMessage
  };
});
