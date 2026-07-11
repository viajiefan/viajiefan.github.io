<template>
    <h2>Education</h2>

    <div class="top">
    <ul>
        <li> {{descObj.Education.Doctor.start_year}}.{{descObj.Education.Doctor.start_month}} - {{descObj.Education.Doctor.end_year}}.{{descObj.Education.Doctor.end_month}} {{descObj.Education.Doctor.title}}
            <p class="desc"> ( {{descObj.Education.Doctor.engtitle}} ) </p>
            <p class="desc"> 知的インタフェース研究室 Advisor: <a href="https://iui.ci.seikei.ac.jp/yukiko-i-nakano/" target="_blank" rel="noopener noreferrer">Prof. Yukiko I. Nakano</a></p>
            <p class="desc"> 学位論文 "{{descObj.Education.Doctor.thesis_title}}" <a id="icon_link" v-bind:href="descObj.Education.Doctor.thesis_link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-link"></i></a></p>
            <p class="desc"> ( {{descObj.Education.Doctor.thesis_engtitle}} )</p>
        </li>

        <li> {{descObj.Education.Master.start_year}}.{{descObj.Education.Master.start_month}} - {{descObj.Education.Master.end_year}}.{{descObj.Education.Master.end_month}} {{descObj.Education.Master.title}}
        <p class="desc"> ( {{descObj.Education.Master.engtitle}} ) </p>
        <p class="desc"> 知的インタフェース研究室 Advisor: <a href="https://iui.ci.seikei.ac.jp/yukiko-i-nakano/" target="_blank" rel="noopener noreferrer">Prof. Yukiko I. Nakano</a></p>
        </li>

    </ul>
    </div>

</template>

<script>
export default {
  name: 'EducationComponent',
  props: {
    descObj: {},
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 30px;
}
.desc {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 22px;
}

</style>