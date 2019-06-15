import drog from '../components/drag'
let drag = {};
drag.install = (Vue,message) => { 
    
    Vue.component('wgy', {
        render: h => h(drog)
    })
}
export default drag;