<template>
  <div class="q-pt-xl flex items-center justify-center" style="">
    <LoginForm v-if="formState == 'login'" />
    <SignupForm v-if="formState == 'signup'" />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/Forms/LoginForm.vue';
import SignupForm from '../components/Forms/SignupForm.vue';
import { formState } from '../stores/login-store';
</script>
