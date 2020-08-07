import axios from 'axios'

export default ({ req }) => {

    if (typeof window === 'undefined') {
        // the window object is only defined in the browser
        // since it is not defined here, we must be on the server.
        // http://SERVICE_NAME.NAMESPACE.svc.cluster.local 
        // kubectl get namespace
        // kubectl get services -n ingress-nginx
        
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        })
        
    } else {
        // in the browser!
        
        return axios.create({
            baseURL: '/'
        })
    }
}