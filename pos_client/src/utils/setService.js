const userService = require('./service/userService').default

import Vue from 'vue'

export function setService(localVue) {
  const vueValue = localVue || Vue
  vueValue.prototype.userService = userService;

}
