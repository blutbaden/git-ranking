<template>
  <div class="container mx-auto">
    <Search @search="onSearch"/>
    <div class="grid grid-cols-3 gap-4">
      <div class="relative max-w-md p-1 shadow-lg rounded-lg my-20 flex items-center justify-center">
        <div v-if="erroredUsers" class="backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
          <span>An error has been occurred, Please try later !</span>
        </div>
        <loading v-if="loadingUsers"/>
        <div class="w-full" v-else>
          <span>Users</span>
          <rank-table :items="users"/>
          <a class="text-sm text-blue-400" href="/users">Show more »</a>
        </div>
      </div>
      <div class="relative max-w-md p-1 shadow-lg rounded-lg my-20 flex items-center justify-center">
        <div v-if="erroredOrganizations" class="backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
          <span>An error has been occurred, Please try later !</span>
        </div>
        <loading v-if="loadingOrganizations"/>
        <div class="w-full" v-else>
          <span>Organizations</span>
          <rank-table :items="organizations"/>
          <a class="text-sm text-blue-400" href="/organizations">Show more »</a>
        </div>
      </div>
      <div class="relative max-w-md p-1 shadow-lg rounded-lg my-20 flex items-center justify-center">
        <div v-if="erroredRepositories" class="backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
          <span>An error has been occurred, Please try later !</span>
        </div>
        <loading v-if="loadingRepositories"/>
        <div class="w-full" v-else>
          <span>Repositories</span>
          <rank-table :items="repositories"/>
          <a class="text-sm text-blue-400" href="/repositories">Show more »</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue"
import RankTable from "../components/RankTable.vue"
import { useRouter } from 'vue-router'
import GitHubService from "../api/GitHubService.js"
import Loading from "../components/Loading.vue"

export default {
  name: 'Home',
  components: {
    Loading,
    RankTable,
    Search,
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  data() {
    return {
      repositories: [],
      users: [],
      organizations: [],
      loadingRepositories: true,
      erroredRepositories: false,
      loadingUsers: true,
      erroredUsers: false,
      loadingOrganizations: true,
      erroredOrganizations: false
    }
  },
  mounted() {
    this.getTopRepositories()
    this.getTopUsers()
    this.getTopOrganizations()
  },
  methods: {
    onSearch(query) {
      this.router.push({ path: `/${query}` })
    },
    async getTopRepositories() {
      GitHubService.getTopStarredRepositoriesByPage(1, 5)
        .then(response => {
          this.repositories = response.items.map(item => ({
            name: item.full_name, star: item.stargazers_count, image: item.owner.avatar_url, gitUrl: item.url
          }))
        })
        .catch(error => {
          console.error(error)
          this.erroredRepositories = true
        })
        .finally(() => { this.loadingRepositories = false })
    },
    async getTopUsers() {
      GitHubService.getTopStarredUsersByPage(1, 5)
        .then(response => {
          this.users = response.items.map(item => ({
            name: item.login, image: item.avatar_url, gitUrl: item.html_url
          }))
        })
        .catch(error => {
          console.error(error)
          this.erroredUsers = true
        })
        .finally(() => { this.loadingUsers = false })
    },
    async getTopOrganizations() {
      GitHubService.getTopStarredOrganizationsByPage(1, 5)
        .then(response => {
          this.organizations = response.items.map(item => ({
            name: item.login, image: item.avatar_url, gitUrl: item.html_url
          }))
        })
        .catch(error => {
          console.error(error)
          this.erroredOrganizations = true
        })
        .finally(() => { this.loadingOrganizations = false })
    },
  }
}
</script>
