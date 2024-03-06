

import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'
//import About from '@/views/About.vue'
//import Brazil from '@/views/Brazil.vue'

//import Hawaii from '@/views/Hawaii.vue'
//import Panama from '@/views/Panama.vue'
//import Jamaica from '@/views/Jamaica.vue'

const routes= [
    {path:'/',name:'Home',component:Home},
    {
        path:'/protected',
        name:'protected',
        component:()=>import('@/views/Protected.vue'),
        meta:{
            requiresAuth:true,
        }
    },
    {
        path:'/invoices',
        name:'invoices',
        component:()=>import('@/views/Invoices.vue'),
        meta:{
            requiresAuth:true,
        }
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login.vue')
    },
    //{path:'/about',name:'About',component:About},
    /*{path:'/brazil',name:'Brazil',component:()=>import('@/views/Brazil.vue')},
    {path:'/hawaii',name:'Hawaii',component:()=>import('@/views/Hawaii.vue')},
    {path:'/jamaica',name:'Jamaica',component:()=>import('@/views/Jamaica.vue')},
    {path:'/panama',name:'Panama',component:()=>import('@/views/Panama.vue')},*/
    {path:'/destination/:id/:slug',
    name:'destination.show',
    component:()=>import('@/views/destinationShow.vue'),
    //props:true
    props : route=>({...route.params,id:parseInt(route.params.id)}),
    children:[
        {
            path:':experienceSlug',
            name:'experience.show',
            component:()=>import('@/views/ExperienceShow.vue'),
            props:  route=>({...route.params,id:parseInt(route.params.id)})
        }
    ],

    beforeEnter(to,from){
        const exist = sourceData.destinations.find(destination=>destination.id===parseInt(to.params.id))

        if(!exist) return {
             name:'NotFound',
             //allows keeping the URL while rendering different page 
             params:{pathMatch:to.path.split('/').slice(1)},
             query:to.query,
             hash:to.hash
        }
  }
},
    
    /*{
        path:'/destination/:id/:slug/:experienceSlug',
        name:'experience.show',
        component:()=>import('@/views/ExperienceShow.vue'),
        props:  route=>({...route.params,id:parseInt(route.params.id)})
    }*/

    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:()=>import('@/views/NotFound.vue')
    },
   
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass :'vue-school-active-link',
    scrollBehavior(to,from,savedPosition){
        return savedPosition || new Promise((resolve)=>{
            setTimeout(()=>resolve({top:0,behavior:'smooth'}),300)
        })
    }
})
router.beforeEach((to,from)=>{
    if(to.meta.requiresAuth && !window.user){
        return {name:'login',query:{redirect:to.fullPath}}
    }
})
export default router