<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
:root {
  --main: #5BC88F;
  --main-hover: #3A885F;
  --bg: #efefef;
  --shadow: rgba(191, 191, 191, 0.5) 0px 0px 10px;
}
* {
  transition: 0.25s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a {
    color: var(--main);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--main-hover);
    }
  }
  .icon {
    width: 126px;
    height: 126px;
  }
</style>
