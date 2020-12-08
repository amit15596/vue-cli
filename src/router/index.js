import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Candidate from '@/components/Candidate'
import Child from '@/components/Child'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/candidate/:id",
      name: "Candidate",
      component: Candidate,
      children: [
        {
          path: "child",
          component: Child
        }
      ]
    }
  ]
});
