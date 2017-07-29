<template>
    <div>
        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
    </div>
</template>

<style lang="scss">

  @import "../node_modules/uikit/src/scss/variables";
  @import "../node_modules/uikit/src/scss/mixins-theme";

  @import "../node_modules/uikit/src/scss/components/icon";

  // 3. Your custom mixin overwrites.
  @mixin hook-card() { color: #000; }

  // 4. Import UIkit.
  @import "../node_modules/uikit/src/scss/uikit-theme";
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,700');

  a {
      color: #5A87BD;
  }

  .disabled-link {
      color: #B6D3F7;
      font-family: 'Montserrat Alternates';
      font-size: 12px;
  }

  h1 {
        font-size: 29px;
        color: antiquewhite;
        font-weight: bold;
        font-family: 'Patua One', sans-serif;
        margin: 0px;
        padding: 0px;
  }

    .tlg_contact {
        font-family: 'Patua One', sans-serif;
        font-size: 16px;
        color: #8596a4;
    }
</style>

<script>
    import AppHeader from './AppHeader.vue';
    import AppFooter from './AppFooter.vue';

    export default {
      name: 'app',
      components: {
        'AppHeader' : AppHeader,
        'AppFooter' : AppFooter,
      },
      data () {
        return {}
      }
    }
</script>