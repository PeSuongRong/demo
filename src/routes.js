import Page404 from './components/comp404'
import Home from './views/home'

export const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '*', name: 'Page404', component: Page404
    }
]