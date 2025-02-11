import { createWebHistory, createRouter } from 'vue-router'

import IndexView from './views/IndexView.vue'
import SalesAssistView from './views/SalesAssistView.vue'
import EssentialsView from './views/EssentialsView.vue'
import ReportView from './views/ReportView.vue'

const routes = [
    { path: '/', name: 'index', component: IndexView },
    { path: '/sales-assist', name: 'salesAssist', component: SalesAssistView },
    { path: '/essentials', name: 'essentials', component: EssentialsView },
    { path: '/report', name: 'report', component: ReportView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
