import Vue from 'vue'
import Vuex from 'vuex'

import {BACKEND} from './applicationConst'

Vue.use(Vuex);
import {router} from './router'

export const store = new Vuex.Store({
    state: {
        settings: {
            backendPath: BACKEND
        },
        auth: {
            status: false,
            token: null,
            firstName: '',
            lastName: ''
        },
        authStatus: false,
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        auth(state, payload) {
            state.auth = payload;

            // if localStorage has authToken key and headers hasn't X-NFK-AUTH key -> set it
            if (Vue.localStorage.get('authToken') && !Vue.http.headers.common['X-NFK-AUTH']) {

                console.log('set auth. token ..');
                // Vue.http.headers.common['X-NFK-AUTH'] = Vue.localStorage.get('authToken')+'1';
                Vue.http.interceptors.push((request, next)  => {
                    request.headers.set('X-NFK-AUTH', Vue.localStorage.get('authToken'));
                    next((response) => {
                        if(response.status == 401 ) {
                            // clear localStorage, show error popup
                            Vue.localStorage.remove('authToken');
                            UIkit.modal.dialog('<p class="uk-modal-body">Probably your token has expired</p>');
                            // router.go('/login?unauthorized=1');
                        }
                        if(response.status == 403 ) {
                            Vue.localStorage.remove('authToken');
                            UIkit.modal.dialog('<p class="uk-modal-body">You have not access</p>');
                        }
                    });
                });
            }

            router.push('/');
        }
    }
})