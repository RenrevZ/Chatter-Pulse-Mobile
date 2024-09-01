<template>
    <div class="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition relative my-3">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" :src="notification.avatar ?? '/img/avatar.png'" alt="">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm text-gray-400">{{ notification.data?.message }}</p>
        <p class="text-xs text-gray-500">{{ notification.created_at }}</p>
        <p v-if="notification.hasReply" class="mt-2 text-sm text-blue-500 cursor-pointer">Reply</p>
      </div>
      <div class="flex-shrink-0">
        <span v-if="notification.isUnread" class="h-3 w-3 opacity-75 rounded-full bg-lime-500 animate-ping absolute top-0 right-0 mt-1 mr-1"></span>
        <span v-if="notification.isUnread" class="h-3 w-3 opacity-75 rounded-full bg-lime-500 absolute top-0 right-0 mt-1 mr-1"></span>
      </div>
    </div>
</template>
  
<script setup>
defineProps({
  notification: {
    type: Object,
    required: true,
  },
});
</script>
  