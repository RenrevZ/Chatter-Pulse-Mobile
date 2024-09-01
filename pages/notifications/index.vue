<template>
    <ion-page>
      <div class="bg-gray-900 min-h-screen p-6 text-white w-full">
      <div class="flex flex-col justify-between mb-4">
        <h2 class="text-xl font-semibold">Notifications</h2>
        <div class="flex justify-between">
          <button class="flex items-center bg-gray-700 text-gray-300 hover:bg-gray-600 px-3 px-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v2a2 2 0 002 2v6a2 2 0 002 2h8a2 2 0 002-2v-6a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 3a1 1 0 112 0v4a1 1 0 11-2 0V6zm4 1a1 1 0 10-2 0v2a1 1 0 102 0V7zm-4 8a1 1 0 112 0v1a1 1 0 11-2 0v-1z" clip-rule="evenodd" />
            </svg>
            Filters
          </button>
          <button class="bg-gray-700 text-xs hover:bg-blue-700 text-white px-3 py-3 rounded-md">
            Mark All As Read
          </button>
        </div>
      </div>

      <div class="space-y-4">

        <div v-for="(notification,date) in notifications">
           <!-- Date Separator -->
            <div class="relative mb-3">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-600"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-gray-900 text-gray-400">
                  {{ date }}
                </span>
              </div>
            </div>

            <div class="overflow-scroll">
               <!-- Notification Items -->
            <NotificationItem
              v-for="(item, index) in notification"
              :key="index"
              :notification="item"
            />
            </div>
           
        </div>
      </div>
    </div>
    </ion-page>
</template>
<script setup>
const notifications = {
 "Aug 01 2024" : [
    {
         avatar: 'https://picsum.photos/80/80?random=10',
         data : {message: "new notification has been received"},
         created_at : "2024-09-01",
         isUnread: true
    },
    {
         avatar: 'https://picsum.photos/80/80?random=6',
         data : {message: "You have been followed by Ghe123s"},
         created_at : "2024-09-01",
         isUnread: false
    }
  ]
}
</script>