<script setup lang="ts">
import { sections } from '../data/sections'
</script>

<template>
  <nav>
    <h2>D10</h2>
    <ul>
      <li v-for="s in sections" :key="s.route">
        <RouterLink :to="s.route">{{ s.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
