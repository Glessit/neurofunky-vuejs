<template>

    <div class="uk-grid-small producer" uk-grid>
        <div class="uk-width-expand" uk-leader> <span class="disabled-link">{{item.artist.name}}</span></div>
        <div>{{item.tracks}}</div>
    </div>
</template>

<style>
    .producer div {
        font-family:'Montserrat Alternates'; font-size:12px;
    }
</style>

<script>

    export default{
        props: ['item'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        created: function() {

        }
    }
</script>
