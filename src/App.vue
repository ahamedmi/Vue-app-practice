<script>
   import TheNavigation from '@/components/TheNavigation.vue'
   export default{
      components :{TheNavigation}
   }
</script>

<template>
  
  <TheNavigation/>
  <div class="container">
    <!-- <router-view v-slot="{Component}">
         <transition name="fade" mode="out-in">
             <component :is="Component" :key="$route.path"></component>
         </transition>
    
    </router-view> -->
    <router-view></router-view>
  </div>
 
</template>

<style>
   /* .slide-enter-active,
   .slide-leave-active{
    transition: opacity 0.3s;
   }
   .slide-enter,
   .slide-leave-to{
    opacity: 0;
   } */

</style>

