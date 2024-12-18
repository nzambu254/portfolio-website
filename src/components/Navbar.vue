<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">
          <h1>About</h1>
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
          <h1>My work</h1>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <h1>Contact</h1>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background: #119ab3;
  padding: 15px;
  font-weight: bold;
}
ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
li {
  color: #0c0404;
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #070101;
}
a:hover {
  color: #00d853;
}
</style>
