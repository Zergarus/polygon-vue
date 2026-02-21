<template>
  <div class="message-list" ref="listContainer">
    <div v-if="store.loading" class="loading">Загрузка...</div>
    <div v-else-if="store.error" class="error">{{ store.error }}</div>
    <MessageItem 
      v-for="message in store.sortedMessages" 
      :key="message.id"
      :message="message"
    />
    <div ref="bottomAnchor"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { useMessageStore } from '@/stores/messageStore';
import MessageItem from './MessageItem.vue';

const store = useMessageStore();
const listContainer = ref<HTMLElement | null>(null);
const bottomAnchor = ref<HTMLElement | null>(null);

// Скролл вниз при новых сообщениях
watch(() => store.messages.length, async () => {
  await nextTick();
  bottomAnchor.value?.scrollIntoView({ behavior: 'smooth' });
});

onMounted(() => {
  store.fetchMessages();
});
</script>

<style scoped>
.message-list {
  height: calc(100vh - 140px);
  overflow-y: auto;
  padding: 16px;
  background: #f9f9f9;
}

.loading, .error {
  text-align: center;
  padding: 20px;
}

.error {
  color: red;
}
</style>
