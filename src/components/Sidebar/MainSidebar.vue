<template>
  <q-list>
    <q-item-label class="text-primary" header> Essential Links </q-item-label>

    <MenuLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script setup lang="ts">
import MenuLink from 'src/components/Sidebar/MenuLink.vue';

const essentialLinks = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    link: '/',
  },
  {
    title: 'About',
    caption: 'about soft',
    icon: 'help',
    link: '/about',
  },
  {
    title: 'Login',
    caption: 'start your experience',
    icon: 'login',
    link: '/login',
  },
];
</script>
