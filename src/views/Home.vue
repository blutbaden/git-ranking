<template>
  <div class="container mx-auto">
    <Search @search="onSearch"/>
    <div class="grid grid-cols-3 gap-4">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <span>Users</span>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="/users">Show more »</a>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <span>Organizations</span>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="/organizations">Show more »</a>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <span>Repositories</span>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="#">Show more »</a>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import RankTable from "../components/RankTable";
import router from "../router";

export default {
  name: 'Home',
  components: {
    RankTable,
    Search,
  },
  methods: {
    onSearch(query) {
      router.push({ path: `/${query}` })
    },
  }
}
</script>
