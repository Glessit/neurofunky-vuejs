<template>
    <div class="uk-container uk-container-small">
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-3-5">
                <div style="color: azure;margin-bottom: 10px; border-bottom: 10px solid #DDE6F1;color: white;">
                    <h1>News</h1>
                    <span style="color: grey;margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'">
                            only
                                <span class="disabled-link">mixes</span>,
                                <span class="disabled-link">tracks</span>,
                                <span class="disabled-link">about club</span>
                        </span>
                </div>
                <router-view></router-view>

            </div>
            <div class="uk-width-expand">
                <div style="margin-bottom: 10px;">
                    <div style="margin-bottom: 10px; border-bottom: 10px solid #E4E4E4;color: white;">
                        <h1>Producers</h1>
                        <span style="color: grey;margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'">
                                by <span class="disabled-link">tracks</span>, <span class="disabled-link">rating</span>
                            </span>
                    </div>
                    <Producers></Producers>

                    <div style="margin-bottom: 10px; border-bottom: 10px solid #E4E4E4;color: white;">
                        <h1>Tracks</h1>
                        <span style="color: grey;margin-left: 11px; font-size: 12px; display: inherit; font-family: 'Montserrat Alternates'">
                                by <span class="disabled-link">created</span>,   <span class="disabled-link">rating</span>
                            </span>
                    </div>
                    <Tracks></Tracks>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>

    import Tracks from './Tracks.vue';
    import Producers from './Producers.vue';

    export default {
      name: 'app',
      components: {

        'Producers' : Producers,
        'Tracks' : Tracks
      },
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
    }
</script>
