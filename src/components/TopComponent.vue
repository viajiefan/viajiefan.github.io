<template>
    <div class="top">
        <h1> {{descObj.Top.JaName}} ({{descObj.Top.EngName}})</h1>
        <p> ({{descObj.Top.Yomi}}) </p>
        <p> <i class="fa-regular fa-envelope"></i> {{descObj.Top.Mail1}}</p>
        <p> <i class="fa-regular fa-envelope"></i> {{descObj.Top.Mail2}}</p>
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