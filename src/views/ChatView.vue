<template>
  <div class="chat">
    <header class="chat-header">
      <h2># Общий чат</h2>
    </header>
    <MessageList />
    <MessageInput />
  </div>
</template>

<script setup lang="ts">
import MessageList from '@/components/MessageList.vue';
import MessageInput from '@/components/MessageInput.vue';
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-header {
  padding: 16px;
  background: white;
  border-bottom: 1px solid #ddd;
}
</style>
