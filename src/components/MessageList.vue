<template>
  <div class="message-list">
    <div class="list-inner">
      <div v-if="store.loading" class="status-line loading">
        <span class="prompt">::</span> fetching messages…
      </div>
      <div v-else-if="store.error" class="status-line error">
        <span class="prompt">!!</span> {{ store.error }}
      </div>
      <MessageItem
        v-for="message in store.sortedMessages"
        :key="message.id"
        :message="message"
      />
      <div ref="bottomAnchor" class="bottom-anchor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { useMessageStore } from '@/stores/messageStore';
import MessageItem from './MessageItem.vue';

const store = useMessageStore();
const bottomAnchor = ref<HTMLElement | null>(null);

watch(
  () => store.messages.length,
  async () => {
    await nextTick();
    bottomAnchor.value?.scrollIntoView({ behavior: 'smooth' });
  },
);

onMounted(() => {
  store.fetchMessages();
});
</script>

<style scoped>
.message-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--term-bg);
  border: 1px solid var(--term-border);
  border-radius: var(--term-radius);
  margin: 12px 12px 0;
  scrollbar-width: thin;
  scrollbar-color: var(--term-accent-muted) var(--term-surface);
}

.message-list::-webkit-scrollbar {
  width: 8px;
}

.message-list::-webkit-scrollbar-track {
  background: var(--term-surface);
  border-left: 1px solid var(--term-border);
}

.message-list::-webkit-scrollbar-thumb {
  background: var(--term-accent-muted);
  border: 1px solid var(--term-border);
}

.list-inner {
  padding: 8px 0 16px;
}

.status-line {
  padding: 12px 14px;
  font-size: 12px;
  color: var(--term-fg-dim);
  border-bottom: 1px solid var(--term-border);
  font-variant-numeric: tabular-nums;
}

.status-line .prompt {
  display: inline-block;
  margin-right: 8px;
  color: var(--term-accent);
  font-weight: 700;
}

.status-line.loading {
  color: var(--term-fg-dim);
}

.status-line.error {
  color: var(--term-red);
}

.status-line.error .prompt {
  color: var(--term-red);
}

.bottom-anchor {
  height: 1px;
}
</style>
