<template>
    <div>
        <div style="background-color:#425163; height: 5px;"></div>
        <div class="uk-container uk-container-small">
            <div class="uk-grid-small" style="height: 70px; margin-top:15px" uk-grid>
                <div class="uk-width-3-5 uk-text-center" style="">
                    <div>
                        <div>
                            <img src="./assets/neurofunk_logo.gif" style="width:150px;"/>
                        </div>
                        <div>
                            <p class="logo-slogan">
                                Listening Neurofunk!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="uk-width-expand">
                    <div class="contact">
                        <div style="margin-bottom: 10px; border-bottom: 10px solid #F9F9F9;color: white;">
                            <span style="color: grey;margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'">
                                    Telegram official <a href="https://t.me/NeurofunkClubChannel" target="_blank"> channel</a>
                                </span>
                        </div>
                        <div style="margin-bottom: 10px; border-bottom: 10px solid #F9F9F9;color: white;">
                            <div v-if="this.$store.state.auth.status">
                                <span style="margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'; color: gray;">
                                    Hello {{this.$store.state.auth.firstName}} !
                                </span>

                            </div>
                            <div v-else>
                                <span style="margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'">
                                    <a :href="facebookLoginURL">Facebook login</a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .contacts {
        font-family: 'Montserrat Alternates';
        font-size: 11px;
        color: gray;
        line-height: 12px;
    }
    .logo-slogan {
        font-family: 'Montserrat Alternates';
        font-size: 11px;
        color: gray;
        line-height: 12px;
    }
    .contacts img {
        opacity: 0.5;
    }
</style>

<script>

    import UIkit from '../node_modules/uikit/dist/js/uikit.js'

    export default {
        data () {
            return {
              facebookLoginURL: ''
            }
        },
        methods: {
            openFacebookLoginPage: function() {
                   console.log('testsssss');
                UIkit.modal.dialog('<p class="uk-modal-body">111</p>');
            }
        },
        created: function () {
            // get prepared facebook login link
            this.$http.get('http://localhost:8081/api/facebook/login/dialog/url').then(
            function (response) {
              this.facebookLoginURL = response.data.URL;
            },
            function (response) {}
          );
        }
    }
</script>
