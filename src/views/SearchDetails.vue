<template>
  <div class="container grid grid-cols-4 gap-1 mt-5 mx-auto">
    <div class="row-span-1">
      <div class="w-56 h-56">
        <div class="group w-full h-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
          <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
          <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
        </div>
      </div>
      <div class="mt-3">
        <a href="#" class="text-3xl text-blue-500 border-b-2 border-gray-300 flex w-60">microsoft</a>
        <div class="grid grid-cols-4 mt-3">
          <span class="row-span-1 text-gray-500 text-xl">Star</span>
          <div class="flex space-x-2 items-center row-span-3 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>577777</span>
          </div>
        </div>
        <div class="grid grid-cols-4">
          <span class="row-span-1 text-gray-500 text-xl">Rank</span>
          <span class="row-span-3 text-xl">1</span>
        </div>
        <div class="flex space-x-1 items-center">
          <a class="text-blue-400" href="#">Go to GitHub</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <h3 class="border-b-2 py-2 border-gray-300 text-2xl mb-5">4347 Repositories</h3>
      <router-link to="/search/test">
        <div class="border border-gray-300 border-b-0 p-2 hover:bg-gray-50 cursor-pointer justify-between inline-flex w-full">
          <div class="flex space-x-2 items-center">
            <span>dfdf</span>
          </div>
          <div class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>577777</span>
          </div>
        </div>
      </router-link>
      <Pagination/>
    </div>
  </div>
</template>

<style scoped>

</style>
<script>
import Pagination from "../components/Pagination";
export default {
  components: {Pagination}
}
</script>
