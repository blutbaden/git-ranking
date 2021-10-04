<template>
  <div class="container mx-auto mt-10">
    <h3 class="divider divider-gray-300 text-2xl mb-5">Users Ranking</h3>
    <div class="bg-white shadow-xl rounded-lg w-full">
      <div class="rank-list">
          <router-link to="/search/test">
            <div class="border border-gray-300 border-b-0 p-2 hover:bg-gray-50 cursor-pointer justify-between inline-flex w-full">
            <div class="flex space-x-2 items-center">
              <div class="w-8 h-8">
                <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                  <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
                  <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
                </div>
              </div>
              <span>1.dfdf</span>
            </div>
            <div class="flex space-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>577777</span>
            </div>
          </div>
          </router-link>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<style scoped>
  .rank-list{
    column-count: 2;
    grid-column-gap: 20px;
  }
</style>
<script>
import Pagination from "../components/Pagination";
export default {
  components: {Pagination}
}
</script>
