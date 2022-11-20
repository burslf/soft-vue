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
      v-model="signupState.email"
      label="Your email *"
      lazy-rules
    />

    <q-input
      color="dark"
      filled
      v-model="signupState.phoneNumber"
      label="Your number *"
      lazy-rules
    />

    <q-input
      color="dark"
      filled
      type="password"
      v-model="signupState.password"
      label="Password *"
      lazy-rules
      :rules="[
        (val) =>
          (val.length > 6 && val.length < 100) ||
          `Your password should more than ${val.length} characters`,
      ]"
    />

    <q-toggle
      color="secondary"
      v-model="signupState.acceptTerms"
      label="I accept the license and terms"
    />

    <div>
      <q-btn label="Singup" type="submit" color="accent" />
      <q-btn
        label="Have account ? Login"
        type="reset"
        color="accent"
        flat
        class="q-ml-sm"
        @click="formState = 'login'"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useSignup, formState } from '../../stores/login-store';

const { signupState } = useSignup();

const onSubmit = () => {
  console.log('hey');
};

const onReset = () => {
  console.log();
};
</script>
