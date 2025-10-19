import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import AiproductView from '@/views/products/AiproductView.vue'
import EcommerceView from '@/views/products/EcommerceView.vue'
import MobileproductView from '@/views/products/MobileproductView.vue'
import WebsiteproductView from '@/views/products/WebsiteproductView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    {
      path: '/services',
      name: 'Services',
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },

    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },

    {
      path: '/products/aiproducts',
      name: 'Aiproducts',
      component: AiproductView,
    },
    {
      path: '/products/websites',
      name: 'Website',
      component: WebsiteproductView,
    },
    {
      path: '/products/mobileapps',
      name: 'MobileApps',
      component: MobileproductView,
    },
    {
      path: '/products/ecommerce',
      name: 'ecommerce',
      component: EcommerceView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
