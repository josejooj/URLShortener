import { get as URLData } from './routes/URLData'
import { post as generateUrl } from './routes/generateUrl'
import { get as customURLValid } from './routes/customURLCheck'
import { post as newAccess } from './routes/newAccess'

const routes = [
    {
        route: "/api/URLData",
        method: 'get',
        function: URLData
    },
    {
        route: "/api/generateUrl",
        method: "post",
        function: generateUrl
    },
    {
        route: "/api/newAccess",
        method: 'post',
        function: newAccess
    },
    {
        route: "/api/customURLCheck",
        method: 'get',
        function: customURLValid
    }
]

export default routes; // Export all API Routes