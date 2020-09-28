import Page404 from './components/comp404'
import Home from './views/home'
import Security from './views/security'
import Privacypolicy from './views/privacypolicy'
import Info from './views/info/info'
import Access from './views/info/access'
import Boards from './views/info/boards'
import History from './views/info/history'
import Philosophy from './views/info/philosophy'
import Products from './views/info/products'

export const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '*', name: 'Page404', component: Page404
    },
    {
        path: '/about/info', name: 'Info', component: Info
    },
    {
        path: '/about/info/access', name: 'Access', component: Access
    },
    {
        path: '/about/info/boards', name: 'Boards', component: Boards
    },
    {
        path: '/about/info/history', name: 'History', component: History
    },
    {
        path: '/about/info/philosophy', name: 'Philosophy', component: Philosophy
    },
    {
        path: '/about/info/products', name: 'Products', component: Products
    },
    {
        path: '/privacypolicy', name: 'Privacypolicy', component: Privacypolicy
    },
    {
        path: '/security', name: 'Security', component: Security
    }
]