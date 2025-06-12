import { createWebHistory, createRouter } from 'vue-router'

import IndexView from './views/IndexView.vue'
import SalesAssistView from './views/SalesAssistView.vue'
import EssentialsView from './views/EssentialsView.vue'
import ReportView from './views/ReportView.vue'
import SellView from './views/SellView.vue'

const routes = [
    { path: '/', name: 'index', component: IndexView },
    { path: '/sales-assist', name: 'salesAssist', component: SalesAssistView },
    { path: '/essentials', name: 'essentials', component: EssentialsView },
    { path: '/report/:id?', name: 'report', component: ReportView },
    { path: '/sell', name: 'sell', component: SellView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
