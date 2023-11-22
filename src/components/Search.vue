<template>
  <div class="mx-auto bg-gray-200 rounded-lg p-10 mt-5">
    <form>
      <h6 class="text-center font-bold text-gray text-4xl">Github Ranking</h6>
      <p class="mx-auto font-normal text-md my-6 max-w-lg">Unofficial GitHub star ranking for users, organizations and repositories.</p>
      <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-3 justify-between">
        <input v-model="query" class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search Github user or organization ..." />
        <button @click="search()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  pros: {
    query: String,
    default: "",
  },
  data() {
    return {
      query: this.query
    }
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    },
  }
}
</script>

<style scoped>

</style>
