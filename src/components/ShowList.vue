<template>
    <div>
        <div id="pages-wrapper">
            <ul v-for="(page, pIndex) in pages" :key="pIndex" :class="{ active: pIndex + 1 === currentPage }">
                <li v-for="(pub, index) in page" :key="index">
                    <!-- Print Title & Links -->
                    <span id="title">{{pub.year}}-{{pub.month}} "{{ pub.title }}"</span>
                    <a id="icon_link" v-if="pub.pdf" v-bind:href="pub.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-file-pdf"></i></a>
                    <a id="icon_link" v-if="pub.link" v-bind:href="pub.link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-link"></i></a>
                    <br>
                    <span id="eng-title" v-if="pub.engtitle">( {{pub.engtitle}} )<br></span>

                    <!-- Print Author names -->
                    <!-- <span>Authors: {{ pub.author.join(', ') }}</span> <br> -->
                    <span>Authors: </span>
                    <template v-for="(author_el, index) in pub.author" :key="index">
                        <!-- if myname(compair in no space string), underline -->
                        <span v-if="author_el.replace(/\s+/g, '') === top.JaName.replace(/\s+/g,'') || author_el.replace(/\s+/g,'') === top.EngName.replace(/\s+/g,'')" id="myname"> {{author_el}} </span>
                        <span v-else> {{author_el}} </span>
                        <span v-if="index != pub.author.length-1">, </span>
                    </template><br>

                    <!-- Print Booktitle -->
                    <span><i>{{ pub.booktitle }}</i></span>
                    <span id="awardtag" v-if="pub.awardtag">{{pub.awardtag}}</span><br>

                    <!-- Additional info -->
                    <span v-html="pub.add" v-if="pub.add"></span>

                </li>
                <br>
            </ul>
        </div>
        <div id="pagination" v-if="pageCount > 1">
            <button
                id="page-btn"
                type="button"
                :disabled="currentPage === 1"
                @click="currentPage--"
            >←</button>
            <span id="page-info">{{ currentPage }} / {{ pageCount }}</span>
            <button
                id="page-btn"
                type="button"
                :disabled="currentPage === pageCount"
                @click="currentPage++"
            >→</button>
        </div>
    </div>
</template>


<script>
const PAGE_SIZE = 5;

export default {
  name: 'ShowList',
  props: {
    publist: [],
    top: {},
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.publist.length / PAGE_SIZE) || 1;
    },
    pages() {
      const chunks = [];
      for (let i = 0; i < this.publist.length; i += PAGE_SIZE) {
        chunks.push(this.publist.slice(i, i + PAGE_SIZE));
      }
      return chunks.length ? chunks : [[]];
    },
  },
}
</script>

<style scoped>
li {
  /* border: 1px dotted #000; */
  /* margin: 10px 0px; */
  margin-top: 20px;
  
}
#myname {
  text-decoration: underline;
}

#title {
    font-weight: bold;
    
}

#awardtag {
    font-weight: bold;
    margin: 0px 0px 0px 5px;
    padding: 3px 3px;
    background-color:#3066b6; 
    color:#ffffff;
}

#icon_link {
    margin: 0px 0px 0px 8px;
}

#pages-wrapper {
    display: grid;
}

/* Stack every page's <ul> in the same grid cell so the wrapper's
   height is always the tallest page, even while other pages are
   hidden -- this keeps the pagination controls from shifting. */
#pages-wrapper > ul {
    grid-area: 1 / 1;
    visibility: hidden;
    pointer-events: none;
}

#pages-wrapper > ul.active {
    visibility: visible;
    pointer-events: auto;
}

#pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 10px;
}

#page-btn {
    border: 1px solid #3066b6;
    background-color: #ffffff;
    color: #3066b6;
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
}

#page-btn:disabled {
    border-color: #cccccc;
    color: #cccccc;
    cursor: default;
}

#page-info {
    font-size: 0.9em;
}
</style>