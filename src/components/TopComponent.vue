<template>
    <div class="top">
        <h1> {{descObj.Top.JaName}} ({{descObj.Top.EngName}})</h1>
        <p> {{descObj.Top.Explain}} </p>        
    </div>
</template>

<script>
export default {
  name: 'TopComponent',
  props: {
    descObj: {},
  }
}
</script>

<style scoped>
.top {
  text-align: center;
}

</style>