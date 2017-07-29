<template>
    <div>
        <div>
            <TrackItem v-for="track in tracks" v-bind:item="track"></TrackItem>
        </div>
    </div>
</template>
<style>

</style>

<script>
    import TrackItem from './TrackItem.vue'
    export default {
        data() {
            return {
                tracks: []
            }
        },
        components: {
            'TrackItem': TrackItem
        },
        created: function () {
            this.$http
                .get('http://localhost:8081/api/track?page=0&size=10')
                .then(
                    function (response) {
                        this.tracks = response.data.content;
                    },
                    function (response) {
                        console.log('An error occurred.');
                    }
                );
        }
    }
</script>
