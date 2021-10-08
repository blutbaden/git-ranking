<template>
  <div class="container mx-auto mt-10">
    <h3 class="text-2xl">
      <span class="capitalize">{{path}}</span> Ranking
    </h3>
    <div class="border-b border-gray-300 my-2"></div>
    <div class="relative bg-white shadow-xl rounded-lg w-full">
      <div v-if="errored" class="backdrop-filter backdrop-blur-sm w-full h-full flex items-center text-red-600 text-lg justify-center z-10 absolute">
        <span class="">An error has been occurred, Please try later !</span>
      </div>
      <div v-if="loading" class="md:p-10 lg:p-32 flex items-center justify-center">
        <loading/>
      </div>
      <div class="p-3" v-else>
        <div class="rank-list">
          <router-link v-for="(item, index) in items" :key="item.id" v-bind:to="`${item.name}`">
            <div
                class="border border-gray-300 border-b-0 p-2 hover:bg-gray-50 cursor-pointer justify-between inline-flex w-full">
              <div class="flex space-x-2 items-center">
                <div class="w-8 h-8">
                  <div
                      class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                    <span class="hidden group-hover:table-cell text-white font-bold align-middle">
                      {{ item.name }}
                    </span>
                    <img alt="avatar" class="object-cover object-center w-full h-full visible group-hover:hidden"
                         v-bind:src="item.avatar_url"/>
                  </div>
                </div>
                <span>{{ getRank(index) }}.{{ item.name }}</span>
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
        <Pagination :page-size="perPage" :total-pages="totalPages" @changePage="onChangePage"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rank-list {
  column-count: 2;
  grid-column-gap: 20px;
}
</style>
<script>
import Pagination from "../components/Pagination";
import GitHubService from "../api/GitHubService";
import Loading from "../components/Loading";
import ParentInfoEnum from "../enum/ParentInfoEnum";

export default {
  components: {Loading, Pagination},
  props:{
    parentInfo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      path: null,
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
      items: {},
      loading: true,
      errored: false
    }
  },
  beforeMount(){
    const {path} = this.$route;
    this.path = path.split('/')[1];
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let myService = new Promise((resolve, reject) => {
        switch(this.parentInfo){
          case ParentInfoEnum.REPO:
            resolve(GitHubService.getTopStarredRepositoriesByPage(this.currentPage, this.perPage));
            break;
          case ParentInfoEnum.ORG:
            resolve(GitHubService.getTopStarredOrganizationsByPage(this.currentPage, this.perPage));
            break;
          case ParentInfoEnum.USER:
            resolve(GitHubService.getTopStarredUsersByPage(this.currentPage, this.perPage));
            break;
          default:
        }
        reject(new Error("403"));
      });
      myService
          .then(response => {
            let {total_count, items} = response;
            this.items = items.map(item => {
              if(this.parentInfo === ParentInfoEnum.REPO) {
                return {
                  id: item.id, name: item.full_name, avatar_url: item.owner.avatar_url, star: item.stargazers_count
                }
              }
              return {
                id: item.id, name: item.login, avatar_url: item.avatar_url
              }
            });
            this.totalPages = this.calculateTotalPages(total_count);
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => this.loading = false)
    },
    calculateTotalPages(totalElements) {
      return Math.ceil(totalElements / this.perPage);
    },
    getRank(index) {
      return this.perPage * (this.currentPage - 1) + index + 1;
    },
    onChangePage(page) {
      this.loading = true;
      this.currentPage = page;
      this.getData();
    },
  }
}
</script>
