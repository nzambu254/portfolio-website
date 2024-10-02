<template>
  <section class="about">
    <div class="about-content">
      <img
        src="@/assets/profile.jpg"
        alt="Your Name"
        class="profile-pic"
      >
      <div class="bio">
        <h2>I'm <span class="highlight">Nzambu Joseph</span></h2>
        <p>
          A certified fullstack software developer with passion for creating mobile applications that make a positive impact. I have experience with various technologies and always strive to learn more.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  position: relative; /* Allows absolute positioning of child elements */
  padding: 50px;
  background: linear-gradient(rgba(245, 245, 245, 0.6), rgba(245, 245, 245, 0.6)); /* Gradient overlay */
  text-align: center;
}

.about::before {
  content: "";
  position: fixed; /* Fixed position to keep it stable on the page */
  top: 0; /* Position at the top */
  left: 0; /* Position at the left */
  width: 100vw; /* Cover the entire width */
  height: 100vh; /* Cover the entire height */
  background-image: url('@/assets/codespace.jpg'); /* Background image */
  background-size: cover; /* Ensure the image covers the entire area */
  background-position: center; /* Center the image */
  z-index: -1; /* Ensure the image is behind other content */
  text-align: center;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative; /* Positioning context for children */
  z-index: 1; /* Bring content in front of the background image */
}

.profile-pic {
  border-radius: 50%;
  width: 200px; /* Increased width for a larger profile picture */
  margin-right: 20px;
}

.bio {
  max-width: 600px;
  text-align: center;
}
</style>
