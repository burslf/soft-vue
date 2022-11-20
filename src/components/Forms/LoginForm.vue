<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
    style="max-width: 400px; width: 80%"
  >
    <q-input
      color="dark"
      filled
      v-model="loginState.email"
      label="Email *"
      lazy-rules
    />

    <q-input
      color="dark"
      filled
      type="password"
      v-model="loginState.password"
      label="Password *"
      lazy-rules
      :rules="[
        (val) =>
          (val.length > 6 && val.length < 100) ||
          `Your password is more than ${val.length} characters`,
      ]"
    />

    <div>
      <q-btn label="Login" type="submit" color="accent" />
      <q-btn
        label="New ? Signup"
        type="reset"
        color="accent"
        flat
        class="q-ml-sm"
        @click="formState = 'signup'"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useLogin, formState } from '../../stores/login-store';

const { loginState } = useLogin();

const onSubmit = () => {
  console.log('hey');
};

const onReset = () => {
  console.log();
};
</script>
