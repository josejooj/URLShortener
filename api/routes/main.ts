import APIRoutes from '../api/main'             // Get routes from API
import middlewares from '../middlewares/main'
import { get as home } from './home'            // Get homepage function
import { get as redirect } from './redirect'    // Get redirect function
import { get as view } from './view'

const routes = [           // Creating the routes map
    ...middlewares,
    {
        route: "/",
        method: 'get',
        function: home
    },
    {
        route: "/view/:viewUrl",
        method: 'get',
        function: view
    },
    ...APIRoutes,
    {
        route: "*",
        method: "get",
        function: redirect
    }
]

export default routes;      // Exporting all routes