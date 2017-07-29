<template>
    <div>
        <Producer v-for="item in byTracksCount" v-bind:item="item"></Producer>
    </div>
</template>

<style>
.uk-grid + .uk-grid-small, .uk-grid-small > .uk-grid-margin, * + .uk-grid-margin-small {
    margin-top: 5px;
}
</style>

<script>

    import Producer from './Producer.vue'
    export default {
        components: {
            'Producer': Producer
        },
        data() {
            return {
                byTracksCount: []
            }
        },
        created: function () {

            this.$http
                .get('http://localhost:8081/api/artist/tracks/count')
                .then(
                    function (response) {
                        this.byTracksCount = response.data;
                    },
                    function (response) {
                        console.log('An error occurred.');
                    }
                );
        }
    }
</script>
