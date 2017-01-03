
Vue.component('template1', {
    template: '#template1'
})

Vue.component('template2', {
    template: '#template2'
})

new Vue({
    el: 'body',
    data: {
        currentView: 'template1'
    }
})