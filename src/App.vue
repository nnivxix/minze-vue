<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://minze.dev/" target="_blank">
      <img src="./assets/minze.svg" class="logo minze" alt="Minze logo" />
    </a>
  </div>
  <minze-hello></minze-hello>
  <minze-hanasa></minze-hanasa>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.minze:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
