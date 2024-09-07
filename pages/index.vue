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

      <div class="py-2 mb-4 flex flex-col items-center justify-center h-100 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400" role="alert">
        <p v-for="error in form.errors">
            {{ error[0] }}
        </p>
     </div>

      <form @submit.prevent="submit">
            <div>
                <ion-input
                    aria-label="Email"
                    helper-text=" "
                    label="Email"
                    fill="solid"
                    v-model="form.email"
                    label-placement="floating" 
                >
                </ion-input>
            </div>

            <div class="mt-4">
                <ion-input
                    type="password"
                    aria-label="password"
                    label="Password"
                    label-placement="floating" 
                    helper-text="Alphanumeric only"
                     v-model="form.password"
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
                    <svg v-if="form.processing" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    
                    <span v-if="form.processing">Logging in....</span>
                    <span v-else>Log in</span>
                </ButtonPrimary>
            </div>
        </form>

          <p class="mt-4 text-center text-sm text-pink-500">
          Already have an account? 
          <button type="submit" class="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </button>
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
    errors : []
});




// Use the router for navigation after successful login
const router = useRouter()

// Function to handle form submission
const submit = async () => {
    form.processing = true
    const config = useRuntimeConfig()
    const apiEndpoint = config.public.apiEndpoint

  
        // Use the injected AuthService to call the login function
    const { data, error } = await useAsyncData('login', () => $fetch(`${apiEndpoint}/auth/login`, {
        method: 'POST',
        body: {
            email: form.email,
            password: form.password
        }
    }))

    form.errors = error.value?.data?.errors

    if(!Boolean(form.errors))
    {
        storeToken(data.value?.token)

        router.push({name : 'forum'})
    }
   
    form.processing = false
}

const storeToken = (token) => {
  document.cookie = `auth_token=${token}; HttpOnly; Secure; SameSite=Strict`
}
</script>