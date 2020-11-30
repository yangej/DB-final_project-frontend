<template>
  <v-app>
    <v-main class="accent">
      <transition name="fade" mode="out-in">
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
  letter-spacing: 0.1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
