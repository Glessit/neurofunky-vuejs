<template>
    <div>
        <NewsItem v-for="n in news" v-bind:item="n"></NewsItem>
    </div>
</template>

<style>

    h1 {
        color: #425163;
        font-size: 17px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 10px;
        padding-bottom: 0px;
    }

</style>

<script>
    import NewsItem from './NewsItem.vue';

    export default {
    components: {
        'NewsItem': NewsItem
      },
        data () {
            return {
              msg: 'blalba',
              news: []
            }
        },
        created: function () {
    console.log('Значение a: ' + this.msg);

    // GET /users
          this.$http.get('http://localhost:8081/api/news?page=0&size=10&sort=created,desc').then(
            function (response) { // Success.
                console.log(response);

              this.news = response.data.content;
            },
            function (response) { // Error.

              console.log('An error occurred.');
            }
          );

          /*this.$http.put(
          'http://localhost:8081/api/news/create',
          {
            "visible": "true",
            "shortNews": "true",
            "news": "Hi!",
            "title": "title of news",
            "image": "uri for image of news"
          }).then(
            function (response) { // Success.


            },
            function (response) { // Error.


            }
          );*/
  }

    }
</script>
