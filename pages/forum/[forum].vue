<template>
    <ion-page>
        <ion-header class="sticky top-0 bg-gray-900 w-full px-2 py-3">
            <ArrowLeftIcon @click="back" class="w-8 h-8"/>
        </ion-header>
        <!-- HEADER -->
        <div class="space-y-4 p-4 bg-gray-900">
            <div class="bg-gray-900 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                    <img src="https://picsum.photos/80/80?random=10" 
                        class="rounded-full max-h-10 max-w-10 mr-3"
                        alt="">
                    <span class="font-bold">{{ post.author }}</span>
                </div>
                <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
                <p class="mb-10">{{ post.content }}</p>
                <div class="flex justify-around text-gray-400">
                    <div class="flex items-center h-full">
                        <HeartIcon class="h-6 w-6 mr-2"/>
                        <span>{{ post.likes }} votes</span>
                    </div>
                    <div class="flex items-center h-full">
                        <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 mr-2"/>
                        <span>
                            {{ post.comments }} Comments
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- COMMENTS -->
        <div class="bg-gray-900 text-white p-4 font-sans">
            <h2 class="text-xl font-bold mb-4">Comments</h2>
            <div v-for="comment in comments" :key="comment.id" class="mb-4">
            <div class="flex items-start space-x-3">
               
                <div class="flex-1">
                    <div class="bg-gray-800 rounded-lg p-3">
                        <div class="flex">
                            <img :src="comment.avatar" :alt="comment.author" class="w-10 h-10 mr-1 rounded-full" />

                            <div class="flex justify-between w-full items-center mb-2">
                                <span class="font-semibold">{{ comment.author }}</span>
                                <span class="text-gray-400 text-sm">{{ comment.timestamp }}</span>
                            </div>
                        </div>
                      
                        <p class="text-gray-300">{{ comment.content }}</p>
                        <div class="mt-2 flex items-center space-x-4">
                        <button class="text-gray-400 hover:text-white transition">
                        <ion-icon :icon="thumbsUp" class="align-middle mr-1"></ion-icon>
                        {{ comment.likes }}
                        </button>
                        <button class="text-gray-400 hover:text-white transition">Reply</button>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div v-for="reply in comment.replies" :key="reply.id" class="ml-12 mt-2">
                <div class="flex items-start space-x-3">
                
                <div class="flex-1">
                    <div class="bg-gray-800 rounded-lg p-3">
                        <div class="flex">
                            <img :src="reply.avatar" :alt="reply.author" class="w-8 h-8 rounded-full mr-3" />
                            <div class="flex w-full justify-between items-center mb-2">
                                <span class="font-semibold">{{ reply.author }}</span>
                                <span class="text-gray-400 text-sm">{{ reply.timestamp }}</span>
                            </div>
                        </div>
                    
                        <p class="text-gray-300 p-3">{{ reply.content }}</p>

                        <div class="mt-2 flex items-center space-x-4">
                            <button class="text-gray-400 hover:text-white transition">
                                <ion-icon :icon="thumbsUp" class="align-middle mr-1"></ion-icon>
                                {{ reply.likes }}
                            </button>
                            <button class="text-gray-400 hover:text-white transition">Reply</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </ion-page>
</template>
<script setup>
import { IonIcon } from '@ionic/vue';
import { ArrowLeftIcon,ChatBubbleOvalLeftEllipsisIcon,HeartIcon } from '@heroicons/vue/24/solid'
import { thumbsUp } from 'ionicons/icons';

const router = useIonRouter()

const post = ref({
        id: 1,
        author: 'John Doe',
        title: 'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        category: 'Finance',
        likes: 523,
        comments: 36
})

const comments = ref([
  {
    id: 1,
    author: 'JohnDoe',
    avatar: 'https://picsum.photos/seed/john/50',
    content: 'Great post! Very informative.',
    timestamp: '2 hours ago',
    likes: 5,
    replies: [
      {
        id: 2,
        author: 'JaneSmith',
        avatar: 'https://picsum.photos/seed/jane/50',
        content: 'I agree, thanks for sharing!',
        timestamp: '1 hour ago',
        likes: 2,
      }
    ]
  },
  {
    id: 3,
    author: 'BobJohnson',
    avatar: 'https://picsum.photos/seed/bob/50',
    content: 'Could you elaborate more on the second point?',
    timestamp: '30 minutes ago',
    likes: 1,
    replies: []
  }
])

const back = () => router.back()
</script>