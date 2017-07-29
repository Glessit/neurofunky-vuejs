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
        debugger;
            // after facebook return user to this endpoint we should to check code param.
            let code = this.$route.query.code;
            this.checkFacebookCode(code);

            if (this.authStatus) {
                // now we've token for access with secured api, set it for each request
                // get firstName, lastName for already authenticated user
                this.authStatus = authResult.status;
                this.firstName = authResult.firstName;
                this.lastName = authResult.lastName;
            }
            else {
                console.log('auth. failed');
            }

            this.$http
                .get('http://localhost:8081/api/trackasdasdasd')
                .then(
                    function (response) {
                    debugger;
                        this.tracks = response.data.content;
                    },
                    function (response) {
                    debugger;
                        console.log('An error occurred.');
                    }
                );
        },
        methods: {
            checkFacebookCode(code) {
                this.$http.get('http://localhost:8081/api/facebook/login/handler?code=' + code)
                .then(
                    function (response) {


                        this.$store.commit('auth', {
                            status: true,
                            token: response.data.token,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName
                        });

                        this.$localStorage.set('authToken', response.data.token);

                    },
                    function (response) {
                        // todo: set status as false
                        console.log('An error occurred.');
                    }
                );
            }
        }
    }
</script>
