<template>
<div id="nav">
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/brazil">Brazil</router-link>
  <router-link to="/hawaii">Hawaii</router-link>
  <router-link to="/panama">Panama</router-link>
  <router-link to="/jamaica">Jamaica</router-link> -->
  <!-- <router-link to="/about">About</router-link> -->
  <router-link to="/" id="logo">Travel Guide App</router-link>
  <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}">
            {{ destination.name }}
            <!-- <img :src="`images/${destination.image}`" :alt="destination.name"> -->        
  </router-link>
  <router-link :to="{name:'protected'}">Dashbord</router-link>
</div>
</template>
<script>
   import sourceData from '@/data.json'
   export default{
    data() {
      return {
        destinations : sourceData.destinations,
      }
    },
   }
</script>
<style>
  #nav .vue-school-active-link{
        color: aqua;
        border-bottom: 2px solid antiquewhite;
    }
</style>