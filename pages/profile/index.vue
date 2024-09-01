<template>
    <ion-page class="bg-gray-900 text-white">
      <ion-content>
        <div class="flex flex-col justify-center h-full px-5">
          
          <div class="flex flex-col items-center mb-6">
            <ion-avatar class="w-24 h-24 mb-2">
              <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Profile picture" />
            </ion-avatar>
            <h2 class="text-2xl font-bold">Harvy Gascon</h2>
            <p class="text-gray-400">Developer</p>
          </div>
          
          <div class="flex justify-between mb-6">
            <div class="text-center">
              <p class="text-2xl font-bold">28</p>
              <p class="text-sm text-gray-400">Posts</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">78</p>
              <p class="text-sm text-gray-400">votes</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">16</p>
              <p class="text-sm text-gray-400">Following</p>
            </div>
          </div>
          
          <ion-item lines="full" detail class="bg-gray-800 rounded-lg mb-4">
            <ion-label>Account Setting</ion-label>
          </ion-item>
          
          <div class="bg-gray-800 rounded-lg p-4">
            <h4 class="font-semibold mb-2">Get Pro</h4>
            <div class="flex justify-between items-center">
              <p class="text-gray-400">Buy Pro Account $8/M</p>
              <ion-button shape="round" color="danger">Buy Now</ion-button>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonButton, IonIcon, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/vue';
  import { ArrowDownLeftIcon,ArrowLeftIcon, ArrowRightIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/vue/24/outline';
  
  // You can add any necessary component logic here
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>