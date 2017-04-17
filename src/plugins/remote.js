import axios from 'axios'
import qs from 'qs'

export default {
  install(Vue, options) {
    Vue.prototype.$remote = axios.create({
      baseURL: options.url,
      timeout: options.timeout,
      transformRequest: [function(data) {
        return qs.stringify(data)
      }]
    })
  }
}
