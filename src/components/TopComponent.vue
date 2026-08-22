<template>
    <div class="top">
        <h1 > {{descObj.Top.JaName}} ({{descObj.Top.EngName}})</h1>
        <p> ({{descObj.Top.Yomi}}) </p>
        <p> <i class="fa-regular fa-envelope" style="color: rgb(0, 122, 25);"></i> {{descObj.Top.Mail1}}</p>
        <p> <i class="fa-regular fa-envelope" style="color: rgb(0, 122, 25);"></i> {{descObj.Top.Mail2}}</p>
        <p> <i class="fa-solid fa-building-columns" style="color: rgb(0, 122, 25);"></i> {{descObj.Top.Explain}} </p>  
        <p> 
          <a v-bind:href="descObj.Top.LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-linkedin" style="color: rgb(0, 122, 25);"></i> LinkedIn</a>
          &nbsp;&nbsp;
          <a v-bind:href="descObj.Top.GitHub" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="color: rgb(0, 122, 25);"></i> GitHub</a>
          &nbsp;&nbsp;
          <a v-bind:href="descObj.Top.GoogleScholar" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google-scholar" style="color: rgb(0, 122, 25);"></i> Google Scholar</a>
          &nbsp;&nbsp;
          <a v-bind:href="descObj.Top.ORCID" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-orcid" style="color: rgb(0, 122, 25);"></i> ORCiD</a>
        </p>
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