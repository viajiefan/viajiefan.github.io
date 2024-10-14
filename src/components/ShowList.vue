<template>
    <div>
        <ul>
            <li v-for="(pub, index) in publist" :key="index">
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
</template>


<script>
export default {
  name: 'ShowList',
  props: {
    publist: [],
    top: {},
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
</style>