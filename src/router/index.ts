import { createRouter, createWebHashHistory } from 'vue-router'
import { sections } from '../data/sections'
import RulePage from '../views/RulePage.vue'

const routes = [
  { path: '/', redirect: sections[0].route },
  ...sections.map(s => ({
    path: s.route,
    component: RulePage,
    props: { file: s.file },
  })),
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
