<template>
<ion-page>
  <div class="flex items-center text-white min-h-screen bg-slate-800">
    <div class="w-full mx-10">
        
      <IconAppIcon />

      <h2 class="text-3xl font-bold mb-2">Create your account</h2>
      <p class="text-gray-600 mb-6 text-pink-500">Let's get started with your 30 days free trial</p>

      <a href="route('auth.google')" class="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-pink-700 mb-4 border-0">
        <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5 mr-2">
        Login with Google
      </a>

      <div class="text-center mb-4 text-pink-500">or</div>

      <form @submit.prevent="submit">
            <div>
                <ion-input
                    aria-label="Email"
                    helper-text="Should be a valid "
                    label="Email"
                    label-placement="floating" 
                >
                </ion-input>
            </div>

            <div class="mt-4">
                <ion-input
                    type="Password"
                    aria-label="password"
                    label="Password"
                    label-placement="floating" 
                    helper-text="Should Contain Alphanumeric"
                    :counter="true"
                    :maxlength="50"
                >
                <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                
                </ion-input>
            </div>

            <div class="block mt-4 flex justify-between">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-white">Remember me</span>
                </label>

                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-pink-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Forgot your password?
                </Link>
            </div>
         

            <div class="flex items-center justify-end mt-4">
                <ButtonPrimary class="w-full text-center" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </ButtonPrimary>
            </div>
        </form>

          <p class="mt-4 text-center text-sm text-pink-500">
          Already have an account? 
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </a>
        </p>
      </div>
    </div>
</ion-page>
</template>
<script setup>
 import { IonInput } from '@ionic/vue'

const form = reactive({
    email: '',
    password: '',
    remember: false,
    errors:{
        email: '',
        password: '',
        remember: false,
    }
});
</script>