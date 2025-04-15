import { createRouter, createWebHistory } from 'vue-router'
import ReportForm from '../components/BodyPlaceHolder.vue'
import SuccessPage from '../views/SuccessPage.vue'

const routes = [
  { path: '/', component: ReportForm },
  { path: '/success', component: SuccessPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
