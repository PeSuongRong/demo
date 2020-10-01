import Page404 from './components/comp404'
import Home from './views/home'
import Security from './views/security'

export const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '*', name: 'Page404', component: Page404
    },
    {
        path: '/security', name: 'Security', component: Security
    }
]