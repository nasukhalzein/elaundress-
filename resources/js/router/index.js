import Dashboard from '../views/dashboard/Dashboard'
import Users from '../views/users/Users'

export default{
    mode:'history',

    routes:[
        {
            path:'/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path:'/users',
            name: 'pages.users',
            component: Users
        }
    ]

}