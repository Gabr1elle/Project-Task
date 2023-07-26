<template>
  <div id="app">
    <nav>
      <router-link to="/">HOME</router-link> |
      <router-link to="/about">ABOUT</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #4187ce;
}

nav a.router-link-exact-active {
  color: #22a0cd;
}
</style>
