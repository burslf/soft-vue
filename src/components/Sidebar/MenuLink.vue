<template>
  <router-link :to="link" style="text-decoration: none; color: inherit">
    <q-item clickable tag="a" target="_blank" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label class="text-primary" caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
