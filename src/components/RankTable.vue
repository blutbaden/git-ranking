<template>
  <div class="flex flex-col py-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th scope="col" class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Star
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in items" :key="item.name">
              <td class="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                {{ index }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-5 w-5">
                    <img class="h-5 w-5 rounded-full" :src="item.image" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-xs font-small text-gray-900">
                      {{ item.name }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ item.gitUrl }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                {{ item.star }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankTable",
  props: {
    items: Array,
    default: () => ({})
  },
  mounted () {
    console.log(this.items)
  },
}
</script>

<style scoped>

</style>
