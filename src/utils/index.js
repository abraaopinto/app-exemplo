import utils from './utils'

export default function (Vue) {
  Vue.prototype.$validations = { ...utils }
}
