<template>
  <div class="chat">
    <header class="chat-header">
      <span class="title-bar-accent" aria-hidden="true" />
      <div class="title-bar">
        <span class="win-id">[I]</span>
        <h1 class="title"># general</h1>
        <span class="title-meta">polygon-vue</span>
      </div>
    </header>
    <main class="chat-body">
      <MessageList />
    </main>
    <footer class="chat-footer">
      <MessageInput />
    </footer>
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
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  border-left: 1px solid var(--term-border);
  border-right: 1px solid var(--term-border);
  background: var(--term-surface);
  box-shadow: 0 0 0 1px var(--term-bg);
}

.chat-header {
  position: relative;
  flex-shrink: 0;
  border-bottom: 1px solid var(--term-border);
  background: var(--term-header-bg);
}

.title-bar-accent {
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--term-accent) 0%,
    var(--term-accent-muted) 45%,
    var(--term-border-bright) 100%
  );
}

.title-bar {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 10px 14px;
  font-family: var(--term-font);
}

.win-id {
  font-size: 11px;
  font-weight: 600;
  color: var(--term-accent);
  letter-spacing: 0.04em;
}

.title {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: var(--term-fg);
}

.title-meta {
  font-size: 11px;
  color: var(--term-fg-dim);
  letter-spacing: 0.02em;
}

.chat-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.chat-footer {
  flex-shrink: 0;
  border-top: 1px solid var(--term-border);
  background: var(--term-surface-raised);
}
</style>
