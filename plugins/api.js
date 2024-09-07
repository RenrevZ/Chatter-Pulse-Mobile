import AuthService from "./services/AuthService";

export default ({ $axios }, inject) => {
    const api = {
      auth: AuthService({ $axios }),
    }
    
    // Inject into context as $api
    inject('api', api)
}