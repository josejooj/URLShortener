import routeLogger from "./routeLogger";

const routes = [
    {
        route: "*",
        method: 'use',
        function: routeLogger
    }
]

export default routes;