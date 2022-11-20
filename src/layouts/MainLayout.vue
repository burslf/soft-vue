<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary text-dark" style="height: 100px">
      <q-toolbar style="height: 100%">
        <q-toolbar-title>
          <q-avatar style="height: 100%; width: 100px">
            <img src="/assets/logo.png" style="object-fit: contain" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-accent text-primary"
    >
      <MainSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainSidebar from 'src/components/Sidebar/MainSidebar.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
