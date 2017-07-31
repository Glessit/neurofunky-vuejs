import VueRouter from 'vue-router'

import FacebookAuthComponent from './FacebookAuthComponent.vue'

import Root from './Root.vue'
import News from './News.vue';

const Foo = {template: '<div>fssssoo {{ this.$route.query }}</div>', created: function () {

}}
const Bar = { template: '<div>bar component!!!!!!1!</div>' }

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component:  Root,
            children: [
                {

                    path: 'news',
                    component: News
                },
                {

                    path: 'posts',
                    component: Bar
                }
            ]
        },
        { path: '/api/facebook/login/handler', component: FacebookAuthComponent},
        { path: '/bar', component: Bar }
    ]
});