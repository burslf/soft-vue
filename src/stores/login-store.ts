import { Login, Signup } from 'src/types';
import { ref } from 'vue';

const loginState = ref<Login>({
  email: '',
  password: '',
});

const signupState = ref<Signup>({
  email: '',
  password: '',
  phoneNumber: '',
  acceptTerms: false,
});

export const formState = ref('login');

export const useLogin = () => {
  const setLoginState = (l: Login) => {
    loginState.value = l;
  };

  return { loginState, setLoginState };
};

export const useSignup = () => {
  const setSignupState = (l: Signup) => {
    signupState.value = l;
  };

  return { signupState, setSignupState };
};
