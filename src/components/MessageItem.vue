<template>
  <article class="message" :class="{ 'my-message': isMine }">
    <div class="row">
      <span class="gutter" aria-hidden="true">{{ gutter }}</span>
      <div class="body">
        <div class="meta">
          <span class="author">{{ message.authorName }}</span>
          <span class="time">{{ formattedTime }}</span>
        </div>
        <div class="text">{{ message.content }}</div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Message } from '@/types';
import { useMessageStore } from '@/stores/messageStore';

const props = defineProps<{ message: Message }>();
const store = useMessageStore();

const isMine = computed(() => props.message.authorId === store.currentUser.id);

const gutter = computed(() => (isMine.value ? '>' : '#'));

const formattedTime = computed(() => {
  const date = new Date(props.message.timestamp);
  const h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, '0');
  return `${h.toString().padStart(2, '0')}:${m}`;
});
</script>

<style scoped>
.message {
  border-bottom: 1px solid var(--term-border);
  font-family: var(--term-font);
  font-size: 12px;
}

.message:last-of-type {
  border-bottom: none;
}

.row {
  display: flex;
  gap: 0;
  padding: 8px 12px 10px 0;
  align-items: flex-start;
}

.gutter {
  flex: 0 0 28px;
  text-align: right;
  padding-right: 10px;
  color: var(--term-accent-muted);
  font-weight: 700;
  user-select: none;
}

.my-message .gutter {
  color: var(--term-accent);
}

.body {
  flex: 1;
  min-width: 0;
}

.meta {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}

.author {
  font-weight: 600;
  color: var(--term-green);
  letter-spacing: 0.02em;
}

.my-message .author {
  color: var(--term-accent);
}

.time {
  font-size: 11px;
  color: var(--term-fg-dim);
  font-variant-numeric: tabular-nums;
}

.text {
  color: var(--term-fg);
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.5;
}

.my-message {
  background: rgba(0, 200, 255, 0.06);
  box-shadow: inset 3px 0 0 var(--term-accent-muted);
}
</style>
