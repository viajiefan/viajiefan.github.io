<template>
    <div>
        <ul>
            <li v-for="(pub, index) in publist" :key="index">
                <h3>{{pub.year}}-{{pub.month}} "{{ pub.title }}"</h3>
    
                <span>Authors: {{ pub.author.join(', ') }}</span> <br>
                <span>In <i>{{ pub.booktitle }}</i></span>
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
  }
}
</script>