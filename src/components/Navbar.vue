<template>
  <nav id="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button v-on:click="showMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center text-white">
            <span class="block lg:hidden w-auto">x</span>
            <div class="hidden lg:block w-auto font-bold	text-xl">
              <router-link to="/">
              <span class="text-green">
                Git
               </span>
                <span class="text-white">
                  Ranking
                </span>
              </router-link>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/users">
                <span class="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Users</span>
              </router-link>
              <router-link to="/organizations">
                <span class="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Organizations</span>
              </router-link>
              <router-link to="/repositories">
                <span class="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Repositories</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="seen" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/users">
          <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Users</span>
        </router-link>
        <router-link to="/organizations">
          <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Organizations</span>
        </router-link>
        <router-link to="/repositories">
          <span class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Repositories</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    seen: Boolean
  },
  methods: {
    showMobileMenu: function () {
      this.seen = !this.seen;
    }
  }
}
</script>

<style>
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
