<template>
  <div class="container mx-auto">
    <Search @search="onSearch"/>
    <div class="grid grid-cols-3 gap-4">
      <div class="max-w-md p-1 px-8 bg-white shadow-lg rounded-lg my-20">
        <span>Users</span>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a class="text-sm text-blue-400" href="/users">Show more »</a>
      </div>
      <div class="max-w-md p-1 bg-white shadow-lg rounded-lg my-20 relative">
        <span>Organizations</span>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a class="text-sm text-blue-400" href="/organizations">Show more »</a>
      </div>
      <div class="relative max-w-md p-1 shadow-lg rounded-lg my-20 flex items-center justify-center">
        <div v-if="erroredRepositories" class="backdrop-filter backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
          <span class="">An error has been occurred, Please try later !</span>
        </div>
        <loading v-if="loadingRepositories"/>
        <div v-else>
          <span>Repositories</span>
          <rank-table :items="repositories"/>
          <a class="text-sm text-blue-400" href="/repositories">Show more »</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import RankTable from "../components/RankTable";
import router from "../router";
import GitHubService from "../api/GitHubService";
import Loading from "../components/Loading";

export default {
  name: 'Home',
  components: {
    Loading,
    RankTable,
    Search,
  },
  data() {
    return {
      repositories: {},
      loadingRepositories: true,
      erroredRepositories: false
    }
  },
  mounted() {
    this.getTopRepositories();
  },
  methods: {
    onSearch(query) {
      router.push({ path: `/${query}` })
    },
    async getTopRepositories() {
      GitHubService.getTopStarredRepositoriesByPage(0, 5)
          .then(response => {
            this.repositories = response.items.map(item => {
              return {
                name: item.full_name, star: item.stargazers_count, image: item.owner.avatar_url, gitUrl: item.url
              }
            });
          })
          .catch(error => {
            console.log(error);
            this.erroredRepositories = true;
          })
          .finally(() => this.loadingRepositories = false)
    },
  }
}
</script>
