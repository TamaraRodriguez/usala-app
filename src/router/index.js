import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Registro from '../views/auth/Registro.vue'
import Listado from '../views/Listado.vue'
import RegistroUser from '../views/auth/RegistroUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/registrouser',
    name: 'RegistroUser',
    component: RegistroUser
  },
  {
    path: '/listado',
    name: 'Listado',
    component: Listado
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
