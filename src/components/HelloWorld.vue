<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> Child - {{descObj}} </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    descObj: {},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
h3 {
  margin: 40px 0 0;
}
*/
</style>
