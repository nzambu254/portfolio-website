// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/projects', name: 'Projects', component: Projects },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
