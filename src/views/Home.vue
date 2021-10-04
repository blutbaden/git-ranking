<template>
  <div class="container mx-auto">
    <Search/>
    <div class="grid grid-cols-3 gap-4">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <a href="#">Users</a>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="#">Show more »</a>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <a href="#">Organizations</a>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="#">Show more »</a>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <a href="#">Repositories</a>
        <rank-table :items="[{'name': 'test', 'star': '10', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/260px-PNG_transparency_demonstration_1.png', 'gitUrl': 'test'}]"/>
        <a href="#">Show more »</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "../components/Search";
import RankTable from "../components/RankTable";

export default {
  name: 'Home',
  components: {
    RankTable,
    Search,
  }
}
</script>
