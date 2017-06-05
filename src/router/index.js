import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Audio from '../components/Audio'
import VueAudio from '../components/VueAudio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vueaudio',
      name: 'VueAudio',
      component: VueAudio
    },
    {
      path: '/',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
