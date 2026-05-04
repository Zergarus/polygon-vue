<template>
  <div class="message-input">
    <label class="field">
      <span class="label">stdin</span>
      <textarea
        v-model="messageText"
        rows="2"
        spellcheck="false"
        autocomplete="off"
        autocapitalize="off"
        @keydown.enter.prevent="handleSubmit"
        placeholder="// message"
        :disabled="store.loading"
      />
    </label>
    <button type="button" class="send" @click="handleSubmit" :disabled="!messageText.trim()">
      <span class="send-label">send</span>
      <span class="send-hint">↵</span>
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
  align-items: stretch;
  gap: 0;
  padding: 10px 12px 12px;
  font-family: var(--term-font);
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--term-fg-dim);
}

textarea {
  width: 100%;
  min-height: 44px;
  max-height: 120px;
  padding: 8px 10px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.45;
  color: var(--term-fg);
  background: var(--term-bg);
  border: 1px solid var(--term-border);
  border-radius: var(--term-radius);
  resize: vertical;
  outline: none;
  transition: border-color 0.12s ease, box-shadow 0.12s ease;
}

textarea::placeholder {
  color: var(--term-fg-dim);
  opacity: 0.7;
}

textarea:focus {
  border-color: var(--term-accent);
  box-shadow: 0 0 0 1px var(--term-accent-muted);
}

textarea:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.send {
  flex: 0 0 auto;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 72px;
  margin-left: 10px;
  margin-bottom: 1px;
  padding: 8px 10px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  color: var(--term-bg);
  background: var(--term-accent);
  border: 1px solid var(--term-accent);
  border-radius: var(--term-radius);
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease, border-color 0.12s ease;
}

.send:hover:not(:disabled) {
  background: var(--term-fg);
  color: var(--term-bg);
  border-color: var(--term-fg);
}

.send:disabled {
  background: var(--term-surface-raised);
  color: var(--term-fg-dim);
  border-color: var(--term-border);
  cursor: not-allowed;
}

.send-label {
  line-height: 1.2;
}

.send-hint {
  margin-top: 2px;
  font-size: 10px;
  font-weight: 500;
  opacity: 0.85;
}
</style>
