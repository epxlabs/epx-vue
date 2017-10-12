import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Devops from './components/Devops'
import Serverless from './components/Serverless'
import NodeJS from './components/NodeJS'
import Clojure from './components/Clojure'
import Blog from './components/Blog'
import Careers from './components/Careers'
import BlogPost from './components/BlogPost'
import NotFoundView from './components/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/devops',
    name: 'Devops',
    component: Devops
  },
  {
    path: '/serverless',
    name: 'Serverless',
    component: Serverless
  },
  {
    path: '/nodejs',
    name: 'NodeJS',
    component: NodeJS
  },
  {
    path: '/clojure',
    name: 'Clojure',
    component: Clojure
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/blog/:title',
    name: 'Blog-Post',
    component: BlogPost
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
