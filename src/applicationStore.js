import Vue from 'vue'
import Vuex from 'vuex'

import {BACKEND} from './applicationConst'

Vue.use(Vuex)

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
            window.location.href = 'http://localhost';
        }
    }
})