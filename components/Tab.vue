<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom" color="dark">
                <ion-tab-button 
                    v-for="tab in tabs" 
                    :key="tab" 
                    :tab="tab.name" 
                    :href="tab.route"
                    :class="{ 'text-pink-500 animate-pulse': tab.isActive }"
                    @click="activateTab(tab)"
                 >

                  <div class="flex flex-col items-center justify-between">
                      <component 
                            :is="tab.icon" 
                            class="h-6" 
                        />
                    <ion-label>
                        {{ tab.name }}
                    </ion-label>
                  </div>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
<script setup>
import { HomeIcon,UserCircleIcon,ChatBubbleOvalLeftEllipsisIcon,BellIcon } from '@heroicons/vue/24/outline'
import { routes } from '@/enums/routes'

const route = useRoute();
const router = useRouter();


const tabs = ref([
  {
    name: 'Home',
    route: routes.FORUM,
    icon: HomeIcon,
    isActive: route.fullPath === routes.FORUM,
  },
  {
    name: 'Message',
    route: routes.MESSAGE,
    icon: ChatBubbleOvalLeftEllipsisIcon,
    isActive: route.fullPath === routes.MESSAGE,
  },
  {
    name: 'Notifications',
    route: routes.NOTIFICATIONS,
    icon: BellIcon,
    isActive: route.fullPath === routes.NOTIFICATIONS,
  },
  {
    name: 'Profile',
    route: routes.PROFILE,
    icon: UserCircleIcon,
    isActive: route.fullPath === routes.PROFILE,
  },
]);


watch(
  () => route.fullPath,
  (newPath) => {
    updateActiveTab(newPath);
  }
);

function updateActiveTab(newPath) {
  tabs.value.forEach(tab => {
    tab.isActive = (tab.route === newPath);
  });
}

// Function to handle tab click
function activateTab(tab) {
  router.push(tab.route);  // Navigate to the tab's route
  updateActiveTab(tab.route);  // Update active state immediately
}
</script>