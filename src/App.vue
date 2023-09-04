<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" v-bind:descObj="this.descObj" />
  <p> {{ descObj }} </p>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import loadYamlFile from './utils'

// import jsYaml from 'js-yaml';    // npm install js-yaml --save
// import jsYaml from 'yaml-loader';
import yamlFile from './assets/desc.yaml'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    console.log('call data()')
    return {
      descObj: {}, // descObjを初期化
    };
  },  
  
  mounted() {
    console.log('call mounted.')
    try {
      // this.descObj = jsYaml.load(yamlFile);
      this.descObj = yamlFile
      console.log('mnt %o', this.descObj)
      console.log(this.descObj.Head)
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
