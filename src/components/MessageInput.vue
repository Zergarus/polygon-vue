<template>
  <div class="message-input">
    <textarea
      v-model="messageText"
      @keydown.enter.prevent="handleSubmit"
      placeholder="Введите сообщение..."
      :disabled="store.loading"
    />
    <button @click="handleSubmit" :disabled="!messageText.trim()">
      Отправить
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMessageStore } from '@/stores/messageStore';

const store = useMessageStore();
const messageText = ref('');

async function handleSubmit() {
  if (!messageText.value.trim()) return;
  
  await store.sendMessage(messageText.value);
  messageText.value = '';
}
</script>

<style scoped>
.message-input {
  display: flex;
  padding: 16px;
  gap: 12px;
  background: white;
  border-top: 1px solid #ddd;
}

textarea {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  min-height: 40px;
}

button {
  padding: 8px 16px;
  background: #7289da;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
