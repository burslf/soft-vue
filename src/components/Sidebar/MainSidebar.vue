<template>
  <q-list class=""
    style="background-image: url('/assets/sidebar.png'); background-size: 300px; background-repeat: no-repeat; height: 100%; padding-top: 230px;">
    <q-item-label class="text-primary" header> </q-item-label>

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
