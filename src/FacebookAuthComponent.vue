<template>
    <div>
        <div v-if="!this.$store.state.auth.status">
            blabla
        </div>
        <div v-else>
            hello {{this.$store.state.auth.firstName}}
        </div>
    </div>
</template>
<style>

</style>
<script>

    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import {authModel} from './models'

    export default {
        data() {
            return {
            }
        },
        created: function() {
            // after facebook return user to this endpoint we should to check code param.
            let code = this.$route.query.code;
            this.checkFacebookCode(code);

        },
        methods: {
            checkFacebookCode(code) {
                this.$http.get('http://localhost:8081/api/facebook/login/handler?code=' + code)
                .then(
                    function (response) {
                        this.$localStorage.set('authToken', response.data.token);
                        this.$store.commit('auth', {
                            status: true,
                            token: response.data.token,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName
                        });
                    },
                    function (response) {
                        // todo: set status as false
                        console.log('An error occurred.');
                    }
                );
            },
            logout() {
                // clear localStorage and send request for remove token
            }
        }
    }
</script>
