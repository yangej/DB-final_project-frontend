<template>
  <v-app>
    <v-main>
      <transition name="fade-transform" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  transition: 0.25s;
}

.shadow {
  box-shadow: rgba(191, 191, 191, 0.5) 0px 0px 10px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

.icon {
  width: 126px;
  height: 126px;
}
</style>
