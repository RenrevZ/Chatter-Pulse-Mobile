<template>
    <ion-page class="bg-gray-900 text-white min-h-screen overflow-auto">
     <!-- Navigation -->
        <ion-header class="sticky top-0 bg-gray-900 text-center w-full">
            <div class="flex items-center justify-center">
                <svg class="animate-pulse relative top-1" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4566 6.75005C15.9683 6.75596 16.4047 7.09621 16.5001 7.56364L18.8747 19.2038L19.999 17.1682C20.1832 16.8347 20.5526 16.625 20.9559 16.625H31.1744C31.7684 16.625 32.25 17.0727 32.25 17.625C32.25 18.1773 31.7684 18.625 31.1744 18.625H21.6127L19.3581 22.7068C19.1483 23.0867 18.7021 23.3008 18.2475 23.2397C17.7928 23.1786 17.4301 22.8559 17.3445 22.4363L15.376 12.7868L13.1334 22.4607C13.0282 22.9146 12.6007 23.2414 12.1013 23.2498C11.6019 23.2582 11.162 22.9458 11.0393 22.4957L9.30552 16.1378L8.19223 18.0929C8.00581 18.4202 7.64002 18.625 7.2416 18.625H1.32563C0.731576 18.625 0.25 18.1773 0.25 17.625C0.25 17.0727 0.731576 16.625 1.32563 16.625H6.59398L8.71114 12.9071C8.9193 12.5415 9.34805 12.3328 9.78979 12.3821C10.2315 12.4313 10.5951 12.7283 10.7044 13.1292L11.9971 17.8695L14.3918 7.53929C14.4996 7.07421 14.9449 6.74414 15.4566 6.75005Z" fill="url(#paint0_linear_4_31)"></path>
                    <defs>
                    <linearGradient id="paint0_linear_4_31" x1="16.25" y1="6.74997" x2="16.25" y2="23.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F85A5A"></stop>
                    <stop offset="0.828125" stop-color="#7A5AF8"></stop>
                    </linearGradient>
                    </defs>
                </svg>

                <h1 class="text-2xl font-bold text-pink-500 px-3">
                    Chatter Pulse
                </h1>
            </div>
        </ion-header>
          <ion-header class="sticky top-0 bg-gray-900">
            <nav class="flex min-h-full justify-around p-4 border-b border-gray-700">
                <button class="border-b-2 border-indigo-300">
                    <div class="flex justify-center items-center">
                        <NewspaperIcon class="h-5 w-5 mx-1"/>
                        <p>Newest</p>
                    </div>
                </button>
                <button>
                    <div class="flex items-center">
                        <FireIcon class="h-5 w-5 mx-1 text-red-600"/>
                        <p>Popular</p>
                    </div>
                </button>
                <button>
                    <div class="flex items-center">
                        <UserPlusIcon class="h-5 w-5 mx-1"/>
                        <p>Following</p>
                    </div>
                </button>
            </nav>
            </ion-header>

            <ion-content>
                <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
                    <ion-refresher-content></ion-refresher-content>
                </ion-refresher>

                 <!-- Posts -->
                <div class="space-y-4 p-4">
                    <div v-for="post in posts" :key="post.id" class="bg-gray-800 p-4 rounded-lg">
                        <div class="flex items-center mb-2">
                        <img src="https://picsum.photos/80/80?random=10" 
                            class="rounded-full max-h-10 max-w-10 mr-3"
                            alt="">
                        <span class="font-bold">{{ post.author }}</span>
                        </div>
                        <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
                        <p class="mb-10">{{ post.content }}</p>
                        <div class="flex justify-between text-gray-400">
                            <div class="flex items-center h-full">
                                <HeartIcon class="h-6 w-6 mr-2"/>
                                <span>{{ post.likes }} votes</span>
                            </div>
                            <div class="flex items-center h-full">
                                <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 mr-2"/>
                                <span>{{ post.comments }} Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-content>
            <!-- TODO: ADD ION INFINITE SCROLL -->
    </ion-page>
</template>
<script setup>
import { NewspaperIcon,FireIcon,UserPlusIcon } from '@heroicons/vue/24/solid'
import { ChatBubbleOvalLeftEllipsisIcon,HeartIcon } from '@heroicons/vue/24/outline'
import { IonHeader, IonRefresher, IonRefresherContent } from '@ionic/vue';

const handleRefresh = (event) => {
    console.log('bach')
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
};
const { data : posts }  = await useFetch('/api/post')
</script>