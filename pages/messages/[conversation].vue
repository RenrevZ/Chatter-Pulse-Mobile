<template>
   <ion-page class="bg-gray-900 text-white" mode="md">
    <ion-header class="bg-gray-900" mode="md" color="primary">
      <ion-toolbar class="bg-gray-800">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <div class="flex">
          
            <ChevronLeftIcon class="h-8 w-8 px-1"/>
            <ion-title class="font-semibold">Zendral Clinic</ion-title>
        </div>
       
        <ion-buttons slot="end">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">
      <div class="flex flex-col items-center mb-6">
        <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold">Zendral Dental</h2>
        <div class="flex items-center text-gray-400 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          1.2 km away
          <span class="mx-2">•</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-yellow-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          4.8
        </div>
        <p class="text-gray-400 text-sm">Usual reply time: ± 9 minutes</p>
      </div>
      
      <div class="bg-gray-800 rounded-lg p-4 mb-4">
        <p class="text-sm">Hi Brown 👋 You can consult your dental problems here</p>
      </div>
      
      <div class="text-center text-gray-500 text-sm mb-4">Today</div>
      
      <div class="flex mb-4">
        <ion-avatar class="w-8 h-8 mr-2">
          <img src="https://picsum.photos/80/80?random=1" alt="Angela avatar" />
        </ion-avatar>
        <div class="bg-gray-800 rounded-lg p-3 max-w-[80%]">
          <p class="text-sm">Good morning. I'm Angela a dental nurse at Zendral Dental, can I help you?</p>
          <span class="text-xs text-gray-500 mt-1">08:30 AM</span>
        </div>
      </div>
    </ion-content>
    
    <ion-footer class="bg-gray-800">
      <ion-toolbar>
        <div class="flex items-center p-2">
          <button class="text-blue-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>

          <div class="relative w-full">
             <PhotoIcon class="absolute top-1 right-5 w-7 h-8 text-gray-300" />
             <input type="text" 
                 placeholder="Write a message..." 
                 class="flex-grow bg-gray-700 text-white w-full rounded-full focus:outline-none px-4 py-2 mr-2" />
          </div>

          <PaperAirplaneIcon class="text-blue-500 h-10 w-10 mx-3" />
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>
<script setup>
import { 
  IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, 
  IonTitle, IonContent, IonFooter, IonAvatar, IonButton
} from '@ionic/vue'
import { ChevronLeftIcon,PhotoIcon,PaperAirplaneIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'showLayout'
})
</script>