import 'bootstrap/dist/css/bootstrap.css';
import VueTypedJs from 'vue-typed-js';
import ElementLoading from 'vue-element-loading'


export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueTypedJs);
    Vue.use(ElementLoading);
    // if (typeof process === 'undefined') { // process is undefined in a browser         
    //  Vue.use(VueTypedJs)
    // }
}