<template>
    <div class="uk-grid-small producer" uk-grid>
        <div class="uk-width-expand" uk-leader><a href="s">{{getArtistsForTrack(item.artists)}}</a></div>
        <div>{{item.track}} ({{getTrackLength(item.length)}})</div>
    </div>
</template>

<style>

</style>

<script>
    export default {
        props: ['item'],
        data(){
            return {
                msg:'hello vue'
            }
        },
         methods: {
            getArtistsForTrack: function(artists) {
                return artists[0].name;
            },
            getTrackLength(trackLength) {
                let result;
                let byMin = trackLength / 60;
                let minutes = parseInt(byMin.toString().split('.')[0]) * 60;
                console.log(minutes)
                let seconds = trackLength - minutes
                result = byMin.toString().split('.')[0] + ':' + seconds;
                return result;
            }
         }
    }
</script>
