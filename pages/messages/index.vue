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


        <ion-modal :is-open="isModalOpen" @didDismiss="closeModal" ref="modal">
          <ion-header>
            <ion-toolbar color="none">
              <ion-buttons  slot="start">
                <ion-button @click="closeModal">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Start a message</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding"> 
            This content was mounted as soon as the modal was created.
          </ion-content>
        </ion-modal>
    </div>
    </ion-page>
</template>
<script setup lang="ts">
import { BellIcon,PencilIcon,MagnifyingGlassIcon,PlusIcon } from '@heroicons/vue/24/outline'
import { actionSheetController,IonFab, IonFabButton,IonModal} from '@ionic/vue';
import { peopleOutline, personOutline, searchOutline } from 'ionicons/icons';

interface ActionSheetButton {
  text: string;
  subHeader?: string;
  icon: string;
  handler: () => void;
}

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};


const createUserButton = (name: string, department: string, imageId: string): ActionSheetButton => ({
  text: name,
  subHeader: department,
  icon: `https://picsum.photos/80/80?random=${imageId}`,
  handler: () => {
    console.log(`${name} clicked`);
  }
});

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

const presentActionSheet = async () => {
  const actionSheet = await actionSheetController.create({
    header: 'Start a Chat',
    cssClass: 'custom-action-sheet',
    buttons: [
      {
        text: 'Search...',
        icon: searchOutline,
        handler: () => {
          console.log('Search clicked');
        }
      },
      createUserButton('Emelie Clarkson', 'Sales & Support', '64'),
      createUserButton('Lynn Tanner', 'HR Department', '65'),
      createUserButton('Chris Evans', 'Sales & Support', '66'),
      createUserButton('Mike Jackson', 'IT Department', '67'),
    ],
  });

  await actionSheet.present();
};

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