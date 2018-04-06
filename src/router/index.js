import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Selectbox from '@/components/Selectbox'
import Slider from '@/components/Slider'
import Draggable from '@/components/Draggable'
import Been from '@/components/Been'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/selectbox',
      name: 'Selectbox',
      component: Selectbox
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: Draggable
    },
    {
      path: '/been',
      name: 'Been',
      component: Been
    }
  ]
})
