import { get as home } from './home'
import { post as generateUrl } from './generateUrl'
import { get as customUrlValid } from './customUrlCheck'
import { get as redirect } from './redirect'

const routes = [
    {
        route: "/",
        method: 'get',
        function: home
    },
    {
        route: "/generateUrl",
        method: "post",
        function: generateUrl
    },
    {
        route: "/customUrlCheck",
        method: 'get',
        function: customUrlValid
    },
    {
        route: "*",
        method: "get",
        function: redirect
    }
]

export default routes;