<template>
    <section>
        <div class="max-w-lg mx-auto grid grid-cols-2 gap-4">
            <div
                v-for="(word, index) in words"
                :key="word.id"
                class="flex items-center gap-2"
                >
                <input
                    v-model="word.text"
                    type="text"
                    class="primary-input"
                    :placeholder="`Word ${index + 1}`"
                />
            </div>
        </div>
        <button
            class="primary-btn mt-4 block mx-auto"
            @click="submitWords"
            >
            Submit words
        </button>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const words = useGameState();
const route = useRouter();

const submitWords = () => {
  const filtered = words.value.filter(word => word.text.trim() !== '')
  if (filtered.length < 6) {
    alert('Please enter 8 words')
    return
  }

route.push('/game')

  // Save to global state (e.g., Pinia or useState)
  console.log('Submitted words:', words.value)
  
}
</script>
