<template>
  <div class="mx-auto bg-gray-200 rounded-lg p-10 mt-5">
    <form>
      <h1 class="text-center font-bold text-gray text-4xl">GitRanking</h1>
      <p class="mx-auto font-normal text-sm my-6 max-w-lg">Unofficial GitHub star ranking for users, organizations and repositories.</p>
      <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-3 justify-between">
        <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Github username ..." />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
.tailwindccsok {
  background-image : url('https://th.bing.com/th/id/R.9fec627c14e4139d329eb1e89c750de6?rik=EroFSldai0o6Ug&riu=http%3a%2f%2fwww.peimag.com%2fwp-content%2fuploads%2f2015%2f10%2fblack-eyes2.jpg&ehk=r1dQ5fzKeg0ILkaX5esbRxeZolXZamBKJN6VUezk3wY%3d&risl=&pid=ImgRaw');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
