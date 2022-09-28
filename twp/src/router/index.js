import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeleteCardView from '../views/DeleteCardView.vue'
import DeleteListView from '../views/DeleteListView.vue'
import NewListView from '../views/NewListView.vue'
import NewCardView from '../views/NewCardView.vue'
import EditView from '../views/EditView.vue'
import EditListView from '../views/EditListView.vue'
import ShowView from '../views/ShowView.vue'
import DeleteCommentView from '../views/DeleteCommentView.vue'
import EditCommentView from '../views/EditCommentView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/deleteCard/:id',
    name: 'deleteCard',
    component: DeleteCardView
  },

  {
    path: '/deleteList/:id',
    name: 'deleteList',
    component: DeleteListView
  },

  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },

  {
    path: '/newList',
    name: 'newList',
    component: NewListView
  },

  {
    path: '/newCard/:idCat',
    name: 'newCard',
    component: NewCardView
  },

  {
    path: '/editList/:id',
    name: 'editList',
    component: EditListView
  },

  {
    path: '/show/:id',
    name: 'show',
    component: ShowView
  },

  {
    path: '/deleteComment/:id',
    name: 'deleteComment',
    component: DeleteCommentView
  },

  {
    path: '/editComment/:id',
    name: 'editComment',
    component: EditCommentView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
