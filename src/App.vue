<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <TopComponent v-bind:descObj="this.descObj"/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" v-bind:descObj="this.descObj" /> -->
  <!-- <p> {{ descObj }} </p> -->

  <h2>Publication List</h2>
  <h3>Journal Papers</h3>
  <ShowList v-bind:publist="this.descObj.JournalPapers" v-bind:top="this.descObj.Top"/>
  <h3>International Conferences</h3>
  <ShowList v-bind:publist="this.descObj.International" v-bind:top="this.descObj.Top"/>

  <h3>Domestic Conferences</h3>

  <h2>著者紹介文</h2>
  <p> {{descObj.IntroduceAuthor.Ja}} </p>

</template>

<script>
import TopComponent from './components/TopComponent.vue'
import ShowList from './components/ShowList.vue'

import yamlFile from './assets/desc.yaml'

export default {
  name: 'App',
  components: {
    TopComponent,
    ShowList
    // HelloWorld
  },
  data() {
    // console.log('call data()')
    return {
      descObj: {}, // descObjを初期化
    };
  },  
  
  // Lifecycle https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
  beforeMount() {
    console.log('call beforeMounted.')
    try {
      // this.descObj = jsYaml.load(yamlFile);
      this.descObj = yamlFile
      console.log('mnt %o', this.descObj) // debug check desc.yaml
    } catch (e) {
      console.log(e)
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
