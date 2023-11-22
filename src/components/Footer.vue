<template>
  <div class="space-x-2 flex items-center bg-gray-100 bottom-0 w-full absolute p-4 text-gray-500 justify-center text-sm">
     <span>© {{ new Date().getFullYear() }} | Made with </span>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="text-red-500" stroke="currentColor" style="height: 15px; width: 15px">
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
     </svg>
     <span> by GrimwolfStudio | </span>
     <a class="text-blue-500 text-xs" href="https://github.com/blutbaden/translator">View on github</a>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
