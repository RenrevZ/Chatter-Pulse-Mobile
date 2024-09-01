<template>
    <ion-page>
       <ion-fab  @click="openModal" slot="fixed" vertical="bottom" horizontal="end" class="absolute bottom-20 right-3">
            <ion-fab-button>
                <PlusIcon class="h-7" />
            </ion-fab-button>
        </ion-fab>


        <div class="bg-gray-900 min-h-screen text-white p-4">
            <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Messages</h1>
            <img src="https://picsum.photos/80/80?random=10" alt="User Avatar" class="w-8 h-8 rounded-full">
        </div>
    
        <div class="relative mb-4">
          <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search messages..." 
              class="w-full bg-gray-800 text-white rounded-full py-3 px-4 pl-10"
          >
          <MagnifyingGlassIcon class="w-6 h-6 absolute left-3 top-3 text-gray-400" />
        </div>
        
        <ul>
          <li v-for="(message,index) in messages" :key="message.id" class="flex items-center mb-4 px-3 py-2">
              <img :src="message.avatar" :alt="message.name" class="w-12 h-12 rounded-full mr-4">
              <div class="flex-grow">
              <h2 class="font-semibold">{{ message.name }}</h2>
              <p class="text-gray-400">{{ message.text }}</p>
              </div>
              <div class="text-right">
              <span class="text-xs text-gray-500 block">{{ message.time }}</span>
              <component :is="message.icon" class="w-5 h-5 text-gray-400 mt-1" v-if="message.icon" />
              </div>
          </li>
        </ul>


        <ion-modal :is-open="isModalOpen" @didDismiss="closeModal" ref="modal" class="custom-modal">
          <ion-header>
            <ion-toolbar color="none">
              <ion-buttons  slot="start">
                <ion-button @click="closeModal">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Send a message</ion-title>
              <ion-buttons  slot="end">
                <ion-button @click="closeModal">Create</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding"> 
            <div class="relative mb-4">
              <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="Search for user..." 
                  class="w-full bg-gray-800 text-white rounded-full py-3 px-4 pl-10"
              >
              <MagnifyingGlassIcon class="w-6 h-6 absolute left-3 top-3 text-gray-400" />
            </div>
            <div 
              class="flex justify-around items-center px-3 py-3" 
              v-for="item in items" 
              :key="item"
              @click="selectItem(item)"
            >
              <img 
                :src="`https://picsum.photos/80/80?random=${item}`" 
                :alt="`image-${item}`" 
                class="w-12 h-12 rounded-full mr-4"
              >
              <div class="flex-grow">
                <p class="font-semibold">User {{ item }}</p>
              </div>
              <div class="flex justify-center items-center">
                <input 
                  :checked="selectedItem === item" 
                  type="radio" 
                  :value="item" 
                  name="default-radio" 
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
              </div>
            </div>
          </ion-content>
        </ion-modal>
    </div>
    </ion-page>
</template>
<script setup lang="ts">
import { BellIcon,PencilIcon,MagnifyingGlassIcon,PlusIcon } from '@heroicons/vue/24/outline'
import { actionSheetController,IonFab, IonFabButton,IonModal} from '@ionic/vue';
import { peopleOutline, personOutline, searchOutline } from 'ionicons/icons';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};


// List of items
const items = [1, 2, 3, 4, 5];

// Selected item state
const selectedItem = ref<number | null>(null);

// Method to handle item selection
const selectItem = (item: number) => {
  selectedItem.value = item;
}

const messages = ref([
  {
    id: 1,
    name: 'Mary Fisher',
    text: 'How are you doing? 😊',
    time: '1h',
    avatar: "https://picsum.photos/80/80?random=1"
  },
  {
    id: 2,
    name: 'Katie Morrison',
    text: 'I think I\'ll beat you on Squats',
    time: '2h',
    avatar: "https://picsum.photos/80/80?random=2"
  },
  {
    id: 3,
    name: 'Mathew Ribbon',
    text: 'Have you seen what Rachel did?',
    time: '1d',
    avatar: "https://picsum.photos/80/80?random=3"
  },
  {
    id: 4,
    name: 'Executive Management Team',
    text: 'I think I\'ll beat you on Squats',
    time: '1d',
    avatar: "https://picsum.photos/80/80?random=4"
  },
  {
    id: 5,
    name: 'Product Design Team',
    text: 'Eirc: Ut enim ad minim veniam...',
    time: '2d',
    avatar: "https://picsum.photos/80/80?random=5"
  },
  {
    id: 6,
    name: 'Steps Challenge',
    text: 'Mitch: It\'s a fun day today 💪',
    time: '2d',
    avatar: "https://picsum.photos/80/80?random=6"
  },
  {
    id: 7,
    name: 'Squats Challenge',
    text: 'Anna: I made 100 squats 💪',
    time: '2d',
    avatar: "https://picsum.photos/80/80?random=7"
  }
])
</script>

<style>
.custom-action-sheet {
  --background: var(--ion-color-dark);
  --button-color: var(--ion-color-light);
  --button-color-selected: var(--ion-color-primary);
}

/* Add this to ensure the images are displayed correctly */
.action-sheet-icon.sc-ion-action-sheet-md {
  width: 40px;
  height: 40px;
  contain: strict;
  object-fit: cover;
  border-radius: 50%;
}
</style>