<template>
  <div class="bg-white py-3 flex items-center justify-between border-t">
    <div class="flex-1 flex justify-between sm:hidden">
      <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Previous
      </a>
      <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{startIndex}}</span>
          to
          <span class="font-medium">{{lastIndex}}</span>
          of
          <span class="font-medium">{{totalPages}}</span>
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a @click="setPage(1)" aria-current="page" :class="{'disabled bg-gray-50 text-gray-400': pager.currentPage === 1, 'cursor-pointer	hover:bg-gray-50': pager.currentPage !== 1}" class="z-10 rounded-l-md relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            First
          </a>
          <a @click="setPage(pager.currentPage --)" :class="{'disabled bg-gray-50 text-gray-400': pager.currentPage === 1, 'cursor-pointer hover:bg-gray-50' : pager.currentPage > 1}" class="relative inline-flex items-center px-2 py-2 border text-sm font-medium">
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
          <div v-for="page in pager.pages" :key="page" :class="{'text-indigo-500 border-indigo-300 bg-indigo-50 disabled': pager.currentPage === page, 'cursor-pointer hover:bg-gray-50': pager.currentPage !== page}">
            <a class="z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium" @click="setPage(page)">{{page}}</a>
          </div>
          <a @click="setPage(pager.currentPage ++)" :class="{'disabled bg-gray-50 text-gray-400': pager.currentPage === totalPages, 'cursor-pointer hover:bg-gray-50' : pager.currentPage < totalPages}" class="relative inline-flex items-center px-2 py-2 border text-sm font-medium">
            <span class="sr-only">Next</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
          <a @click="setPage(totalPages)" aria-current="page" :class="{'disabled bg-gray-50 text-gray-400': pager.currentPage === totalPages, 'cursor-pointer	hover:bg-gray-50': pager.currentPage < totalPages}" class="z-10 rounded-r-md relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            Last
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    maxPages: {
      type: Number,
      default: 10
    },totalPages: {
      type: Number,
      default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
  },
  data () {
    return {
      pager: {},
    }
  },
  computed: {
    startIndex: function () {
      return this.pageSize * (this.pager.currentPage - 1) + 1
    },
    lastIndex: function () {
      return this.pageSize * this.pager.currentPage;
    }
  },
  created () {
    if (!this.$listeners.changePage) {
      throw 'Missing required event listener: "changePage"';
    }
    // set to initial page
    this.pager = this.paginate(this.initialPage)
  },
  methods: {
    setPage(page) {
      // update currentPage
      this.pager = this.paginate(page);
      this.$emit('changePage', page);
    },
    paginate(page) {
      if (page < 1) {
        page = 1;
      } else if (page > this.totalPages) {
        page = this.totalPages;
      }
      let startPage, endPage;
      if (this.totalPages <= this.maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = this.totalPages;
      } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
        if (page <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = this.maxPages;
        } else if (page + maxPagesAfterCurrentPage >= this.totalPages) {
          // current page near the end
          startPage = this.totalPages - this.maxPages + 1;
          endPage = this.totalPages;
        } else {
          // current page somewhere in the middle
          startPage = page - maxPagesBeforeCurrentPage;
          endPage = page + maxPagesAfterCurrentPage;
        }
      }
      // create an array of pages
      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
      return {
        startPage: startPage,
        endPage: endPage,
        currentPage: page,
        pages: pages
      };
    },
  },
  /*watch: {
    items () {
      this.setPage(this.initialPage);
    }
  }*/
}
</script>

<style scoped>

</style>
