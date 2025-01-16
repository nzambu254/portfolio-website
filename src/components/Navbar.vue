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
/* Add Google Font link for Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

.navbar {
  display: flex;
  justify-content: center;
  background: #119ab3;
  padding: 0px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Using the Poppins font */
}

ul {
  list-style: none;
  display: flex;
  gap: 15px; /* Increased space between items */
}

li {
  color: #0c0404;
  font-size: 16px; /* Increased font size */
}

a {
  text-decoration: none;
  color: #070101;
}

a:hover {
  color: #00d853;
}
</style>
