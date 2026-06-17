<script setup lang="ts">
import { ref, watch } from 'vue'
import { marked } from 'marked'

const props = defineProps<{ file: string }>()
const html = ref('')

async function load(file: string) {
  const base = import.meta.env.BASE_URL
  const res = await fetch(`${base}rules/${file}`)
  if (!res.ok) { html.value = '<p>Файл не найден.</p>'; return }
  const text = await res.text()
  html.value = await marked.parse(text)
}

watch(() => props.file, load, { immediate: true })
</script>

<template>
  <article v-html="html" />
</template>
