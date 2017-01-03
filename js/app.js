
var one = Vue.component('template1', {
    template: '<p>this is template 1</p>'
});

var two = Vue.component('template2', {
    template: '<p>this is template 2</p>'
});

var routes = [
    {path: '/one', component: one},
    {path: '/two', component: two}
]

var router = new VueRouter({
   routes
});

new Vue({
    router
}).$mount('#main-container');
