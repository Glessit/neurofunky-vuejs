<template>
    <div class="news_item_container">
        <div class="uk-card uk-card-default uk-card-large">
            <div class="uk-card-header">
                <p class="uk-margin-remove-top" style="text-align: right;">
                    Created by  at <time datetime="2016-04-01T19:00">{{item.created.monthValue}}.{{item.created.dayOfMonth}}.{{item.created.year}}</time>
                </p>
            </div>
            <div class="uk-card-media-top">
                <img :src="item.image" alt="" width="534" height="200"/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{item.title}}</h3>
                <div>{{item.news}}</div>
            </div>
        </div>
    </div>
</template>

<style>
    .news_item_container {
        margin-bottom: 15px;
    }
    .uk-card-body h3 {
        font-family: 'Montserrat Alternates';
        font-weight: bold;
        font-size: 19px;
        margin-bottom: 10px;

    }
    .uk-card-body div {
        font-family: 'Montserrat Alternates';
        font-size: 11px;
    }
    .uk-card-header {
        font-family: 'Montserrat Alternates';
        font-size: 10px;
        padding: 15px 30px !important;
    }
    .uk-card-large.uk-card-body, .uk-card-large .uk-card-body {
        padding: 30px;
    }
</style>

<script>
    export default {
        props: ['item'],
        data(){
            return {
                msg:'hello vue'
            }
        }
    }
</script>
