<template>
    <section class="bg-purple-700 min-h-screen">
    <h1 class="text-center font-bold text-white text-7xl py-20">Spelling game</h1>
    <div class="bg-orange-100 rounded-lg max-w-lg mx-auto flex flex-col items-center gap-6 p-10">
        <h3 class="text-3xl font-bold">Word</h3>
        <div
      key="word.id"
      class="flex items-center gap-2"
    >
      <input
        type="text"
        class="primary-input"
        placeholder="type here"
      />
    </div>

    <button
      class="primary-btn"
      @click="submitAnswer"
    >
      Submit
    </button>
    </div>
</section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>