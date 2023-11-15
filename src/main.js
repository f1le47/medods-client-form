import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')

// const objKeys = Object.keys(this.validator);
//         const objValidator = this.validator[objKeys[0]];
//         const objValidatorKeys = Object.keys(objValidator);
//         const validator = {}
//         objValidatorKeys.forEach(key => {
//           if (key === 'lettersOnlyValidator') {
//             validator[key] = objValidator[key].lettersOnlyValidator
//           }
          
//           validator[key] = objValidator[key]
//         })
//         console.log(validator)
//         return {
//             value: validator
//         };