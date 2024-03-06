<template>
    <div>
        <h1>Hi {{ username }}</h1>
    </div>
    <button @click="logout">Log Out</button>
    <router-link :to="{name:'invoices'}">
        <button>Invoices</button>
    </router-link>
</template>
<script>
   export default{
    data(){
        return{
            username:window.user,
        }
    },
    methods:{
        logout(){
            window.user=null
            this.$router.push({name:'Home'})
        }
    }
   }
</script>