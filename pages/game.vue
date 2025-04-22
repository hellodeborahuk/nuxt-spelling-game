<template>
    <section class="bg-purple-700 min-h-screen">
    <h1 class="text-center font-bold text-white text-7xl py-20">Spelling game</h1>
    <div class="bg-orange-100 rounded-lg max-w-lg mx-auto flex flex-col items-center gap-6 p-10">
        <h3 class="text-3xl font-bold" >{{ hideText === false ? currentWord.text : '. . .'}}</h3>
        <h3 class="text-3xl font-bold" >{{ hideText === false ? currentWord.text : currentWord.text.length}}</h3>

        <div
            key="word.id"
            class="flex items-center gap-2"
            >
            <input
                type="text"
                class="primary-input"
                placeholder="type here"
                @focus="hideText = true"
            />
        </div>
        <div class="space-x-4">
            <button
            class="secondary-btn"
            @click="hideText = false"
            >
            Show word
            </button>
            <button
            class="primary-btn"
            @click="submitAnswer"
            >
            Done
            </button>
        </div>
    </div>
</section>
</template>

<script setup>
const words = useGameState()
const hideText = ref(false)
const currentWordId = ref(2)
const currentWord = computed(() => {
    return words.value.find((word) => {
        return word.id === currentWordId.value
    })
})
</script>