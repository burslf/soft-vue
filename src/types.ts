export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  email: string;
  password: string;
  phoneNumber: string;
  acceptTerms: boolean;
}
