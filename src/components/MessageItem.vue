<template>
  <div class="message" :class="{ 'my-message': isMine }">
    <img v-if="message.authorAvatar" :src="message.authorAvatar" class="avatar" />
    <div class="content">
      <div class="header">
        <span class="author">{{ message.authorName }}</span>
        <span class="time">{{ formattedTime }}</span>
      </div>
      <div class="text">{{ message.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Message } from '@/types';
import { useMessageStore } from '@/stores/messageStore';

const props = defineProps<{ message: Message }>();
const store = useMessageStore();

const isMine = computed(() => props.message.authorId === store.currentUser.id);

const formattedTime = computed(() => {
  const date = new Date(props.message.timestamp);
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
});
</script>

<style scoped>
.message {
  display: flex;
  padding: 8px 16px;
  gap: 12px;
}

.my-message {
  background-color: #f0f0f0;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.header {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.author {
  font-weight: bold;
}

.time {
  color: #666;
  font-size: 0.85em;
}

.text {
  word-wrap: break-word;
}
</style>
