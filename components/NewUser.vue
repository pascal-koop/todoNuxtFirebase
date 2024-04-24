<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
import * as z from 'zod';

const emailErrorMessage = ref('');
const isSomethingWrongWithEmail = ref(false);
const form = ref({
  name: '',
  email: '',
  password: '',
});

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const newUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(15, { message: 'Name must be less than 15 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message:
      'Password must be at least 8 characters long, contain at least one uppercase letter, one number and one special character',
  }),
});

type formSchema = z.infer<typeof newUserSchema>;

const errors = ref<z.ZodFormattedError<formSchema> | null>(null);

watchEffect(() => {
  useAuthStore().userLoginObserver();
});

const submitNewUser = async (name: string, email: string, password: string) => {
  const validSchema = newUserSchema.safeParse(form.value);

  if (!validSchema.success) {
    errors.value = validSchema.error.format();
  } else {
    errors.value = null;
    const result = await useAuthStore().createNewUser(name, email, password);
    if (result) {
      isSomethingWrongWithEmail.value = true;
      emailErrorMessage.value = result;
    }
  }
};
</script>

<style></style>

<template>
  <div class="outer-form">
    <h1 class="form-title">Welcome!</h1>
    <p class="form-subtitle">Create a new account</p>
    <form @submit.prevent="submitNewUser(form.name, form.email, form.password)" class="inner-form">
      <label class="form-label" for="name">Select a Name</label>
      <input v-model="form.name" class="form-input" type="text" id="name" />
      <div v-if="errors?.name">
        <span v-for="error in errors?.name._errors">{{ error }}</span>
      </div>
      <label class="form-label" for="email">Email</label>
      <input v-model="form.email" class="form-input" type="email" id="email" autocomplete="autocomplete" />
      <div v-if="errors?.email">
        <span v-for="error in errors?.email._errors">{{ error }}</span>
      </div>
      <label class="form-label" for="password">Password</label>
      <input v-model="form.password" class="form-input" type="password" id="password" autocomplete="autocomplete" />
      <div v-if="errors?.password">
        <span v-for="error in errors?.password._errors">{{ error }}</span>
      </div>
      <button class="submit-btn" type="submit">Sign up</button>
      <div v-if="isSomethingWrongWithEmail">
        <span>{{ emailErrorMessage }}</span>
      </div>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/login">Already have an account?</NuxtLink>
  </div>
</template>
