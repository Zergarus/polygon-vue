<template>
  <router-view />
</template>

<script setup lang="ts">
</script>

<style>
:root {
  --term-bg: #08080a;
  --term-bg-grid: #0e0e12;
  --term-surface: #0f1014;
  --term-surface-raised: #14151c;
  --term-border: #2a2d3a;
  --term-border-bright: #3f4455;
  --term-accent: #00c8ff;
  --term-accent-muted: #007799;
  --term-fg: #e8e8ed;
  --term-fg-dim: #8b8b9a;
  --term-green: #3ecf8e;
  --term-red: #ff6b6b;
  --term-header-bg: #0a1620;
  --term-font: 'JetBrains Mono', 'JetBrainsMono Nerd Font', 'Symbols Nerd Font Mono',
    ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace;
  --term-radius: 0;
  --term-pixel-step: 1px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  background: var(--term-bg);
}

body {
  min-height: 100%;
  font-family: var(--term-font);
  font-size: 13px;
  line-height: 1.45;
  font-feature-settings: 'calt' 1, 'liga' 1, 'tnum' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  color: var(--term-fg);
  background-color: var(--term-bg);
  background-image:
    linear-gradient(var(--term-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--term-border) 1px, transparent 1px);
  background-size: 8px 8px;
  background-position: -1px -1px;
}

#app {
  min-height: 100vh;
}

::selection {
  background: var(--term-accent-muted);
  color: var(--term-bg);
}
</style>
