<template>
  <div :class="{'h-96' : loading}" class="relative container grid grid-cols-4 gap-1 mt-5 mx-auto">
    <div v-if="errored"
         class=" backdrop-filter backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
      <span class="">An error has been occurred, Please try later !</span>
    </div>
    <div v-if="loading" class="w-full h-full absolute flex items-center justify-center">
      <loading/>
    </div>
    <template v-else>
      <div class="row-span-1 pr-8">
        <div>
          <div class="group w-full h-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle"></span>
            <img :src="user.avatar_url" alt="avatar"
                 class="object-cover object-center w-full h-full visible group-hover:hidden"/>
          </div>
        </div>
        <div class="mt-3">
          <router-link class="text-3xl text-blue-400 hover:text-blue-500" v-bind:to="`/${(user.login)}`">
            {{user.login }}
          </router-link>
          <div class="border-b border-gray-300"></div>
          <template v-if="parentInfo !== repoKey">
            <div class="grid grid-cols-4 my-2 bg-gray-50 rounded-sm p-2">
              <span class="col-span-1 text-gray-500">Bio</span>
              <span class="col-span-3 text-sm italic text-gray-400 pl-1">{{ user.bio ? user.bio : 'None' }}</span>
            </div>
            <div class="grid grid-cols-4 mb-2 bg-gray-50 rounded-sm p-2">
              <span class="col-span-1 text-gray-500">Joined</span>
              <span class="col-span-3 text-sm italic text-gray-400 pl-1">{{ formatDate(user.createdAt) }}</span>
            </div>
          </template>
          <div class="flex space-x-1 items-center text-blue-400 hover:text-blue-500">
            <a :href="user.html_url">Go to GitHub</a>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <template v-if="parentInfo === repoKey">
          <h3 class="border-b border-gray-300 py-2 text-2xl mb-5 text-blue-400">{{ repo.full_name }}</h3>
          <div class="flex text-md">
            <span>{{ repo.description }}</span>
            <div class="flex space-x-1 pl-2 items-center text-sm text-blue-400 hover:text-blue-500">
              <a :href="repo.html_url">View it on GitHub</a>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </div>
          </div>
          <a :href="repo.homepage" class="text-blue-400 text-md">{{ repo.homepage }}</a>
          <div class="flex border mt-5 p-3">
            <div class="flex flex-1 flex-col	items-center">
              <span class="text-gray-500 text-xl">Star</span>
              <div class="flex items-center text-2xl">
                <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>{{ repo.stargazers_count }}</span>
              </div>
            </div>
            <div class="flex flex-1 flex-col	items-center">
              <span class="text-gray-500 text-xl">Fork</span>
              <span class="text-2xl">{{ repo.forks }}</span>
            </div>
            <div class="flex flex-1 flex-col	items-center">
              <span class="text-gray-500 text-xl">Created At</span>
              <span class="text-2xl">{{ formatDate(repo.created_at) }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <h3 class="border-b border-gray-300 py-2 text-2xl mb-5">{{ totalCount }} Repositories</h3>
          <div v-for="item in items" :key="item.id" class="border border-gray-300 border-b-0">
            <router-link v-bind:to="`/${item.nameWithOwner}`">
              <div
                  class="p-2 hover:bg-gray-50 cursor-pointer justify-between inline-flex w-full">
                <div class="flex space-x-2 items-center">
                  <span>{{ item.name }}</span>
                </div>
                <div class="flex space-x-2 items-center">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>{{ item.star }}</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="border-b border-gray-300"></div>
          <a v-if="hasNext && !loadingMore" class="text-blue-400 text-sm py-5 flex items-center justify-center cursor-pointer hover:text-blue-500"
             @click="loadNext()">Load
            More</a>
          <div class="flex items-center justify-center">
            <loading v-if="loadingMore"/>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
<script>
import GitHubService from "../api/GitHubService";
import Loading from "../components/Loading";
import ParentInfoEnum from "../enum/ParentInfoEnum";

export default {
  components: {Loading},
  mounted() {
    this.getData();
  },
  props: {
    parentInfo: {
      type: String,
    }
  },
  data() {
    return {
      perPage: 10,
      next: null,
      hasNext: false,
      items: [],
      user: {},
      repo: {},
      loading: true,
      loadingMore: false,
      errored: false,
      totalCount: 0
    }
  },
  computed: {
    repoKey: function () {
      return ParentInfoEnum.REPO;
    },  },
  methods: {
    async getData() {
      if(this.parentInfo){
        const {path} = this.$route;
        this.getRepoDetails(path);
        }else {
        const {name} = this.$route.params;
        this.getUserOrOrganizationsRepos(name);
      }
    },
    getUserOrOrganizationsRepos(name) {
      GitHubService.getRepositoriesByUser(this.perPage, name, null, this.next)
          .then(response => {
            const {login, name, avatar_url, html_url, bio, createdAt, repositories} = response.data.user
            const {totalCount, items, pageInfo} = repositories;
            const {endCursor, hasNextPage} = pageInfo;
            this.user = {login, name, avatar_url, html_url, bio, createdAt};
            this.items.push(...items)
            this.next = endCursor;
            this.hasNext = hasNextPage;
            this.totalCount = totalCount;
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
            this.loadingMore = false;
          })
    },
    getRepoDetails(name) {
      GitHubService.getRepositoryDetails(name)
          .then(response => {
            const {login, avatar_url, html_url, type} = response.owner
            const {id, homepage, description, created_at, forks, full_name, stargazers_count} = response;
            this.user = {login, html_url, avatar_url, type};
            this.repo = {
              id,
              homepage,
              description,
              created_at,
              forks,
              full_name,
              stargazers_count,
              html_url: response.html_url
            }
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
          })
    },
    loadNext() {
      this.loadingMore = true;
      this.getData();
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>
